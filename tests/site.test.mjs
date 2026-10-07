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
  for (const text of ["Dijital dünyada markanızı öne çıkarın.", "Hizmetlerimizi keşfet", "Çalışmalarımız", "Nova Studio", "Luma Living", "Forma Active"]) assert.ok(html.includes(text), text);
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
  await Promise.all(["images/hero-owl.webp", "images/LOGOa.webp", "favicon.png", "fonts/google-fonts.css"].map(path => access(new URL(path, root))));
  const css = await readFile(new URL("fonts/google-fonts.css", root), "utf8");
  const fonts = Array.from(css.matchAll(/url\((\/fonts\/[^)]+)\)/g), match => match[1]);
  assert.ok(fonts.length >= 3);
  assert.doesNotMatch(css, /https?:\/\//);
  await Promise.all(fonts.map(path => access(new URL(path.slice(1), root))));
});

const servicePages = [
  ["ozel-web-yazilim", "Özel Web Yazılım"],
  ["e-ticaret-cozumleri", "E-ticaret Çözümleri"],
  ["entegrasyon-otomasyon", "Entegrasyon & Otomasyon"],
  ["kurumsal-web-tasarimi", "Kurumsal Web Tasarımı"],
  ["deneyim-arayuz-tasarimi", "Deneyim & Arayüz Tasarımı"],
  ["landing-page-tasarimi", "Landing Page Tasarımı"],
  ["mobil-uyumlu-tasarim", "Mobil Uyumlu Tasarım"],
  ["performans-optimizasyonu", "Performans Optimizasyonu"],
  ["bakim-gelistirme", "Bakım & Geliştirme"],
  ["urun-fotografciligi","Ürün Fotoğrafçılığı","production"],
  ["mekan-mimari-cekim","Mekân & Mimari Çekim","production"],
  ["yemek-fotografciligi","Yemek Fotoğrafçılığı","production"],
  ["marka-kurumsal-film","Marka & Kurumsal Film","production"],
  ["urun-tanitim-filmi","Ürün Tanıtım Filmi","production"],
  ["drone-cekimi","Drone Çekimi","production"],
  ["sosyal-medya-videolari","Sosyal Medya Videoları","production"],
  ["motion-design","Motion Design","production"],
  ["yaratici-kurgu","Yaratıcı Kurgu","production"],
  ["logo-gorsel-kimlik","Logo & Görsel Kimlik","design"],
  ["marka-stratejisi","Marka Stratejisi","design"],
  ["kurumsal-kimlik","Kurumsal Kimlik","design"],
  ["ambalaj-tasarimi","Ambalaj Tasarımı","design"],
  ["editoryal-tasarim","Editoryal Tasarım","design"],
  ["kampanya-tasarimi","Kampanya Tasarımı","design"],
  ["sosyal-medya-tasarimi","Sosyal Medya Tasarımı","design"],
  ["dijital-illustrasyon","Dijital İllüstrasyon","design"],
  ["sanat-yonetimi","Sanat Yönetimi","design"],
  ["sosyal-medya-yonetimi","Sosyal Medya Yönetimi","digital"],
  ["icerik-stratejisi","İçerik Stratejisi","digital"],
  ["topluluk-yonetimi","Topluluk Yönetimi","digital"],
  ["google-ads","Google Ads","digital"],
  ["meta-reklamlari","Meta Reklamları","digital"],
  ["donusum-optimizasyonu","Dönüşüm Optimizasyonu","digital"],
  ["seo-icerik","SEO & İçerik","digital"],
  ["analiz-raporlama","Analiz & Raporlama","digital"],
  ["dijital-marka-stratejisi","Dijital Marka Stratejisi","digital"],
];

async function renderPath(path) {
  const { default: worker } = await import("../dist/server/index.js");
  const response = await worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
  return { response, html: await response.text() };
}

