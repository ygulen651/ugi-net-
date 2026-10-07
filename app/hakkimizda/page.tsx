import type { Metadata } from "next";
import UgiHome from "../ugi-home";
import { agencyPages } from "../agency-content";

export const metadata: Metadata = {
  title: "Hakkımızda | Ugi Ajans",
  description: agencyPages.about.description[0],
  openGraph: { title: "Hakkımızda | Ugi Ajans", description: agencyPages.about.description[0] },
};

export default function Page() {
  return <UgiHome key="about" page="about" />;
}
