import { articles, type Pair } from "./content";

export type AgencyPageKey = "about" | "contact" | "blog";
export const agencyPages: Record<AgencyPageKey, { path: string; title: Pair; description: Pair }> = {
  about: { path: "/hakkimizda", title: ["Hakkımızda", "About us"], description: ["UGI'nin yaratıcı yaklaşımı: strateji, tasarım, teknoloji ve birlikte üretme kültürü.", "UGI's creative approach: strategy, design, technology and a culture of collaboration."] },
  contact: { path: "/iletisim", title: ["İletişim", "Contact"], description: ["Yeni bir proje için ilk adımı atın. İhtiyaçlarınızı belirleyin ve UGI proje özetinizi hazırlayın.", "Take the first step towards a new project. Define your needs and prepare your UGI project brief."] },
  blog: { path: "/blog", title: ["Blog", "Journal"], description: ["Web deneyimi, marka tasarımı ve içerik stratejisi üzerine UGI'den fikirler ve notlar.", "Ideas and notes from UGI on web experiences, brand design and content strategy."] },
};

const articleSlugs = ["guzel-bir-web-sitesinden-daha-fazlasi", "bir-logodan-bir-marka-dunyasina", "icerik-uretmek-mi-bag-kurmak-mi"];
export const journalEntries = articles.map((article, index) => ({ ...article, slug: articleSlugs[index], index }));
export type JournalEntry = typeof journalEntries[number];

export function agencyNavHref(id: string, homePrefix: string) {
  return ({ biz: "/hakkimizda", blog: "/blog", iletisim: "/iletisim" } as Record<string, string>)[id] ?? `${homePrefix}#${id}`;
}

export function filterJournal(query: string, category: string) {
  const normalize = (text: string) => text.toLocaleLowerCase("tr").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i");
  const needle = normalize(query.trim());
  return journalEntries.filter(article => (category === "all" || article.category[0] === category) && normalize([...article.title, ...article.category, ...article.paragraphs.flat()].join(" ")).includes(needle));
}
