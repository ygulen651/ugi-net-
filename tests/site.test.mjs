import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const rendered = (async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const response = await worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
  return { response, html: await response.text() };
})();

test("production page renders the Turkish site with complete content and no loading placeholder", async () => {
  const { response, html } = await rendered;
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /text\/html/);
  assert.match(html, /<html[^>]*lang="tr"/);
  assert.match(html, /<title>Ugi Ajans/);
  for (const text of ["GELECEĞİN DİJİTAL", "HİKÂYESİNİ YAZIYORUZ.", "Teklif Al", "Nova Studio", "Luma Living", "Forma Active"]) assert.ok(html.includes(text), text);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton|Your site is taking shape/);
  assert.match(html, /konsept çalışmalar/);
});

test("all navigation anchors have a destination in the rendered page", async () => {
  const { html } = await rendered;
  const ids = new Set(Array.from(html.matchAll(/\bid="([^"]+)"/g), match => match[1]));
  const anchors = Array.from(html.matchAll(/href="#([^"]+)"/g), match => match[1]);
  assert.ok(anchors.length >= 8);
  for (const anchor of anchors) assert.ok(ids.has(anchor), `Missing anchor: ${anchor}`);
  assert.match(html, /aria-label="Ana menü"/);
  assert.match(html, /<dialog/);
});

test("critical imagery, branding, and font assets are included in production", async () => {
  const root = new URL("../dist/client/", import.meta.url);
  await Promise.all(["images/landscape.jpg", "favicon.png", "fonts/google-fonts.css"].map(path => access(new URL(path, root))));
  const css = await readFile(new URL("fonts/google-fonts.css", root), "utf8");
  const fonts = Array.from(css.matchAll(/url\((\/fonts\/[^)]+)\)/g), match => match[1]);
  assert.ok(fonts.length >= 3);
  assert.doesNotMatch(css, /https?:\/\//);
  await Promise.all(fonts.map(path => access(new URL(path.slice(1), root))));
});
