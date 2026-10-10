import type { Metadata } from "next";
import UgiHome from "../ugi-home";
import { agencyPages } from "../agency-content";

export const metadata: Metadata = {
  title: "İletişim | Ugi Ajans",
  description: agencyPages.contact.description[0],
  openGraph: { title: "İletişim | Ugi Ajans", description: agencyPages.contact.description[0] },
};

export default function Page() {
  return <UgiHome key="contact" page="contact" />;
}
