"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  ChevronDown,
  Clipboard,
  FileDown,
  Loader2,
  RefreshCcw,
  Wand2,
} from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-[#181a14]/12 bg-[#fffffb] px-4 py-3 text-sm text-[#181a14] outline-none transition placeholder:text-[#969b87] focus:border-[#9ab326] focus:ring-4 focus:ring-[#d8ff68]/35";
const labelClass = "text-xs font-bold uppercase tracking-[0.18em] text-[#6b6f60]";
const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-[#181a14] px-4 py-3 text-sm font-semibold text-[#fbfaf3] shadow-[0_16px_30px_rgba(24,26,20,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2b2f20] disabled:pointer-events-none disabled:opacity-60";
const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-[#181a14]/10 bg-[#fbfaf3] px-4 py-3 text-sm font-semibold text-[#26291f] transition hover:border-[#181a14]/25 hover:bg-[#f2f4e4]";

export function MinimalBriefWorkbench() {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [keyBenefits, setKeyBenefits] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [offer, setOffer] = useState("");

  const briefText = useMemo(() => {
    const name = productName || "your product";
    const benefits = keyBenefits || "a clearer product benefit";
    const audience = targetAudience || "the buyer who already feels the problem";
    const currentOffer = offer || "the first-order offer";

    return [
      "Source Ad Pattern",
      "Pain point hook -> product demo -> quick proof -> simple CTA.",
      "",
      "Your Product Angle",
      `${name} as the easier way to get ${benefits}.`,
      "",
      "Hook Options",
      `1. If you have been looking for ${benefits}, start here.`,
      `2. The easiest upgrade for ${audience}.`,
      "3. I changed one step and this is what felt different.",
      "",
      "15s Script",
      `If your current routine is not giving you ${benefits}, try ${name}. It keeps the message simple: show the problem, show the product, then show why it fits into a real routine. End with ${currentOffer}.`,
      "",
      "Shot List",
      "0-3s: Creator names the problem in a close-up.",
      "3-8s: Product texture or use demo.",
      "8-12s: Natural reaction or benefit moment.",
      "12-15s: Product pack shot with offer.",
      "",
      "Creator Notes",
      "Keep the delivery natural. Do not mention competitor brands. Avoid exaggerated claims.",
    ].join("\n");
  }, [keyBenefits, offer, productName, targetAudience]);

  function generateBrief() {
    setIsGenerating(true);
    window.setTimeout(() => {
      setHasGenerated(true);
      setIsGenerating(false);
    }, 500);
  }

  async function copyBrief() {
    await navigator.clipboard.writeText(briefText);
  }

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-5 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="rounded-xl border border-[#181a14]/10 bg-[#f5f3e8] p-4 shadow-[0_18px_60px_rgba(24,26,20,0.08)] sm:p-5">
        <div className="grid gap-4">
          <label className="grid gap-2">
            <span className={labelClass}>Competitor TikTok URL</span>
            <input className={inputClass} placeholder="https://www.tiktok.com/@brand/video/123456789" />
            <span className="text-xs leading-5 text-[#6b6f60]">
              We analyze the structure, not copy the video.
            </span>
          </label>

          <label className="grid gap-2">
            <span className={labelClass}>Product name</span>
            <input
              className={inputClass}
              placeholder="GlowPure Facial Cleanser"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
            />
          </label>

          <label className="grid gap-2">
            <span className={labelClass}>Product description</span>
            <textarea
              className={`${inputClass} min-h-28 resize-none`}
              placeholder="Gentle foaming cleanser for sensitive skin."
              value={productDescription}
              onChange={(event) => setProductDescription(event.target.value)}
            />
          </label>

          <label className="grid gap-2">
            <span className={labelClass}>Key benefits</span>
            <input
              className={inputClass}
              placeholder="Gentle clean, no tight feeling, soft foam"
              value={keyBenefits}
              onChange={(event) => setKeyBenefits(event.target.value)}
            />
          </label>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className={labelClass}>Target audience optional</span>
              <input
                className={inputClass}
                placeholder="Sensitive-skin shoppers"
                value={targetAudience}
                onChange={(event) => setTargetAudience(event.target.value)}
              />
            </label>
            <label className="grid gap-2">
              <span className={labelClass}>Offer optional</span>
              <input
                className={inputClass}
                placeholder="20% off first order"
                value={offer}
                onChange={(event) => setOffer(event.target.value)}
              />
            </label>
          </div>

          <div className="rounded-lg border border-[#181a14]/10 bg-[#fffffb]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-[#181a14]"
              onClick={() => setIsAdvancedOpen((value) => !value)}
              aria-expanded={isAdvancedOpen}
            >
              Advanced options
              <ChevronDown
                className={`size-4 text-[#6b6f60] transition ${isAdvancedOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {isAdvancedOpen ? (
              <div className="grid gap-4 border-t border-[#181a14]/10 p-4">
                <label className="grid gap-2">
                  <span className={labelClass}>Brand tone</span>
                  <input className={inputClass} placeholder="Natural, expert, playful, premium..." />
                </label>
                <label className="grid gap-2">
                  <span className={labelClass}>Claims to avoid</span>
                  <input className={inputClass} placeholder="Medical claims, guaranteed results..." />
                </label>
                <label className="grid gap-2">
                  <span className={labelClass}>Product URL</span>
                  <input className={inputClass} placeholder="https://yourstore.com/product" />
                </label>
              </div>
            ) : null}
          </div>

          <button type="button" className={primaryButton} onClick={generateBrief}>
            {isGenerating ? (
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            ) : (
              <Wand2 className="size-4" aria-hidden="true" />
            )}
            {isGenerating ? "Generating..." : "Generate UGC Brief"}
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-[#181a14]/10 bg-[#fffffb] p-4 shadow-[0_20px_70px_rgba(24,26,20,0.09)] sm:p-5">
        {!hasGenerated ? (
          <div className="grid min-h-[520px] place-items-center rounded-lg border border-dashed border-[#181a14]/18 bg-[#f7f8ef] p-8 text-center">
            <p className="max-w-xs text-base leading-7 text-[#626657]">
              Your UGC brief will appear here after generation.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            <BriefSection title="Source Ad Pattern">
              {"Pain point hook -> product demo -> quick proof -> simple CTA."}
            </BriefSection>
            <BriefSection title="Your Product Angle">
              {(productName || "Your product") +
                " as the easier, more natural fix for the buyer's current routine."}
            </BriefSection>
            <BriefSection title="Hook Options">
              <ul className="grid gap-2">
                <li>If your current routine still feels off, start here.</li>
                <li>The easiest upgrade for {targetAudience || "your target buyer"}.</li>
                <li>I changed one step and this is what felt different.</li>
              </ul>
            </BriefSection>
            <BriefSection title="15s Script">
              Start with the problem, show {productName || "the product"} in use, call out{" "}
              {keyBenefits || "the key benefit"}, and end with {offer || "a clear next step"}.
            </BriefSection>
            <BriefSection title="Shot List">
              <ul className="grid gap-2">
                <li>0-3s: Creator names the problem.</li>
                <li>3-8s: Product use or texture demo.</li>
                <li>8-12s: Natural benefit moment.</li>
                <li>12-15s: Pack shot and offer.</li>
              </ul>
            </BriefSection>
            <BriefSection title="Creator Notes">
              Keep delivery natural. Do not mention competitor brands. Avoid exaggerated or unsupported claims.
            </BriefSection>

            <div className="grid gap-2 border-t border-[#181a14]/10 pt-4 sm:grid-cols-3">
              <button type="button" className={primaryButton} onClick={copyBrief}>
                <Clipboard className="size-4" aria-hidden="true" />
                Copy Brief
              </button>
              <button type="button" className={secondaryButton}>
                <FileDown className="size-4" aria-hidden="true" />
                Export PDF
              </button>
              <button type="button" className={secondaryButton} onClick={generateBrief}>
                <RefreshCcw className="size-4" aria-hidden="true" />
                Regenerate
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function BriefSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-[#181a14]/10 bg-[#f7f8ef] p-4">
      <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#6e7f1d]">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-[#282b20]">{children}</div>
    </section>
  );
}
