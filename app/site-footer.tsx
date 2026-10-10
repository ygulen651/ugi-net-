import { ArrowUp, ArrowUpRight, ArrowRight } from "lucide-react";
import { Logo } from "./artwork";
import Link from "next/link";
import { services, serviceOrder, type Lang, type ServiceKey } from "./content";
import { contactInfo } from "./contact-info";

export function SiteFooter({ lang, inert, onQuote, onService, homePrefix = "" }: {
  lang: Lang;
  homePrefix?: string;
  inert: boolean;
  onQuote: () => void;
  onService: (key: ServiceKey) => void;
}) {
  const t = (tr: string, en: string) => lang === "tr" ? tr : en;
  return <footer className="site-footer" inert={inert || undefined}>
    <div className="sf-container">
      <div className="sf-top">
        <div className="sf-signature"><Logo footer /><span>STRATEGY. DESIGN. TECHNOLOGY.</span></div>
        <div className="sf-promise"><span className="sf-label">{t("FİKİRDEN ETKİYE", "FROM IDEA TO IMPACT")}</span><h2>{t("Markanız için", "For your brand,")}<br /><span>{t("bir adım ötesi.", "one step further.")}</span></h2></div>
        <button className="sf-cta" onClick={onQuote}>{t("Birlikte çalışalım", "Let's work together")}<ArrowUpRight size={22} /></button>
      </div>

      <div className="sf-columns">
        <div className="sf-about"><span className="sf-label">UGI® CREATIVE AGENCY</span><p>{t("Strateji, tasarım ve teknolojiyi bir araya getiriyor; markanız için anlamlı dijital deneyimler üretiyoruz.", "We bring strategy, design and technology together to create meaningful digital experiences for your brand.")}</p><span className="sf-disciplines">WEB / BRAND / MOTION / DIGITAL</span></div>
        <nav className="sf-nav" aria-label={t("Footer hizmetler", "Footer services")}><h3>{t("Hizmetlerimiz", "Our services")}</h3>{serviceOrder.map(key => <button key={key} onClick={() => onService(key)}>{services[key].title[lang === "tr" ? 0 : 1]}<ArrowUpRight size={14} /></button>)}</nav>
        <nav className="sf-nav" aria-label={t("Footer şirket", "Footer agency")}><h3>{t("Ajansı keşfedin", "Discover the agency")}</h3><Link href="/hakkimizda">{t("Hakkımızda", "About us")}</Link><a href={`${homePrefix}#projeler`}>{t("Çalışmalarımız", "Our work")}</a><Link href="/blog">{t("Fikirler & içgörüler", "Ideas & insights")}</Link><Link href="/iletisim">{t("İletişim", "Contact")}</Link></nav>
        <div className="sf-project"><span className="sf-label">{t("SIRADAKİ PROJE", "THE NEXT PROJECT")}</span><h3>{t("Sizinle başlasın.", "Starts with you.")}</h3><p>{t("Hedefinizi anlatın. İlk adımı birlikte şekillendirelim.", "Tell us your goal. Let's shape the first step together.")}</p><div className="sf-contact-links"><a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer"><small>WhatsApp</small><strong>{contactInfo.whatsappDisplay}</strong></a><a href={`mailto:${contactInfo.email}`}><small>{t("E-posta", "Email")}</small><strong>{contactInfo.email}</strong></a></div><button onClick={onQuote}>{t("Projenizi anlatın", "Tell us about your project")}<ArrowRight size={19} /></button></div>
      </div>

      <div className="sf-bottom"><span>© 2026 Ugi Ajans. {t("Tüm hakları saklıdır.", "All rights reserved.")}</span><span className="sf-bottom-note">{t("Yaratıcı düşünür. Etki yaratır.", "Creative minds. Lasting impact.")}</span><a href="#top">{t("Başa dön", "Back to top")}<span><ArrowUp size={18} /></span></a></div>
    </div>
  </footer>;
}
