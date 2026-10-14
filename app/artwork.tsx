import { Camera, Code2, Megaphone, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, type ServiceKey } from "./content";

export function Logo({ footer = false }: { footer?: boolean }) {
  return <Link className={`logo ${footer ? "logo-footer" : ""}`} href="/" aria-label="Ugi Ajans">
    {footer
      ? <Image src="/images/logo-karanlik.webp" alt="" width={480} height={373} sizes="108px" unoptimized />
      : <Image src="/images/LOGOa.webp" alt="" width={120} height={94} sizes="88px" unoptimized />}
  </Link>;
}
export function ServiceIcon({ type }: { type: ServiceKey }) {
  const Icon = { web: Code2, production: Camera, design: PenTool, digital: Megaphone }[type];
  return <Icon size={24} strokeWidth={1.4} />;
}

const serviceMascots: Record<ServiceKey, { src: string; width: number; height: number }> = {
  web: { src: "/images/MASKOTLAR/owl-web-work.png", width: 1024, height: 1536 },
  design: { src: "/images/MASKOTLAR/owl-dijital-tasarim.webp", width: 1033, height: 1143 },
  production: { src: "/images/MASKOTLAR/owl-video-camera.png", width: 1024, height: 1536 },
  digital: { src: "/images/MASKOTLAR/owl-dijital-pazarlama.webp", width: 1056, height: 1244 },
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
  return <div className="project-visual project-screenshot"><Image className="project-screenshot-image" src={p.image.src} alt="" width={p.image.width} height={p.image.height} sizes="(max-width: 640px) 86vw, (max-width: 980px) 76vw, 900px" unoptimized /></div>;
}
