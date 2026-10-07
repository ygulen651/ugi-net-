"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowDown, ArrowLeft, ArrowRight, Play, X, Globe2, Menu, Plus, Minus, Check, Pause } from "lucide-react";
import Image from "next/image";
import { AgencyPage } from "./agency-page";
import { agencyNavHref, agencyPages, journalEntries, type AgencyPageKey } from "./agency-content";
import { articles, services, serviceOrder, navOrder, navLinks, projects, type Lang, type Pair, type ServiceKey, type ModalState } from "./content";
import { Logo, ServiceIcon, ServiceArt, ProjectArt } from "./artwork";
import { QuoteForm, Reel } from "./dialogs";
import { ServiceStack } from "./service-stack";
import { Ugiman } from "./ugiman";
import { SiteFooter } from "./site-footer";
import { useScrollEffects } from "./scroll-effects";
import { serviceCatalog, serviceHref } from "./service-catalog";
import { ServiceDetail } from "./web-service-detail";

export default function UgiHome({ serviceSlug, page, articleSlug }: { serviceSlug?: string; page?: AgencyPageKey; articleSlug?: string }) {
  const detail = serviceCatalog.find(item => item.slug === serviceSlug);
  const homePrefix = detail || page ? "/" : "";
  const [lang, setLang] = useState<Lang>("tr");
  const [activeMenu, setActiveMenu] = useState<ServiceKey | null>(null);
  const [mobile, setMobile] = useState(false);
  const [modal, setModal] = useState<ModalState>(null);
  const [project, setProject] = useState(0);
  const [progress, setProgress] = useState(0);
  const [motion, setMotion] = useState(true);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const siteRef = useRef<HTMLDivElement>(null);
  useScrollEffects(siteRef, motion);
  const t = (tr: string, en: string) => lang === "tr" ? tr : en;
  const b = (pair: Pair) => pair[lang === "tr" ? 0 : 1];

  useEffect(() => {
    const update = () => setProgress(window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => { document.documentElement.lang = lang; try { localStorage.setItem("ugi-lang", lang); } catch { /* Optional preference. */ } }, [lang]);
  useEffect(() => {
    if (modal) { modalRef.current?.showModal(); document.body.style.overflow = "hidden"; if (modalContentRef.current) modalContentRef.current.scrollTop = 0; }
    else { modalRef.current?.close(); document.body.style.overflow = mobile ? "hidden" : ""; }
    return () => { document.body.style.overflow = ""; };
  }, [modal, mobile]);
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setActiveMenu(null); setMobile(false); }
      if (e.key === "Tab" && mobile && !modal) {
        const nodes = headerRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        const visible = nodes ? Array.from(nodes).filter(node => node.getClientRects().length) : [];
        const first = visible[0], last = visible.at(-1);
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    const resize = () => { if (window.innerWidth > 980) setMobile(false); };
    document.addEventListener("keydown", handle); window.addEventListener("resize", resize);
    return () => { document.removeEventListener("keydown", handle); window.removeEventListener("resize", resize); };
  }, [mobile, modal]);
  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);
  const openMenu = (key: ServiceKey) => { if (closeTimer.current) clearTimeout(closeTimer.current); setActiveMenu(key); };
  const scheduleClose = () => { if (!mobile) closeTimer.current = setTimeout(() => setActiveMenu(null), 160); };
  const openModal = (value: ModalState) => { setActiveMenu(null); setMobile(false); setModal(value); };
  const jump = () => { setActiveMenu(null); setMobile(false); };

  return <div ref={siteRef} className={`site ${motion ? "motion-on" : "motion-off"}`} id="top">
    <a href="#main" className="skip-link">{t("İçeriğe geç", "Skip to content")}</a>
    <header ref={headerRef} className={`site-header ${activeMenu || mobile ? "is-open" : ""} ${progress > .01 ? "is-scrolled" : ""}`} onMouseLeave={scheduleClose} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setActiveMenu(null); }}>
      <div className="header-inner"><Logo />
        <nav className="desktop-nav" aria-label={t("Ana menü", "Main navigation")}>
          {navOrder.map(key => <button key={key} className={`nav-link ${activeMenu === key ? "active" : ""}`} aria-expanded={activeMenu === key} aria-controls="mega-menu" onMouseEnter={() => openMenu(key)} onClick={() => activeMenu === key ? setActiveMenu(null) : openMenu(key)}>{b(services[key].name)}</button>)}
          {navLinks.map(([tr, en, id]) => <a className="nav-link" key={id} href={agencyNavHref(id, homePrefix)} aria-current={page && agencyNavHref(id, homePrefix) === agencyPages[page].path ? "page" : undefined} onMouseEnter={() => setActiveMenu(null)} onClick={jump}>{t(tr, en)}</a>)}
        </nav>
        <div className="header-actions"><button className="icon-button language-button" onClick={() => setLang(lang === "tr" ? "en" : "tr")} aria-label={lang === "tr" ? "Switch to English" : "Türkçeye geç"}><Globe2 size={21} /><span>{lang.toUpperCase()}</span></button><button className="icon-button mobile-toggle" aria-expanded={mobile} aria-controls="mobile-menu" aria-label={t("Menüyü aç veya kapat", "Toggle navigation")} onClick={() => { setMobile(!mobile); setActiveMenu(null); }}>{mobile ? <X /> : <Menu />}</button></div>
      </div>
      {activeMenu && !mobile && <div className="mega-menu" id="mega-menu" onMouseEnter={() => openMenu(activeMenu)}><div className="mega-columns">{services[activeMenu].columns.map((column, i) => <div className="mega-column" key={i}><h2><ServiceIcon type={activeMenu} />{b(column.title)}</h2>{column.items.map(item => serviceHref(item[0]) ? <a key={item[0]} href={serviceHref(item[0])} onClick={jump}><span>{b(item)}</span><small>{t("Hizmeti keşfedin", "Explore this service")}</small><ArrowUpRight size={16} /></a> : <button key={item[0]} onClick={() => openModal({ type: "service", key: activeMenu, title: b(item) })}><span>{b(item)}</span><small>{t("Markanıza özel, etki odaklı çözümler", "Tailored to your brand. Built for impact.")}</small><ArrowUpRight size={16} /></button>)}</div>)}</div><div className="mega-feature"><span className="eyebrow">{t("FİKİRDEN ETKİYE", "FROM IDEA TO IMPACT")}</span><div className="mega-brand"><Image src="/images/LOGOa.webp" alt="Ugi Ajans" width={180} height={140} unoptimized /><span>CREATIVE AGENCY</span></div><h3>{t("Birlikte daha fazlası.", "More, together.")}</h3><p>{t("Strateji, tasarım ve teknoloji. Markanız için aynı masada.", "Strategy, design, and technology. At the same table for your brand.")}</p><button className="text-link" onClick={() => openModal({ type: "quote" })}>{t("Projenizi konuşalım", "Let's talk about your project")}<ArrowUpRight size={20} /></button></div></div>}
      {mobile && <nav className="mobile-menu" id="mobile-menu" aria-label={t("Mobil menü", "Mobile navigation")}>{navOrder.map(key => <div className="mobile-menu-group" key={key}><button onClick={() => setActiveMenu(activeMenu === key ? null : key)} aria-expanded={activeMenu === key}>{b(services[key].name)}{activeMenu === key ? <Minus /> : <Plus />}</button>{activeMenu === key && <div className="mobile-submenu">{services[key].columns.flatMap(col => col.items).map(item => serviceHref(item[0]) ? <a key={item[0]} href={serviceHref(item[0])} onClick={jump}>{b(item)}<ArrowUpRight size={17} /></a> : <button key={item[0]} onClick={() => openModal({ type: "service", key, title: b(item) })}>{b(item)}<ArrowUpRight size={17} /></button>)}</div>}</div>)}{navLinks.map(([tr, en, id]) => <a href={agencyNavHref(id, homePrefix)} aria-current={page && agencyNavHref(id, homePrefix) === agencyPages[page].path ? "page" : undefined} key={id} onClick={jump}>{t(tr, en)}<ArrowUpRight size={20} /></a>)}<button className="pill pill-red" onClick={() => openModal({ type: "quote" })}>{t("Teklif Al", "Start a project")}<ArrowUpRight /></button></nav>}
    </header>
    {activeMenu && !mobile && <button className="menu-backdrop" aria-label={t("Menüyü kapat", "Close menu")} onClick={() => setActiveMenu(null)} />}
    <main id="main" inert={mobile || undefined}>
      {page ? <AgencyPage page={page} articleSlug={articleSlug} lang={lang} onQuote={() => openModal({ type: "quote" })} /> : detail ? <ServiceDetail service={detail} lang={lang} onQuote={() => openModal({ type: "quote" })} /> : <><section className="hero" aria-labelledby="hero-heading">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <span className="hero-kicker">UGI® CREATIVE AGENCY</span>
          <h1 id="hero-heading">{t("Dijital dünyada markanızı öne çıkarın.", "Make your brand stand out in the digital world.")}</h1>
          <p>{t("Dijital dünyada markanızı öne çıkaracak profesyonel çözümler. Yenilikçi, hızlı ve etkileşimli.", "Professional solutions that make your brand stand out. Innovative, fast and engaging.")}</p>
          <div className="hero-buttons">
            <a className="hero-cta" href="#hizmetler">{t("Hizmetlerimizi keşfet", "Explore our services")}<ArrowRight size={21} /></a>
            <a className="hero-cta hero-cta-secondary" href="#projeler">{t("Çalışmalarımız", "Our work")}</a>
          </div>
        </div>
        <div className="hero-mascot" aria-hidden="true"><Image src="/images/hero-owl.webp" alt="" width={1375} height={1165} sizes="(max-width: 640px) 88vw, (max-width: 980px) 64vw, 50vw" priority unoptimized /></div>
        <a className="hero-scroll" href="#biz" aria-label={t("Bizi keşfet", "Discover Ugi")}><ArrowDown size={21} /></a>
      </section>

      <section className="intro section-pad" id="biz"><div className="section-eyebrow"><span className="eyebrow"><i />{t("TANIŞALIM, BİZ UGI.", "MEET UGI.")}</span><span className="section-number">01 / ABOUT</span></div><div className="intro-layout"><h2>{t("Sıradanı geride bırak.", "Leave ordinary behind.")}<br /><span>{t("İz bırakmaya başla.", "Make your mark.")}</span><span className="red-asterisk" aria-hidden="true">✳</span></h2><div className="intro-copy"><p>{t("Biz, iyi fikirlerin dünyayı değiştirebileceğine inanan yaratıcı bir ekibiz. Stratejiyi tasarımla, teknolojiyi hayal gücüyle buluşturuyoruz.", "We are a creative team that believes good ideas can change the world. We bring strategy and design, technology and imagination together.")}</p><p className="muted">{t("Markanızı dinliyor, özünü anlıyor ve ona ait bir dünya tasarlıyoruz. İlk fikirden son dokunuşa kadar, birlikte.", "We listen to your brand, understand its essence, and design a world it can call its own. From the first idea to the final touch, together.")}</p><a href="#hizmetler" className="text-link">{t("Neler yapıyoruz?", "What do we do?")}<ArrowDown size={18} /></a></div></div><div className="process-line">{[["01", "Düşünürüz.", "We think."], ["02", "Tasarl arız.".replace(" ", ""), "We design."], ["03", "Hayata geçiririz.", "We make it happen."]].map(([n, tr, en]) => <div key={n}><span>{n}</span><h3>{t(tr, en)}</h3><ArrowUpRight strokeWidth={1} /></div>)}</div></section>

      <ServiceStack motion={motion}>{serviceOrder.map((key, index) => <section className={`service-section service-${key}`} key={key} id={`hizmet-${key}`} style={{ zIndex: index + 1 }}><div className="service-inner"><div className="service-visual"><span className="service-corner-index">0{index + 1} / 04</span><ServiceArt type={key} /></div><div className="service-copy"><span className="eyebrow">{t("FİKİRLERİNİZE ALAN AÇIYORUZ", "ROOM FOR YOUR IDEAS")}</span><h2><strong>{b(services[key].title).split(" ")[0]}</strong>{" "}{b(services[key].title).split(" ").slice(1).join(" ")}</h2><p>{b(services[key].description)}</p><div className="service-tags">{services[key].tags.map(tag => <span key={tag[0]}>{b(tag)}</span>)}</div><button className={`pill ${key === "web" || key === "digital" || key === "production" ? "pill-white" : "pill-black"}`} onClick={() => openModal({ type: "service", key })}>{t("Keşfet", "Explore")}<ArrowUpRight size={23} /></button></div></div></section>)}</ServiceStack>

      <section className="projects section-pad" id="projeler"><div className="section-eyebrow"><span className="eyebrow"><i />{t("FİKİRDEN GÖRÜNENE", "IDEAS MADE VISIBLE")}</span><span className="section-number">03 / SELECTED CONCEPTS</span></div><div className="projects-heading"><h2>{t("Kreatif", "Creative")} <span>{t("işler.", "work.")}</span></h2><p>{t("Her markanın bir hikâyesi var.", "Every brand has a story.")}<br /><span className="muted">{t("Bizim işimiz, onu görünür kılmak.", "We make it visible.")}</span></p></div><div className="project-stage"><div className="project-stack">{[2, 1, 0].map(offset => { const index = (project + offset) % projects.length; return <button key={index} className={`project-card stack-${offset}`} tabIndex={offset === 0 ? 0 : -1} aria-hidden={offset !== 0} onClick={() => openModal({ type: "project", index })}><ProjectArt index={index} /><div className="project-card-meta"><div><h3>{b(projects[index].title)}</h3><span>{b(projects[index].type)}</span></div><span className="project-card-arrow"><ArrowUpRight /></span></div></button>; })}</div></div><div className="project-controls"><span className="concept-note">{t("Tasarım vizyonumuzu yansıtan konsept çalışmalar.", "Concept studies that express our design vision.")}</span><div className="project-pager"><button className="circle-button" onClick={() => setProject((project + 2) % 3)} aria-label={t("Önceki proje", "Previous project")}><ArrowLeft size={20} /></button><span aria-live="polite">0{project + 1}<span> / 03</span></span><button className="circle-button" onClick={() => setProject((project + 1) % 3)} aria-label={t("Sonraki proje", "Next project")}><ArrowRight size={20} /></button></div></div></section>

      <section className="brand-world"><div className="brand-tile-grid" aria-hidden="true">{["✳", "Aa", "", "IDEA", "↗", "", "ugi.", "+", "", "{ }", "MAKE", "", "●", "", "&", "", "◒", "", "BOLD", "", "✳", "", "↗", "", "ugi.", "", "Aa", "", "+", "", "", "&"].map((label, i) => <span className={`brand-tile tile-${i}`} key={i}>{label}</span>)}</div><div className="brand-world-copy"><span className="eyebrow">{t("YARATICILIĞIN ORTAK NOKTASI", "WHERE CREATIVITY CONNECTS")}</span><h2>{t("Büyük fikirler.", "Big ideas.")}<br /><span>{t("Güçlü markalar.", "Powerful brands.")}</span></h2><button className="text-link" onClick={() => openModal({ type: "quote" })}>{t("Sıradaki hikâyeyi birlikte yazalım", "Let's write the next chapter together")}<ArrowUpRight size={21} /></button></div></section>

      <section className="journal section-pad" id="blog"><div className="section-eyebrow"><span className="eyebrow"><i />{t("UGI'DEN NOTLAR", "NOTES FROM UGI")}</span><span className="section-number">05 / JOURNAL</span></div><div className="journal-heading"><h2>{t("Biraz", "A little")} <span>{t("ilham.", "inspiration.")}</span></h2><span className="muted">{t("Fikirler, içgörüler ve yeni bakış açıları.", "Ideas, insights, and fresh perspectives.")}</span></div><div className="journal-grid">{articles.map((article, index) => <a className="article-card" key={index} href={`/blog/${journalEntries[index].slug}`}><div className={`article-art article-art-${index}`} aria-hidden="true">{index === 0 ? <><span className="mini-browser"><i /><i /><i /><strong>Hello,<br /><em>future.</em></strong></span><span className="article-art-tag">WEB / EXPERIENCE</span></> : index === 1 ? <><strong>Aa<span>✳</span></strong><span className="article-art-tag">IDENTITY / EXPRESSION</span></> : <><strong>LET’S<br /><em>CONNECT.</em></strong><span className="article-art-tag">CONTENT / CULTURE</span></>}</div><div className="article-meta"><span>{b(article.category)}</span><span>{b(article.time)}</span></div><h3>{b(article.title)}<ArrowUpRight size={24} /></h3></a>)}</div></section>

      <section className="contact section-pad" id="iletisim"><div className="section-eyebrow"><span className="eyebrow"><i />{t("SIRADA SİZİN HİKÂYENİZ VAR", "YOUR STORY IS NEXT")}</span><span className="section-number">06 / LET’S TALK</span></div><div className="contact-heading"><h2>{t("BİRLİKTE", "LET’S MAKE")}<br /><span>{t("İZ BIRAKALIM.", "OUR MARK.")}</span></h2><button className="contact-arrow" onClick={() => openModal({ type: "quote" })} aria-label={t("Projenizi anlatın", "Tell us about your project")}><ArrowUpRight strokeWidth={1} /></button></div><div className="contact-bottom"><p>{t("Aklında bir fikir mi var? Harika işler bir merhabayla başlar.", "Have an idea? Great things start with a hello.")}</p><button className="text-link" onClick={() => openModal({ type: "quote" })}>{t("Projenizi konuşalım", "Let's talk about your project")}<ArrowUpRight size={21} /></button></div></section>
    </>}
    </main>
    <SiteFooter homePrefix={homePrefix} lang={lang} inert={mobile} onQuote={() => openModal({ type: "quote" })} onService={key => openModal({ type: "service", key })} />
    {!mobile && !modal && <Ugiman lang={lang} onQuote={() => openModal({ type: "quote" })} onService={key => openModal({ type: "service", key })} />}
    <button className="motion-toggle" tabIndex={mobile ? -1 : 0} onClick={() => setMotion(!motion)} aria-pressed={!motion} aria-label={motion ? t("Animasyonları durdur", "Pause animations") : t("Animasyonları başlat", "Play animations")} style={{ background: `conic-gradient(var(--red) ${progress * 360}deg, #ffffff24 0deg)` }}><span>{motion ? <Pause size={16} /> : <Play size={16} />}</span></button>

    <dialog className={`modal ${modal?.type === "reel" ? "reel-modal" : ""}`} ref={modalRef} onCancel={() => setModal(null)} onClick={event => { if (event.target === event.currentTarget) setModal(null); }} aria-labelledby="modal-title"><button className="modal-close icon-button" onClick={() => setModal(null)} aria-label={t("Pencereyi kapat", "Close dialog")}><X /></button><div className="modal-content" ref={modalContentRef}>
      {modal?.type === "quote" && <QuoteForm lang={lang} />}
      {modal?.type === "reel" && <Reel lang={lang} motion={motion} />}
      {modal?.type === "service" && <><span className="eyebrow">UGI / {b(services[modal.key].name).toLocaleUpperCase(lang)}</span><h2 id="modal-title">{modal.title || b(services[modal.key].title)}</h2><p className="modal-lead">{b(services[modal.key].description)}</p><div className="service-detail-list">{services[modal.key].columns.map(col => <div key={col.title[0]}><h3>{b(col.title)}</h3>{col.items.map(item => <p key={item[0]}><Check size={16} />{serviceHref(item[0]) ? <a href={serviceHref(item[0])}>{b(item)} ↗</a> : b(item)}</p>)}</div>)}</div><div className="modal-process"><span>01 / {t("Keşif & Strateji", "Discovery & Strategy")}</span><ArrowRight size={16} /><span>02 / {t("Tasarım & Üretim", "Design & Production")}</span><ArrowRight size={16} /><span>03 / {t("Yayın & Gelişim", "Launch & Grow")}</span></div><button className="pill pill-red" onClick={() => openModal({ type: "quote" })}>{t("Projenizi konuşalım", "Let's talk about your project")}<ArrowUpRight size={20} /></button></>}
      {modal?.type === "project" && <><span className="eyebrow">{t("KONSEPT ÇALIŞMA", "CONCEPT STUDY")} / 0{modal.index + 1}</span><h2 id="modal-title">{b(projects[modal.index].title)}</h2><ProjectArt index={modal.index} /><p className="project-detail-type">{b(projects[modal.index].type)}</p><p className="modal-lead">{b(projects[modal.index].text)}</p><p className="muted">{t("Bu proje Ugi'nin yaratıcı yaklaşımını göstermek için hazırlanmış kurgusal bir marka çalışmasıdır; müşteri referansı değildir.", "This fictional brand concept was created to demonstrate Ugi's creative approach; it is not a client reference.")}</p><button className="pill pill-red" onClick={() => openModal({ type: "quote" })}>{t("Sizin markanız için?", "What about your brand?")}<ArrowUpRight size={20} /></button></>}
      {modal?.type === "article" && <article className="article-detail"><span className="eyebrow">UGI JOURNAL / {b(articles[modal.index].category)}</span><h2 id="modal-title">{b(articles[modal.index].title)}</h2><span className="muted">{b(articles[modal.index].time)} · Ugi Ajans</span>{articles[modal.index].paragraphs.map((p, i) => <p key={i}>{b(p)}</p>)}<div className="article-signoff"><Logo /><span>{t("Yaratıcı düşünür. Etki yaratır.", "Creative minds. Lasting impact.")}</span></div></article>}
    </div></dialog>
  </div>;
}
