import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Research Ops",
  description: "Private research operations sidecar for VERBOTEN MEDIA",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