for (const [slug, title, category = "web"] of servicePages) {
  test(`service page /hizmetler/${slug} has unique content and valid navigation`, async () => {
    const { response, html } = await renderPath(`/hizmetler/${slug}`);
    assert.equal(response.status, 200);
    const decoded = html.replaceAll("&amp;", "&");
    assert.ok(decoded.includes(`<title>${title} | Ugi Ajans</title>`));
    assert.ok(decoded.includes(`<h1>${title}</h1>`));
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
    assert.equal((html.match(/<details[\s>]/g) || []).length, 3);
    assert.ok(html.includes(`class="web-detail detail-${category}"`));
    const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
    assert.ok(!markup.includes("undefined"), `Undefined content on ${slug}`);
    assert.match(html, /class="wd-deliverables"/);
    assert.match(html, /class="wd-steps"/);
    assert.match(html, /class="site-footer"/);
    assert.match(html, /href="\/"/);
    assert.match(html, /href="\/#projeler"/);
    assert.doesNotMatch(html, /id="hero-heading"/);
    for (const [otherSlug] of servicePages.filter(([other, , group = "web"]) => other !== slug && group === category)) {
      assert.ok(html.includes(`href="/hizmetler/${otherSlug}"`), `Missing related service: ${otherSlug}`);
    }
    const ids = new Set(Array.from(html.matchAll(/\bid="([^"]+)"/g), match => match[1]));
    for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(anchor), `Missing section ${anchor}`);
  });
}

test("unknown service slugs return 404", async () => {
  const { response } = await renderPath("/hizmetler/bilinmeyen-hizmet");
  assert.equal(response.status, 404);
});

for (const [path, title, current] of [["/hakkimizda", "Hakkımızda", "about"], ["/iletisim", "İletişim", "contact"], ["/blog", "Blog", "blog"]]) {
  test(`${path} renders its own page, navigation and footer`, async () => {
    const { response, html } = await renderPath(path);
    assert.equal(response.status, 200);
    assert.ok(html.includes(`<title>${title} | Ugi Ajans</title>`));
    assert.ok(html.includes(`agency-page ap-${current}`));
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
    assert.ok(html.includes('class="site-footer"'));
    assert.ok(html.includes('id="ugi-footer-ink"'));
    for (const link of ["/hakkimizda", "/blog", "/iletisim"]) assert.ok(html.includes(`href="${link}"`));
    assert.ok(html.includes(`href="${path}" aria-current="page"`));
    const ids = Array.from(html.matchAll(/\bid="([^"]+)"/g), match => match[1]);
    assert.equal(new Set(ids).size, ids.length, "Duplicate element IDs");
    for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(anchor), `Missing section ${anchor}`);
    assert.doesNotMatch(html, /id="hero-heading"/);
    if (current === "contact") {
      assert.ok(html.includes('id="project-brief-heading"'));
      assert.ok(html.includes('name="email"'));
      assert.ok(html.includes('name="message"'));
      assert.ok(html.includes("Bilgileriniz ajansa gönderilmez."));
      assert.ok(html.includes("Proje özetini hazırla"));
      assert.doesNotMatch(html, /href="(?:tel:|mailto:)/);
    }
    if (current === "blog") {
      assert.ok(html.includes('type="search"'));
      assert.ok(html.includes('aria-label="Kategoriler"'));
    }
  });
}

const journalSlugs = ["guzel-bir-web-sitesinden-daha-fazlasi", "bir-logodan-bir-marka-dunyasina", "icerik-uretmek-mi-bag-kurmak-mi"];
for (const slug of journalSlugs) {
  test(`blog article ${slug} is reachable from home and blog, with working related links`, async () => {
    const listing = await renderPath("/blog");
    const home = await rendered;
    for (const page of [listing, home]) assert.ok(page.html.includes(`href="/blog/${slug}"`));
    const { response, html } = await renderPath(`/blog/${slug}`);
    assert.equal(response.status, 200);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
    assert.ok(html.includes('class="ap-prose"'));
    assert.ok(html.includes('property="og:type" content="article"'));
    for (const other of journalSlugs.filter(item => item !== slug)) assert.ok(html.includes(`href="/blog/${other}"`));
    assert.ok(html.includes('href="/blog"'));
  });
}

test("unknown journal articles return 404", async () => {
  const { response } = await renderPath("/blog/bilinmeyen-yazi");
  assert.equal(response.status, 404);
});
