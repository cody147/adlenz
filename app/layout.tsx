import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AdBrief AI | TikTok UGC Brief Generator",
    template: "%s",
  },
  description:
    "Analyze TikTok ad structures and generate original UGC briefs, hooks, scripts, shot lists, and creator instructions.",
  applicationName: "AdBrief AI",
  metadataBase: new URL("https://adbrief.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#fbfaf3] text-[#181a14]">{children}</body>
    </html>
  );
}
