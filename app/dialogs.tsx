"use client";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight, ArrowLeft, Check, MessageCircle, Pause, Play, Plus } from "lucide-react";
import { navOrder, services, type Lang, type ServiceKey } from "./content";
import { contactInfo } from "./contact-info";

export function QuoteForm({ lang, headingId = "modal-title" }: { lang: Lang; headingId?: string }) {
  const [selected, setSelected] = useState<ServiceKey[]>([]);
  const [brief, setBrief] = useState("");
  const t = (tr: string, en: string) => lang === "tr" ? tr : en;
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `${t("UGI AJANS — PROJE ÖZETİ", "UGI AGENCY — PROJECT BRIEF")}\n\n${t("Ad Soyad", "Name")}: ${String(data.get("name")).trim()}\n${t("E-posta", "Email")}: ${data.get("email")}\n${t("Marka", "Brand")}: ${data.get("brand") || "—"}\n${t("Hizmetler", "Services")}: ${selected.map(key => services[key].name[lang === "tr" ? 0 : 1]).join(", ") || t("Birlikte belirleyelim", "Let's decide together")}\n${t("Bütçe", "Budget")}: ${data.get("budget") || t("Birlikte belirleyelim", "Let's decide together")}\n\n${t("Proje", "Project")}:\n${String(data.get("message")).trim()}`;
    setBrief(text);
    window.open(whatsappUrl(text), "_blank", "noopener");
  };
  const whatsappUrl = (text: string) => `${contactInfo.whatsappHref}?text=${encodeURIComponent(text)}`;
  return <><span className="eyebrow">{t("GÜZEL BİR BAŞLANGIÇ", "A GREAT BEGINNING")}</span><h2 id={headingId}>{t("Bir fikriniz mi var?", "Have an idea?")}<br /><span className="muted">{t("Birlikte büyütelim.", "Let's make it happen.")}</span></h2>
    <form onSubmit={submit} hidden={Boolean(brief)}><p className="form-intro">{t("Projenizden kısaca bahsedin. İlk adımı birlikte şekillendirelim.", "Tell us a little about your project. Let's shape the first step together.")}</p>
      <div className="form-row"><label>{t("Adınız Soyadınız", "Your name")}<input name="name" autoComplete="name" placeholder={t("Adınız Soyadınız", "Full name")} required pattern=".*\S.*" maxLength={120} /></label><label>{t("E-posta adresiniz", "Your email")}<input type="email" name="email" autoComplete="email" placeholder="siz@markaniz.com" required maxLength={200} /></label></div>
      <label>{t("Markanız / Şirketiniz", "Your brand / company")}<input name="brand" autoComplete="organization" placeholder={t("Markanızın adı", "Brand name")} maxLength={150} /></label>
      <fieldset><legend>{t("Neye ihtiyacınız var?", "What do you need?")}</legend><div className="form-service-options">{navOrder.map(key => <button key={key} type="button" aria-pressed={selected.includes(key)} onClick={() => setSelected(selected.includes(key) ? selected.filter(s => s !== key) : [...selected, key])}>{services[key].name[lang === "tr" ? 0 : 1]}{selected.includes(key) ? <Check size={15} /> : <Plus size={15} />}</button>)}</div></fieldset>
      <label>{t("Projenizi biraz anlatın", "Tell us about your project")}<textarea name="message" rows={3} required minLength={10} maxLength={4000} placeholder={t("Hedefleriniz, hayalleriniz ve aklınızdakiler…", "Your goals, your vision, and what you have in mind…")} /></label>
      <label>{t("Tahmini bütçe", "Estimated budget")}<select name="budget" defaultValue=""><option value="">{t("Birlikte belirleyelim", "Let's decide together")}</option><option>25.000 – 50.000 TL</option><option>50.000 – 100.000 TL</option><option>100.000 – 250.000 TL</option><option>250.000 TL +</option></select></label>
      <p className="form-note">{t("Gönder dediğinizde proje özetiniz WhatsApp’ta hazır mesaj olarak açılır; tek dokunuşla bize iletebilirsiniz.", "When you send, your project brief opens in WhatsApp as a ready-to-send message.")}</p><button className="pill pill-red" type="submit">{t("WhatsApp ile gönder", "Send via WhatsApp")}<MessageCircle size={20} /></button>
    </form>
    {brief && <div className="brief-success" role="status"><span className="success-icon"><Check /></span><h3>{t("Neredeyse tamam.", "Almost there.")}</h3><p>{t("Proje özetiniz WhatsApp’ta açıldı. Göndermeyi tamamlamak için WhatsApp’ta mesajı gönderin. Pencere açılmadıysa aşağıdaki düğmeyi kullanın.", "Your project brief opened in WhatsApp. Send the message there to finish. If it didn't open, use the button below.")}</p><pre>{brief}</pre><div className="brief-actions"><a className="pill pill-red" href={whatsappUrl(brief)} target="_blank" rel="noreferrer">{t("WhatsApp’ı aç", "Open WhatsApp")}<ArrowUpRight size={18} /></a><button className="text-link" onClick={() => setBrief("")}>{t("Düzenle", "Edit")}<ArrowLeft size={18} /></button></div></div>}
  </>;
}

export function Reel({ lang, motion }: { lang: Lang; motion: boolean }) {
  const [frame, setFrame] = useState(0);
  const [playing, setPlaying] = useState(motion);
  useEffect(() => { if (!playing) return; const timer = setInterval(() => setFrame(current => (current + 1) % 4), 2600); return () => clearInterval(timer); }, [playing]);
  const words: ReactNode[] = [<>BOLD<br /><i>IDEAS.</i></>, <>MAKE<br /><i>IT MATTER.</i></>, <>CREATE<br /><i>THE NEXT.</i></>, <>ugi<span className="reel-dot">.</span></>];
  return <div className={`reel-frame reel-frame-${frame}`}><span className="eyebrow" id="modal-title">UGI® — {lang === "tr" ? "KONSEPT SHOWREEL" : "CONCEPT SHOWREEL"}</span><div className="reel-graphic" aria-hidden="true">✳</div><h2 key={frame}>{words[frame]}</h2><div className="reel-controls"><button className="icon-button" onClick={() => setPlaying(!playing)} aria-label={playing ? (lang === "tr" ? "Durdur" : "Pause") : (lang === "tr" ? "Oynat" : "Play")}>{playing ? <Pause /> : <Play />}</button><div className="reel-segments">{[0, 1, 2, 3].map(i => <button key={i} className={frame === i ? "active" : ""} aria-label={`${lang === "tr" ? "Sahne" : "Scene"} ${i + 1}`} onClick={() => setFrame(i)} />)}</div><span>0{frame + 1} / 04</span></div></div>;
}
