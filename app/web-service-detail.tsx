import { ArrowDown, ArrowUpRight, Check, Plus } from "lucide-react";
import Link from "next/link";
import { services, type Lang, type Pair } from "./content";
import { ServiceIcon } from "./artwork";
import { serviceCatalog, serviceProcesses, servicePricingNotes, type ServicePageContent } from "./service-catalog";

export function ServiceDetail({ service, lang, onQuote }: { service: ServicePageContent; lang: Lang; onQuote: () => void }) {
  const b = (pair: Pair) => pair[lang === "tr" ? 0 : 1];
  const t = (tr: string, en: string) => lang === "tr" ? tr : en;
  const related = serviceCatalog.filter(item => item.category === service.category);
  const index = related.findIndex(item => item.slug === service.slug);
  const steps = serviceProcesses[service.category];
  return <article className={`web-detail detail-${service.category}`}>
    <section className="wd-hero">
      <nav className="wd-breadcrumb" aria-label={t("Sayfa yolu", "Breadcrumb")}><Link href="/">{t("Anasayfa", "Home")}</Link><span>/</span><Link href="/#hizmetler">{t("Hizmetler", "Services")}</Link><span>/</span><span aria-current="page">{b(service.title)}</span></nav>
      <div className="wd-hero-grid">
        <div className="wd-hero-copy"><span className="eyebrow">UGI® / {b(services[service.category].name).toLocaleUpperCase(lang)} / 0{index + 1}</span><h1>{b(service.title)}</h1><p>{b(service.tagline)}</p><button className="pill pill-black" onClick={onQuote}>{t("Projenizi konuşalım", "Let's talk about your project")}<ArrowUpRight size={22} /></button><a className="wd-explore" href="#kapsam">{t("Detayları keşfet", "Explore the details")}<ArrowDown size={17} /></a></div>
        <div className={`wd-art wd-art-${index % 3}`} aria-hidden="true"><div className="wd-art-toolbar"><span /><span /><span /><small>UGI / DIGITAL STUDIO</small><ServiceIcon type={service.category} /></div><div className="wd-art-content"><span>0{index + 1} — {b(services[service.category].title).toLocaleUpperCase(lang)}</span><strong>{service.word}<br /><em>Beyond.</em></strong><div className="wd-art-wire"><span /><span /><span /></div><div className="wd-art-bottom"><span>{service.label}</span><ArrowUpRight size={38} /></div></div><span className="wd-art-seal">ugi®<br />CREATIVE THINKING</span></div>
      </div>
    </section>
    <section className="wd-scope wd-section" id="kapsam"><div className="wd-section-heading"><span className="eyebrow">01 / {t("YAKLAŞIM & KAPSAM", "APPROACH & SCOPE")}</span><h2>{b(service.tagline)}</h2><p>{b(service.intro)}</p></div><div className="wd-deliverables">{service.scope.map((item, i) => <div key={item[0]}><span>0{i + 1}</span><h3>{b(item)}</h3><Check size={21} /></div>)}<p className="wd-scope-note">{t("Teslimler, takvim ve teknik gereksinimler projenize göre birlikte netleştirilir.", "Deliverables, timelines and technical requirements are agreed for your project.")}</p></div></section>
    <section className="wd-process wd-section"><div className="wd-section-heading"><span className="eyebrow">02 / {t("NASIL ÇALIŞIYORUZ?", "HOW WE WORK")}</span><h2>{t("Birlikte, adım adım.", "Together, step by step.")}</h2></div><div className="wd-steps">{steps.map((step, i) => <div key={i}><span className="wd-step-number">0{i + 1}<ArrowUpRight size={24} /></span><h3>{b(step.title)}</h3><p>{b(step.text)}</p></div>)}</div></section>
    <section className="wd-faq wd-section"><div className="wd-section-heading"><span className="eyebrow">03 / {t("AKLINIZDAKİ SORULAR", "YOUR QUESTIONS")}</span><h2>{t("Merak edilenler.", "Good to know.")}</h2><p>{t("Her proje farklı. İşte başlamadan önce bilmeniz gerekenler.", "Every project is different. Here are a few things to know before we begin.")}</p></div><div className="wd-questions">{service.faq.map(item => <details key={item.question[0]}><summary>{b(item.question)}<Plus size={20} /></summary><p>{b(item.answer)}</p></details>)}<details><summary>{t("Süre ve fiyat nasıl belirlenir?", "How are timelines and pricing determined?")}<Plus size={20} /></summary><p>{b(servicePricingNotes[service.category])}</p></details></div></section>
    <section className="wd-related wd-section"><div className="wd-section-heading"><span className="eyebrow">04 / {t("BİR ADIM DAHA", "ONE STEP FURTHER")}</span><h2>{t("Birlikte daha güçlü.", "Stronger together.")}</h2></div><nav aria-label={t("Diğer hizmetler", "Related services")} className="wd-related-grid">{related.filter(item => item.slug !== service.slug).map(item => <Link key={item.slug} href={`/hizmetler/${item.slug}`}><span>{b(item.title)}</span><ArrowUpRight size={20} /></Link>)}</nav></section>
    <section className="wd-contact wd-section"><span className="eyebrow">{t("SIRADAKİ ADIM SİZİN", "YOUR NEXT STEP")}</span><h2>{t("Aklınızdaki fikri", "Let's bring your idea")}<br /><span>{t("birlikte büyütelim.", "to life, together.")}</span></h2><button className="pill pill-black" onClick={onQuote}>{t("Projenizi anlatın", "Tell us about your project")}<ArrowUpRight size={23} /></button></section>
  </article>;
}
