import { ArrowUpRight, Camera, Code2, Megaphone, PenTool } from "lucide-react";
import { projects, type ServiceKey } from "./content";

export function Logo({ footer = false }: { footer?: boolean }) {
  return <a className={`logo ${footer ? "logo-footer" : ""}`} href="#top" aria-label="Ugi Ajans"><span>ugi<span className="logo-dot">.</span></span><small>CREATIVE<br />AGENCY</small></a>;
}
export function ServiceIcon({ type }: { type: ServiceKey }) {
  const Icon = { web: Code2, production: Camera, design: PenTool, digital: Megaphone }[type];
  return <Icon size={24} strokeWidth={1.4} />;
}
export function ServiceArt({ type }: { type: ServiceKey }) {
  return <div className={`service-art art-${type}`} aria-hidden="true">
    <div className="art-small art-small-one">{type === "web" ? "</>" : type === "design" ? "Aa" : type === "production" ? <Camera size={46} strokeWidth={1.2} /> : "↗"}</div>
    <div className="art-small art-small-two">{type === "web" ? "CREATIVE\nTHINKING" : type === "design" ? "GOOD\nBY DESIGN." : type === "production" ? "REC ●" : "MAKE\nSOME NOISE."}</div>
    <div className="art-side"><span>{type === "web" ? "DIGITAL EXPERIENCES" : type === "design" ? "LESS, BUT BETTER" : type === "production" ? "EVERY FRAME MATTERS" : "IDEAS THAT CONNECT"}</span><span className="art-side-mark">✳</span></div>
    <div className="art-main"><div className="art-topline"><span>UGI® — CREATIVE STUDIO</span><ArrowUpRight size={20} /></div>
      {type === "web" && <><div className="window-dots"><i /><i /><i /></div><strong>Code<br />the<br /><em>future.</em></strong><span className="art-caption">DESIGNED TO MAKE A DIFFERENCE.</span></>}
      {type === "design" && <><div className="design-flower">✳</div><strong>Make<br />it <em>matter.</em></strong><span className="art-caption">A DISTINCTIVE POINT OF VIEW.</span></>}
      {type === "production" && <><div className="camera-eye"><div /><span /></div><strong>Another<br /><em>perspective.</em></strong><span className="viewfinder-corner corner-a" /><span className="viewfinder-corner corner-b" /><span className="art-caption">00:00:24:08 <span>4K / 25 FPS</span></span></>}
      {type === "digital" && <><div className="digital-orbit"><span>↗</span></div><strong>Turn up<br />the <em>volume.</em></strong><span className="art-caption">REAL CONNECTIONS. REAL IMPACT.</span></>}
    </div>
  </div>;
}
export function ProjectArt({ index }: { index: number }) {
  const p = projects[index];
  return <div className={`project-visual ${p.color}`}><div className="project-visual-top"><span>UGI® / CONCEPT SERIES</span><span>0{index + 1} — 2026</span></div>{index === 0 && <div className="nova-rings"><i /><i /><i /><i /></div>}{index === 1 && <div className="luma-orbs"><i /><i /><i /></div>}{index === 2 && <div className="forma-lines"><i /><i /><i /></div>}<div className="project-wordmark">{p.name}<small>{p.suffix}</small></div><ArrowUpRight className="project-visual-arrow" size={30} strokeWidth={1} /></div>;
}
