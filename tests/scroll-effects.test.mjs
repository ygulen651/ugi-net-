import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = await readFile(new URL("../app/scroll-effects.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;

// Exercise observer / animation lifecycle without requiring a browser process.
function setup({ reduced = false, supported = true, motion = true, animationFails = false } = {}) {
  const observers = [];
  let cleanup;
  let preferenceChanged;
  let focused;
  const animations = [];
  class Element {
    style = {};
    contains(target) { return target === this; }
    animate(frames, options) {
      if (animationFails) throw new Error("Animation unavailable");
      const animation = { frames, options, cancelled: false, cancel() { this.cancelled = true; } };
      animations.push(animation);
      return animation;
    }
  }
  const target = new Element();
  const media = { matches: reduced, addEventListener(_, fn) { preferenceChanged = fn; }, removeEventListener() {} };
  class Observer {
    watched = new Set();
    constructor(callback) { this.callback = callback; observers.push(this); }
    observe(node) { this.watched.add(node); }
    unobserve(node) { this.watched.delete(node); }
    disconnect() { this.watched.clear(); }
  }
  const root = {
    querySelectorAll(selector) { return selector === ".project-stack" ? [target] : []; },
    addEventListener(_, fn) { focused = fn; },
    removeEventListener() {},
  };
  const exports = {};
  vm.runInNewContext(compiled, {
    exports,
    require() { return { useRef: value => ({ current: value }), useEffect: effect => { cleanup = effect(); } }; },
    window: { innerWidth: 1440, matchMedia: () => media, ...(supported ? { IntersectionObserver: Observer } : {}) },
    document: { activeElement: null },
    IntersectionObserver: Observer,
    HTMLElement: Element,
    Node: Element,
  });
  exports.useScrollEffects({ current: root }, motion);
  return {
    target, animations, media,
    get observer() { return observers.at(-1); },
    enter() { observers.at(-1).callback([{ target, isIntersecting: true }]); },
    focus() { focused({ target }); },
    reduce() { media.matches = true; preferenceChanged(); },
    cleanup() { cleanup?.(); },
  };
}

test("content has no hidden style before observation and remains visible after completion", () => {
  const scene = setup();
  assert.deepEqual(scene.target.style, {});
  assert.equal(scene.animations.length, 0);
  scene.enter();
  assert.equal(scene.animations.length, 1);
  assert.equal(scene.animations[0].options.fill, "backwards");
  assert.equal(scene.animations[0].frames.at(-1).opacity, 1);
  scene.animations[0].onfinish();
  assert.equal(scene.animations[0].cancelled, true);
  assert.deepEqual(scene.target.style, {});
  scene.enter();
  assert.equal(scene.animations.length, 1);
});

test("motion off, reduced motion and unsupported browsers keep content unmodified", () => {
  for (const options of [{ motion: false }, { reduced: true }, { supported: false }]) {
    const scene = setup(options);
    assert.equal(scene.animations.length, 0);
    assert.equal(scene.observer, undefined);
    assert.deepEqual(scene.target.style, {});
  }
});

test("keyboard focus, changed motion preference and unmount cancel active effects", () => {
  for (const action of ["focus", "reduce", "cleanup"]) {
    const scene = setup();
    scene.enter();
    scene[action]();
    assert.equal(scene.animations[0].cancelled, true, action);
    assert.deepEqual(scene.target.style, {});
  }
});

test("an animation error never leaves the content hidden", () => {
  const scene = setup({ animationFails: true });
  assert.doesNotThrow(() => scene.enter());
  assert.deepEqual(scene.target.style, {});
  assert.equal(scene.observer.watched.size, 0);
});
