import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amith Prabha | Software Engineer · Dubai",
  description: "Software engineer in Dubai specializing in backend and distributed systems, .NET, Python, Node.js, automation, and full-stack web development.",
  openGraph: {
    title: "Amith Prabha | Software Engineer",
    description: "Reliable systems. Thoughtful experiences. Explore my backend, automation, and full-stack development work.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
