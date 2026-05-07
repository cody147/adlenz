import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { SectionShell } from "@/frontend/components/section-shell";
import { SiteFooter, SiteHeader } from "@/frontend/components/site-chrome";
import { toolPages } from "@/frontend/features/adbrief-pages/data/tool-pages";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fbfaf3] text-[#181a14]">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(216,255,104,0.32),transparent_30%),radial-gradient(circle_at_78%_10%,rgba(228,107,69,0.13),transparent_24%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(24,26,20,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(24,26,20,0.045)_1px,transparent_1px)] bg-[size:36px_36px]" />
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#181a14]/10 bg-[#fffffb]/80 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5f6d1c]">
                <Sparkles className="size-3.5" aria-hidden="true" />
                TikTok creative strategy tool
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[#181a14] sm:text-7xl">
                Competitor TikToks into creator-ready UGC briefs.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#575b4d]">
                Start from a TikTok URL, extract the creative structure, then generate
                original hooks, scripts, shot lists, and creator instructions for your
                own product.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/ugc-brief-generator"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#181a14] px-5 py-3 text-sm font-bold text-[#fbfaf3] shadow-[0_16px_30px_rgba(24,26,20,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2b2f20]"
                >
                  Generate UGC Brief
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/tiktok-transcript-generator"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#181a14]/10 bg-[#fffffb] px-5 py-3 text-sm font-bold text-[#181a14] transition hover:bg-[#f2f4e8]"
                >
                  Extract Transcript
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-[#181a14]/10 bg-[#fffffb]/90 p-5 shadow-[0_22px_70px_rgba(24,26,20,0.09)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6e7f1d]">
                Launch workflow
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Paste competitor TikTok URL",
                  "Extract transcript and on-screen text",
                  "Analyze hook, angle, proof, offer, and CTA",
                  "Rewrite for your product",
                  "Export creator-ready brief",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg bg-[#f7f8ef] p-4 text-sm font-semibold text-[#282b20]">
                    <CheckCircle2 className="size-4 shrink-0 text-[#6e7f1d]" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="Launch pages"
          title="Five tool-first entry points"
          copy="Each page is built as a usable first screen, not a passive landing page."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {toolPages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className="group rounded-xl border border-[#181a14]/10 bg-[#fffffb] p-5 transition hover:-translate-y-1 hover:border-[#9ab326]/50 hover:shadow-[0_18px_50px_rgba(24,26,20,0.09)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6e7f1d]">
                  {page.eyebrow}
                </p>
                <h2 className="mt-4 text-xl font-semibold text-[#181a14]">{page.headline}</h2>
                <p className="mt-3 text-sm leading-6 text-[#626657]">{page.subheadline}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#181a14]">
                  Open tool
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </SectionShell>
      </main>
      <SiteFooter />
    </div>
  );
}
