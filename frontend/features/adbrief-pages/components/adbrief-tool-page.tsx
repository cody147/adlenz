import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Sparkles } from "lucide-react";
import { SectionShell } from "@/frontend/components/section-shell";
import { SiteFooter, SiteHeader } from "@/frontend/components/site-chrome";
import type { ToolPageConfig } from "../types";
import { MinimalBriefWorkbench } from "./minimal-brief-workbench.client";
import { ToolWorkbench } from "./tool-workbench.client";

type AdbriefToolPageProps = {
  config: ToolPageConfig;
};

export function AdbriefToolPage({ config }: AdbriefToolPageProps) {
  const isBriefPage = config.kind === "brief";
  const headline = isBriefPage
    ? "Turn a competitor TikTok into a UGC brief"
    : config.headline;
  const subheadline = isBriefPage
    ? "Paste a competitor video, add your product, and get a shoot-ready brief with hooks, script, shot list, and creator notes."
    : config.subheadline;

  return (
    <div className="min-h-screen bg-[#fbfaf3] text-[#181a14]">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(216,255,104,0.26),transparent_28%),linear-gradient(135deg,rgba(24,26,20,0.05)_0,transparent_34%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(24,26,20,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(24,26,20,0.045)_1px,transparent_1px)] bg-[size:36px_36px]" />

          <div className="mx-auto w-full max-w-7xl">
            <div
              className={
                isBriefPage
                  ? "mx-auto mb-8 max-w-4xl text-center"
                  : "mb-8 grid gap-7 lg:grid-cols-[0.88fr_0.52fr] lg:items-end"
              }
            >
              <div className={isBriefPage ? "grid justify-items-center" : undefined}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#181a14]/10 bg-[#fffffb]/78 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5f6d1c] shadow-[0_10px_30px_rgba(24,26,20,0.06)]">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  {config.eyebrow}
                </div>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#181a14] sm:text-6xl lg:text-7xl">
                  {headline}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#575b4d] sm:text-lg">
                  {subheadline}
                </p>
              </div>

              {!isBriefPage ? (
                <div className="rounded-xl border border-[#181a14]/10 bg-[#fffffb]/86 p-5 shadow-[0_22px_70px_rgba(24,26,20,0.09)]">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6e7f1d]">
                    Product principle
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-7 text-[#181a14]">
                    Analyze creative structure. Generate original briefs. Do not copy videos.
                  </p>
                  <div className="mt-5 grid gap-2 text-sm text-[#626657]">
                    {["No video downloading", "No competitor copy-paste", "Claims stay reviewable"].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#6e7f1d]" aria-hidden="true" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {isBriefPage ? <MinimalBriefWorkbench /> : <ToolWorkbench config={config} />}
          </div>
        </section>

        <section className="bg-[#181a14] px-4 py-6 text-[#fbfaf3] sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#d8ff68]">{config.conversionCta.title}</p>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-[#d9dbc9]">{config.conversionCta.copy}</p>
            </div>
            <Link
              href={config.conversionCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#d8ff68] px-4 py-3 text-sm font-bold text-[#181a14] transition hover:-translate-y-0.5 hover:bg-[#e8ff9c]"
            >
              {config.conversionCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <SectionShell
          eyebrow="Process"
          title="How it works"
          copy="The first version keeps the workflow simple: get the source structure, rewrite it for your product, and move toward a creator-ready deliverable."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {config.howItWorks.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-[#181a14]/10 bg-[#f7f8ef] p-5">
                <div className="mb-5 grid size-10 place-items-center rounded-lg bg-[#181a14] font-mono text-sm font-bold text-[#d8ff68]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-[#181a14]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#626657]">{step.copy}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Output"
          title="What the MVP output includes"
          copy="These modules match the PRD launch scope and create a clear upgrade path for saved projects, exports, and batch reports."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Competitor ad breakdown",
              "Hook and angle variants",
              "15s and 30s scripts",
              "Shot list and creator notes",
              "On-screen text and voiceover",
              "CTA variants",
              "Copy and export UI",
              "Upgrade-ready states",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-[#181a14]/10 bg-[#fffffb] p-4 text-sm font-semibold text-[#282b20]">
                <FileText className="size-4 shrink-0 text-[#6e7f1d]" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Use cases"
          title="Built for short-form ad production"
          copy="Each page attracts a different search intent, but they all drive toward the same brief-generation workflow."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {config.useCases.map((useCase) => (
              <article key={useCase.title} className="rounded-xl border border-[#181a14]/10 bg-[#fffffb] p-5">
                <h3 className="text-lg font-semibold text-[#181a14]">{useCase.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#626657]">{useCase.copy}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell eyebrow="FAQ" title="Questions before you generate">
          <div className="grid gap-3">
            {config.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-[#181a14]/10 bg-[#fffffb] p-5">
                <summary className="cursor-pointer list-none text-base font-semibold text-[#181a14] marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-[#626657]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </SectionShell>
      </main>
      <SiteFooter />
    </div>
  );
}
