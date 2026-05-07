import Link from "next/link";
import { ArrowRight, Layers3, ShieldCheck } from "lucide-react";
import { toolPages } from "@/frontend/features/adbrief-pages/data/tool-pages";
import { ToolsMenu } from "./tools-menu.client";

const toolEntrances = toolPages.filter((page) => page.kind !== "brief");

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#181a14]/10 bg-[#fbfaf3]/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="AdBrief AI home">
          <span className="grid size-9 place-items-center rounded-lg bg-[#14160f] text-[#d8ff68] shadow-[0_10px_30px_rgba(20,22,15,0.18)]">
            <Layers3 className="size-4" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#181a14]">
            AdBrief AI
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          <ToolsMenu tools={toolEntrances} />
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/ugc-brief-generator"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-[#3d412f] transition hover:bg-[#eef0df] sm:inline-flex"
          >
            Generate Brief
          </Link>
          <Link
            href="/ugc-brief-generator"
            className="inline-flex items-center gap-2 rounded-full bg-[#181a14] px-4 py-2 text-sm font-semibold text-[#fbfaf3] shadow-[0_12px_28px_rgba(24,26,20,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2b2f20]"
          >
            Start free
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#181a14]/10 bg-[#f3f1e6]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-lg bg-[#181a14] text-[#d8ff68]">
              <Layers3 className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#181a14]">
              AdBrief AI
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#626657]">
            Analyze creative structure, generate original UGC briefs, and keep competitor
            research inside a compliant production workflow.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-[#181a14]/10 bg-[#fbfaf3] p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#181a14]">
              <ShieldCheck className="size-4 text-[#5b6e19]" aria-hidden="true" />
              Compliance note
            </div>
            <p className="mt-3 text-sm leading-6 text-[#626657]">
              AdBrief AI helps you analyze creative patterns and generate original
              briefs. Always review scripts for brand accuracy, platform policy, and
              legal compliance before publishing.
            </p>
          </div>
          <div className="rounded-lg border border-[#181a14]/10 bg-[#fbfaf3] p-5">
            <p className="text-sm font-semibold text-[#181a14]">Launch pages</p>
            <div className="mt-3 grid gap-2 text-sm text-[#626657]">
              {toolPages.map((page) => (
                <Link key={page.path} href={page.path} className="hover:text-[#181a14]">
                  {page.navLabel}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
