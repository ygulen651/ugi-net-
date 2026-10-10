import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import test from "node:test";
import ts from "typescript";

// Load the data-only TypeScript modules without starting a development server.
const cache = new Map();
function loadData(url) {
  if (cache.has(url.href)) return cache.get(url.href);
  const exports = {};
  cache.set(url.href, exports);
  const compiled = ts.transpileModule(readFileSync(url, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  runInNewContext(compiled, { exports, require: id => {
    assert.ok(id.startsWith("./"), `Unexpected import: ${id}`);
    return loadData(new URL(`${id}.ts`, url));
  } });
  return exports;
}
const { serviceCatalog, serviceHref, serviceProcesses, servicePricingNotes } = loadData(new URL("../app/service-catalog.ts", import.meta.url));
const { services } = loadData(new URL("../app/content.ts", import.meta.url));
const { filterJournal, agencyNavHref } = loadData(new URL("../app/agency-content.ts", import.meta.url));

test("journal search combines categories and case-insensitive Turkish/English queries", () => {
  assert.equal(filterJournal("", "all").length, 3);
  assert.equal(filterJournal("  GÜZEL  ", "all").length, 1);
  assert.equal(filterJournal("guzel", "all").length, 1);
  assert.equal(filterJournal("beautiful", "TASARIM").length, 1);
  assert.equal(filterJournal("beautiful", "MARKA").length, 0);
  assert.equal(filterJournal("not-a-real-topic", "all").length, 0);
});

test("agency navigation resolves to pages while projects remain on the homepage", () => {
  for (const prefix of ["", "/"]) {
    assert.equal(agencyNavHref("biz", prefix), "/hakkimizda");
    assert.equal(agencyNavHref("blog", prefix), "/blog");
    assert.equal(agencyNavHref("iletisim", prefix), "/iletisim");
    assert.equal(agencyNavHref("projeler", prefix), `${prefix}#projeler`);
  }
});

test("all 36 desktop/mobile menu items resolve to unique service pages in both languages", () => {
  assert.equal(serviceCatalog.length, 36);
  assert.equal(new Set(serviceCatalog.map(item => item.slug)).size, 36);
  for (const [category, group] of Object.entries(services)) {
    const menuItems = group.columns.flatMap(column => column.items);
    assert.equal(menuItems.length, 9);
    assert.equal(serviceCatalog.filter(item => item.category === category).length, 9);
    for (const title of menuItems) {
      const page = serviceCatalog.find(item => item.title[0] === title[0]);
      assert.ok(page, `Missing page: ${title[0]}`);
      assert.equal(page.category, category);
      assert.match(page.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      for (const label of title) assert.equal(serviceHref(label), `/hizmetler/${page.slug}`);
    }
  }
  assert.equal(serviceHref("Unknown service"), undefined);
});

test("each service has distinct bilingual content, four deliverables and two specific FAQs", () => {
  for (const language of [0, 1]) {
    assert.equal(new Set(serviceCatalog.map(item => item.intro[language])).size, 36);
  }
  for (const page of serviceCatalog) {
    assert.equal(page.scope.length, 4);
    assert.equal(page.faq.length, 2);
    assert.ok(page.word && page.label);
    const pairs = [page.title, page.tagline, page.intro, ...page.scope, ...page.faq.flatMap(item => [item.question, item.answer])];
    for (const pair of pairs) {
      assert.equal(pair.length, 2);
      for (const text of pair) assert.ok(typeof text === "string" && text.trim().length > 5, page.slug);
    }
    assert.equal(serviceProcesses[page.category].length, 3);
    assert.equal(servicePricingNotes[page.category].length, 2);
  }
});
