import type { Metadata } from "next";
import UgiHome from "../ugi-home";
import { agencyPages } from "../agency-content";

export const metadata: Metadata = {
  title: "Blog | Ugi Ajans",
  description: agencyPages.blog.description[0],
  openGraph: { title: "Blog | Ugi Ajans", description: agencyPages.blog.description[0] },
};

export default function Page() {
  return <UgiHome key="blog" page="blog" />;
}
