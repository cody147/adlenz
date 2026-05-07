import type { Metadata } from "next";
import { AdbriefToolPage } from "@/frontend/features/adbrief-pages/components/adbrief-tool-page";
import { getToolPage } from "@/frontend/features/adbrief-pages/data/tool-pages";

const pageConfig = getToolPage("analyzer");

export const metadata: Metadata = {
  title: pageConfig.seo.title,
  description: pageConfig.seo.description,
  keywords: pageConfig.seo.keywords,
  alternates: {
    canonical: pageConfig.path,
  },
};

export default function TikTokAdAnalyzerPage() {
  return <AdbriefToolPage config={pageConfig} />;
}
