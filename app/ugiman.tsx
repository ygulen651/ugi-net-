"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { ArrowUpRight, Send, Sparkles, X } from "lucide-react";
import { services, serviceOrder, type Lang, type ServiceKey } from "./content";

type Message = { role: "user" | "assistant"; text: string; service?: ServiceKey };
const keywords: Record<ServiceKey, string[]> = {
  web: ["web", "site", "eticaret", "e-ticaret", "yazilim", "software", "shop"],
  design: ["logo", "marka", "kimlik", "tasarim", "design", "brand", "ambalaj"],
  production: ["video", "film", "fotograf", "photo", "produksiyon", "cekimi", "motion"],
  digital: ["reklam", "sosyal", "seo", "pazarlama", "marketing", "ads", "instagram", "social"],
};

export function Ugiman({ lang, onQuote, onService }: { lang: Lang; onQuote: () => void; onService: (key: ServiceKey) => void }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const launcher = useRef<HTMLButtonElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const t = (tr: string, en: string) => lang === "tr" ? tr : en;
  const close = () => { setOpen(false); launcher.current?.focus(); };

  useEffect(() => { if (open) field.current?.focus(); }, [open]);
  useEffect(() => { if (log.current) log.current.scrollTop = log.current.scrollHeight; }, [messages, open]);

  const reply = (question: string, selected?: ServiceKey) => {
    const normalized = question.toLocaleLowerCase("tr").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i");
    const service = selected ?? serviceOrder.find(key => keywords[key].some(word => normalized.includes(word)));
    const pricing = /fiyat|ucret|butce|price|cost|budget/.test(normalized);
    const greeting = /^(merhaba|selam|hello|hi)[! .]*$/.test(normalized);
    const text = pricing
      ? t("Bütçe; kapsam, içerik ve ihtiyaç duyulan özelliklere göre belirleniyor. Proje özetini birlikte hazırlayabiliriz. Aşağıdaki ‘Projemi anlat’ düğmesiyle başlayabilirsin.", "Pricing depends on scope, content and features. Start with ‘Tell us about your project’ to prepare a brief.")
      : service
        ? `${services[service].description[lang === "tr" ? 0 : 1]}\n\n${t("İstersen hizmetin detaylarına bakalım ya da projeni birlikte özetleyelim.", "Explore the service details or prepare your project brief below.")}`
        : greeting
          ? t("Merhaba! Ben Ugiman. Web, tasarım, video ve dijital pazarlama arasında sana uygun yolu bulmana yardımcı olurum. Markan için ne yapmak istiyorsun?", "Hello! I'm Ugiman. I can guide you through web, design, video and digital marketing. What do you have in mind?")
          : t("Ben UGI’nin hizmet rehberiyim; yanıtlarım site içeriğine dayanıyor. Web sitesi, marka tasarımı, video veya dijital pazarlama hakkında sorabilirsin. Özel ihtiyacın için ‘Projemi anlat’ ile bir proje özeti hazırlayabilirsin.", "I'm UGI's service guide, with answers based on this site's content. Ask about websites, branding, video or digital marketing, or prepare a brief for a more specific request.");
    setMessages(current => [...current.slice(-38), { role: "user", text: question }, { role: "assistant", text, service: pricing ? undefined : service }]);
    setInput("");
  };
  const submit = (event: FormEvent) => { event.preventDefault(); if (input.trim()) reply(input.trim()); };
  const quote = () => { close(); onQuote(); };

  return <aside className={`ugiman ${open ? "ugiman-open" : ""}`} aria-label="Ugiman">
    {open && <section className="ugiman-panel" role="dialog" aria-modal="false" aria-labelledby="ugiman-title" id="ugiman-panel" onKeyDown={event => { if (event.key === "Escape") { event.stopPropagation(); close(); } }}>
      <header className="ugiman-panel-head"><span className="ugiman-avatar"><Image src="/images/owl-contact.webp" alt="" width={66} height={66} unoptimized /></span><div><h2 id="ugiman-title">UGIMAN<span>✳</span></h2><p>{t("Dijital dünyanın kanatlı rehberi", "Your winged digital guide")}</p></div><button onClick={close} aria-label={t("Ugiman’ı kapat", "Close Ugiman")}><X size={19} /></button></header>
      <div className="ugiman-log" ref={log} role="log" aria-live="polite" aria-relevant="additions" aria-label={t("Sohbet", "Conversation")}>
        <div className="ugiman-welcome"><span className="ugiman-mini-label">BİR FİKİR + BİR UGIMAN</span><h3>{t("Aklında bir şey mi var?", "Got something in mind?")}</h3><p>{t("Birlikte doğru yerden başlayalım. Markanın neye ihtiyacı var?", "Let's find a starting point. What does your brand need?")}</p></div>
        <div className="ugiman-suggestions">{serviceOrder.map(key => <button key={key} onClick={() => reply(services[key].title[lang === "tr" ? 0 : 1], key)}>{services[key].title[lang === "tr" ? 0 : 1]}<ArrowUpRight size={14} /></button>)}</div>
        {messages.map((message, index) => <div key={index} className={`ugiman-message ugiman-message-${message.role}`}><small>{message.role === "assistant" ? "UGIMAN" : t("SEN", "YOU")}</small><p>{message.text}</p>{message.service && <button onClick={() => { close(); onService(message.service!); }}>{t("Hizmeti incele", "Explore service")}<ArrowUpRight size={15} /></button>}</div>)}
      </div>
      <div className="ugiman-panel-bottom"><button className="ugiman-brief" onClick={quote}>{t("Projemi anlat", "Tell us about your project")}<ArrowUpRight size={17} /></button><form onSubmit={submit}><label className="ugiman-sr-only" htmlFor="ugiman-message">{t("Ugiman’a mesajınız", "Message Ugiman")}</label><input id="ugiman-message" ref={field} value={input} onChange={event => setInput(event.target.value)} placeholder={t("Bir fikirle başla…", "Start with an idea…")} maxLength={500} autoComplete="off" /><button type="submit" disabled={!input.trim()} aria-label={t("Mesajı gönder", "Send message")}><Send size={17} /></button></form><p>{t("Site içeriğine dayalı hizmet rehberi.", "Service guide based on this site's content.")}</p></div>
    </section>}
    <button ref={launcher} className="ugiman-launcher" onClick={() => setOpen(value => !value)} aria-label={open ? t("Ugiman’ı kapat", "Close Ugiman") : t("Ugiman ile konuş", "Talk to Ugiman")} aria-expanded={open} aria-controls={open ? "ugiman-panel" : undefined}>
      <span className="ugiman-orbit" aria-hidden="true" /><span className="ugiman-spark" aria-hidden="true"><Sparkles size={22} /></span>
      <span className="ugiman-callout">{t("Bir fikrin mi var?", "Got an idea?")}<strong>{t("Ugiman’a sor ↗", "Ask Ugiman ↗")}</strong></span>
      <Image className="ugiman-character" src="/images/owl-contact.webp" alt="" width={170} height={146} unoptimized />
      <span className="ugiman-name">UGIMAN <span>✳</span></span>
    </button>
  </aside>;
}
