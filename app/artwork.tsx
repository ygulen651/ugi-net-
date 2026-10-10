import { ArrowUpRight, Camera, Code2, Megaphone, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, type ServiceKey } from "./content";

export function Logo({ footer = false }: { footer?: boolean }) {
  return <Link className={`logo ${footer ? "logo-footer" : ""}`} href="/" aria-label="Ugi Ajans">
    {footer && <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs><filter id="ugi-footer-ink" colorInterpolationFilters="sRGB">
        {/* Darken the neutral white lettering while preserving yellow and alpha. */}
        <feColorMatrix type="matrix" values="1 0 -0.96862745 0 0  0 1 -0.96862745 0 0  0 0 0.03137255 0 0  0 0 0 1 0" />
      </filter></defs>
    </svg>}
    <Image src="/images/LOGOa.webp" alt="" width={120} height={94} sizes="88px" unoptimized />
  </Link>;
}
export function ServiceIcon({ type }: { type: ServiceKey }) {
  const Icon = { web: Code2, production: Camera, design: PenTool, digital: Megaphone }[type];
  return <Icon size={24} strokeWidth={1.4} />;
}

const serviceMascots: Record<ServiceKey, { src: string; width: number; height: number }> = {
  web: { src: "/images/MASKOTLAR/ugi-startup-page.png", width: 1467, height: 1524 },
  design: { src: "/images/MASKOTLAR/owl-portfolio-page.png", width: 1344, height: 1380 },
  production: { src: "/images/MASKOTLAR/transition-owl.webp", width: 1100, height: 825 },
  digital: { src: "/images/MASKOTLAR/ugi-journal-page.png", width: 1548, height: 1604 },
};

export function ServiceArt({ type }: { type: ServiceKey }) {
  const mascot = serviceMascots[type];
  return <div className={`service-art service-art-mascot service-mascot-${type}`} aria-hidden="true">
    <span className="service-mascot-halo" />
    <Image
      className="service-mascot-image"
      src={mascot.src}
      alt=""
      width={mascot.width}
      height={mascot.height}
      sizes="(max-width: 640px) 84vw, (max-width: 980px) 43vw, 510px"
      unoptimized
    />
  </div>;
}
export function ProjectArt({ index }: { index: number }) {
  const p = projects[index];
  return <div className={`project-visual ${p.color}`}><div className="project-visual-top"><span>UGI® / CONCEPT SERIES</span><span>0{index + 1} — 2026</span></div>{index === 0 && <div className="nova-rings"><i /><i /><i /><i /></div>}{index === 1 && <div className="luma-orbs"><i /><i /><i /></div>}{index === 2 && <div className="forma-lines"><i /><i /><i /></div>}<div className="project-wordmark">{p.name}<small>{p.suffix}</small></div><ArrowUpRight className="project-visual-arrow" size={30} strokeWidth={1} /></div>;
}
