import type { Metadata } from "next";
import "./globals.css";
import "./interactions.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ugi-ajans.benmustafademircitr.chatgpt.site"),
  title: "Ugi Ajans — Yaratıcı Düşünür. Etki Yaratır.",
  description: "Cesur fikirleri güçlü markalara dönüştürüyoruz. Web tasarımı, marka kimliği, video prodüksiyon ve dijital pazarlama.",
  robots: { index: false, follow: false },
  openGraph: { title: "Ugi Ajans — Yaratıcı Düşünür. Etki Yaratır.", description: "Strateji, tasarım, teknoloji. Markanız için aynı masada.", locale: "tr_TR", type: "website" },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head><link rel="stylesheet" href="/fonts/google-fonts.css" /><link rel="preload" as="image" href="/images/hero-owl.webp" /></head>
      <body>{children}</body>
    </html>
  );
}
