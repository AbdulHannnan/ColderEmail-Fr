import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colder Email — Cold Email Systems That Convert",
  description:
    "A conversion-focused cold email landing page built with a clean, minimal and future-ready Next.js architecture.",
  metadataBase: new URL("https://colder.email"),
  openGraph: {
    title: "Colder Email — Cold Email Systems That Convert",
    description:
      "Launch sharper outbound campaigns with clean positioning, list strategy, copy and optimization.",
    url: "https://colder.email",
    siteName: "Colder Email",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
