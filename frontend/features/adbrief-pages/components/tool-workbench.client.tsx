"use client";

import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Clipboard,
  Copy,
  Download,
  FileText,
  Link as LinkIcon,
  Loader2,
  LockKeyhole,
  Rows3,
  Sparkles,
  Target,
  Wand2,
} from "lucide-react";
import type { ToolPageConfig } from "../types";
import {
  demoBreakdown,
  demoHookGroups,
  demoMatrixRows,
  demoOnScreenText,
  demoScriptVariants,
  demoShotList,
  demoTranscript,
} from "../data/demo-output";

type ToolWorkbenchProps = {
  config: ToolPageConfig;
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition disabled:pointer-events-none disabled:opacity-60";

const primaryButton = `${buttonBase} bg-[#181a14] text-[#fbfaf3] shadow-[0_16px_30px_rgba(24,26,20,0.18)] hover:-translate-y-0.5 hover:bg-[#2b2f20]`;
const secondaryButton = `${buttonBase} border border-[#181a14]/10 bg-[#fbfaf3] text-[#26291f] hover:border-[#181a14]/25 hover:bg-[#f2f4e4]`;
const inputClass =
  "w-full rounded-lg border border-[#181a14]/12 bg-[#fffffb] px-4 py-3 text-sm text-[#181a14] outline-none transition placeholder:text-[#969b87] focus:border-[#9ab326] focus:ring-4 focus:ring-[#d8ff68]/35";
const labelClass = "text-xs font-bold uppercase tracking-[0.18em] text-[#6b6f60]";

export function ToolWorkbench({ config }: ToolWorkbenchProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const [briefTab, setBriefTab] = useState("Breakdown");
  const [length, setLength] = useState("30s");
  const [tone, setTone] = useState("UGC Review");
  const [inputMode, setInputMode] = useState<"TikTok URL" | "Product Description">("TikTok URL");
  const [analysisMode, setAnalysisMode] = useState<"Single URL" | "Batch URLs">("Single URL");
  const [selectedHooks, setSelectedHooks] = useState<string[]>([]);

  function runDemo() {
    setIsGenerating(true);
    window.setTimeout(() => {
      setHasGenerated(true);
      setIsGenerating(false);
    }, 650);
  }

  async function copyText(label: string, text: string) {
    await navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    window.setTimeout(() => setCopiedLabel(null), 1300);
  }

  function downloadText(filename: string, text: string) {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function toggleHook(hook: string) {
    setSelectedHooks((current) =>
      current.includes(hook) ? current.filter((item) => item !== hook) : [...current, hook],
    );
  }

  const transcriptText = demoTranscript.map((line) => `${line.time} ${line.text}`).join("\n");
  const showReadyState = hasGenerated || config.kind === "analyzer";

  return (
    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
      <div
        className="rounded-xl border border-[#181a14]/10 bg-[#f5f3e8] p-4 shadow-[0_18px_60px_rgba(24,26,20,0.08)] sm:p-5"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className={labelClass}>{config.workspaceTitle}</p>
            <p className="mt-2 text-sm leading-6 text-[#626657]">{config.workspaceCopy}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d8ff68] px-3 py-1 text-xs font-bold text-[#252916]">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Demo
          </span>
        </div>

        {config.kind === "transcript" ? <TranscriptForm /> : null}
        {config.kind === "brief" ? <BriefForm /> : null}
        {config.kind === "script" ? (
          <ScriptForm length={length} setLength={setLength} tone={tone} setTone={setTone} />
        ) : null}
        {config.kind === "hooks" ? (
          <HooksForm inputMode={inputMode} setInputMode={setInputMode} />
        ) : null}
        {config.kind === "analyzer" ? (
          <AnalyzerForm analysisMode={analysisMode} setAnalysisMode={setAnalysisMode} />
        ) : null}

        <button type="button" className={`${primaryButton} mt-5 w-full`} onClick={runDemo}>
          {isGenerating ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <Wand2 className="size-4" aria-hidden="true" />
          )}
          {isGenerating ? "Generating preview..." : config.primaryCta}
        </button>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-[#69705a]">
          <span className="rounded-md bg-[#fbfaf3] px-2 py-2">Original</span>
          <span className="rounded-md bg-[#fbfaf3] px-2 py-2">Compliant</span>
          <span className="rounded-md bg-[#fbfaf3] px-2 py-2">Creator-ready</span>
        </div>
      </div>

      <div className="min-h-[540px] rounded-xl border border-[#181a14]/10 bg-[#fffffb] p-4 shadow-[0_20px_70px_rgba(24,26,20,0.09)] sm:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#181a14]/10 pb-4">
          <div>
            <p className={labelClass}>{showReadyState ? "Generated preview" : "Example output"}</p>
            <p className="mt-1 text-sm text-[#626657]">
              {showReadyState
                ? "Structured output from the demo workflow."
                : "Click generate to simulate the MVP workflow."}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className={secondaryButton}
              onClick={() => copyText("Copy", resultCopyFor(config.kind, transcriptText))}
            >
              {copiedLabel === "Copy" ? (
                <Check className="size-4" aria-hidden="true" />
              ) : (
                <Copy className="size-4" aria-hidden="true" />
              )}
              {copiedLabel === "Copy" ? "Copied" : "Copy"}
            </button>
            <button
              type="button"
              className={secondaryButton}
              onClick={() => downloadText(`${config.kind}-demo.txt`, resultCopyFor(config.kind, transcriptText))}
            >
              <Download className="size-4" aria-hidden="true" />
              TXT
            </button>
          </div>
        </div>

        {config.kind === "transcript" ? (
          <TranscriptResult copyText={copyText} downloadText={downloadText} transcriptText={transcriptText} />
        ) : null}
        {config.kind === "brief" ? (
          <BriefResult activeTab={briefTab} setActiveTab={setBriefTab} />
        ) : null}
        {config.kind === "script" ? <ScriptResult length={length} tone={tone} /> : null}
        {config.kind === "hooks" ? (
          <HooksResult selectedHooks={selectedHooks} toggleHook={toggleHook} />
        ) : null}
        {config.kind === "analyzer" ? <AnalyzerResult analysisMode={analysisMode} /> : null}
      </div>
    </div>
  );
}

function TranscriptForm() {
  return (
    <div className="grid gap-4">
      <label className="grid gap-2">
        <span className={labelClass}>TikTok video URL</span>
        <div className="relative">
          <LinkIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#7b806e]" />
          <input className={`${inputClass} pl-10`} placeholder="https://www.tiktok.com/@brand/video/123456789" />
        </div>
      </label>
      <p className="rounded-lg border border-[#181a14]/10 bg-[#fbfaf3] px-4 py-3 text-sm leading-6 text-[#626657]">
        Public videos work best. If extraction fails, paste a transcript manually in the next step.
      </p>
    </div>
  );
}

function BriefForm() {
  return (
    <div className="grid gap-4">
      <label className="grid gap-2">
        <span className={labelClass}>Competitor TikTok URL</span>
        <input className={inputClass} placeholder="Paste competitor TikTok URL" />
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className={labelClass}>Product name</span>
          <input className={inputClass} placeholder="GlowPure Facial Cleanser" />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>Offer</span>
          <input className={inputClass} placeholder="20% off first order" />
        </label>
      </div>
      <label className="grid gap-2">
        <span className={labelClass}>Product description</span>
        <textarea
          className={`${inputClass} min-h-24 resize-none`}
          placeholder="Gentle foaming cleanser for sensitive or breakout-prone skin."
        />
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className={labelClass}>Key benefits</span>
          <input className={inputClass} placeholder="Gentle, deep clean, brightening" />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>Target audience</span>
          <input className={inputClass} placeholder="Women 25-35 with sensitive skin" />
        </label>
      </div>
    </div>
  );
}

function ScriptForm({
  length,
  setLength,
  tone,
  setTone,
}: {
  length: string;
  setLength: (value: string) => void;
  tone: string;
  setTone: (value: string) => void;
}) {
  return (
    <div className="grid gap-4">
      <label className="grid gap-2">
        <span className={labelClass}>Product or offer description</span>
        <textarea
          className={`${inputClass} min-h-28 resize-none`}
          placeholder="Describe the product, audience, offer, and any structure to learn from."
        />
      </label>
      <label className="grid gap-2">
        <span className={labelClass}>Optional TikTok URL or transcript</span>
        <input className={inputClass} placeholder="Paste URL or transcript reference" />
      </label>
      <SegmentedControl label="Script length" options={["15s", "30s", "45s"]} value={length} onChange={setLength} />
      <SegmentedControl
        label="Tone"
        options={["UGC Review", "Founder", "Problem/Solution", "Demo"]}
        value={tone}
        onChange={setTone}
      />
    </div>
  );
}

function HooksForm({
  inputMode,
  setInputMode,
}: {
  inputMode: "TikTok URL" | "Product Description";
  setInputMode: (value: "TikTok URL" | "Product Description") => void;
}) {
  return (
    <div className="grid gap-4">
      <SegmentedControl
        label="Input mode"
        options={["TikTok URL", "Product Description"]}
        value={inputMode}
        onChange={(value) => setInputMode(value as "TikTok URL" | "Product Description")}
      />
      <label className="grid gap-2">
        <span className={labelClass}>{inputMode}</span>
        {inputMode === "TikTok URL" ? (
          <input className={inputClass} placeholder="Paste a TikTok URL to analyze hook structure" />
        ) : (
          <textarea
            className={`${inputClass} min-h-28 resize-none`}
            placeholder="Describe your product, buyer, benefit, and offer."
          />
        )}
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className={labelClass}>Category</span>
          <input className={inputClass} placeholder="Skincare, supplements, home..." />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>Audience</span>
          <input className={inputClass} placeholder="Busy moms, Gen Z shoppers..." />
        </label>
      </div>
    </div>
  );
}

function AnalyzerForm({
  analysisMode,
  setAnalysisMode,
}: {
  analysisMode: "Single URL" | "Batch URLs";
  setAnalysisMode: (value: "Single URL" | "Batch URLs") => void;
}) {
  return (
    <div className="grid gap-4">
      <SegmentedControl
        label="Analysis mode"
        options={["Single URL", "Batch URLs"]}
        value={analysisMode}
        onChange={(value) => setAnalysisMode(value as "Single URL" | "Batch URLs")}
      />
      <label className="grid gap-2">
        <span className={labelClass}>TikTok URLs</span>
        <textarea
          className={`${inputClass} min-h-32 resize-none`}
          placeholder={
            analysisMode === "Single URL"
              ? "Paste one TikTok URL"
              : "Paste 10-50 TikTok URLs, one per line"
          }
          defaultValue={
            analysisMode === "Batch URLs"
              ? "https://www.tiktok.com/@brand/video/1001\nhttps://www.tiktok.com/@creator/video/1002\nhttps://www.tiktok.com/@shop/video/1003"
              : ""
          }
        />
      </label>
      {analysisMode === "Batch URLs" ? (
        <div className="flex items-center gap-2 rounded-lg border border-[#e46b45]/30 bg-[#fff3ed] px-4 py-3 text-sm font-semibold text-[#8c3f25]">
          <LockKeyhole className="size-4" aria-hidden="true" />
          Batch reports are a Pro workflow.
        </div>
      ) : null}
    </div>
  );
}

function SegmentedControl({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-2">
      <span className={labelClass}>{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`rounded-full px-3 py-2 text-xs font-bold transition ${
              value === option
                ? "bg-[#181a14] text-[#fbfaf3]"
                : "border border-[#181a14]/10 bg-[#fffffb] text-[#626657] hover:border-[#181a14]/25 hover:text-[#181a14]"
            }`}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function TranscriptResult({
  copyText,
  downloadText,
  transcriptText,
}: {
  copyText: (label: string, text: string) => Promise<void>;
  downloadText: (filename: string, text: string) => void;
  transcriptText: string;
}) {
  return (
    <div className="grid gap-4">
      <div className="grid gap-3 sm:grid-cols-4">
        {[
          ["Duration", "0:28"],
          ["Words", "68"],
          ["Language", "English"],
          ["Source", "Speech + OCR"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-[#181a14]/10 bg-[#f7f8ef] p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#707665]">{label}</p>
            <p className="mt-2 text-lg font-semibold text-[#181a14]">{value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-[#181a14]/10">
        {demoTranscript.map((line) => (
          <div key={line.time} className="grid gap-3 border-b border-[#181a14]/10 p-4 last:border-b-0 sm:grid-cols-[72px_1fr]">
            <span className="font-mono text-xs font-semibold text-[#6e7f1d]">{line.time}</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7b806e]">{line.speaker}</p>
              <p className="mt-1 text-sm leading-6 text-[#282b20]">{line.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-[#181a14] p-4 text-[#fbfaf3]">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d8ff68]">On-screen text</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {demoOnScreenText.map((item) => (
            <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-sm">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className={secondaryButton} onClick={() => copyText("Transcript", transcriptText)}>
          <Clipboard className="size-4" aria-hidden="true" />
          Copy transcript
        </button>
        <button type="button" className={secondaryButton} onClick={() => downloadText("tiktok-transcript.srt", transcriptText)}>
          <FileText className="size-4" aria-hidden="true" />
          SRT
        </button>
      </div>
    </div>
  );
}

function BriefResult({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const tabs = ["Breakdown", "Hooks", "15s Script", "30s Script", "Shot List", "Creator Notes"];

  return (
    <div className="grid gap-4">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`shrink-0 rounded-full px-3 py-2 text-xs font-bold transition ${
              activeTab === tab ? "bg-[#d8ff68] text-[#181a14]" : "bg-[#f2f4e8] text-[#626657] hover:text-[#181a14]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {activeTab === "Breakdown" ? <BreakdownGrid /> : null}
      {activeTab === "Hooks" ? <HooksResult selectedHooks={[]} toggleHook={() => undefined} compact /> : null}
      {activeTab === "15s Script" ? <ScriptCard variant={demoScriptVariants[0]} /> : null}
      {activeTab === "30s Script" ? <ScriptCard variant={demoScriptVariants[1]} /> : null}
      {activeTab === "Shot List" ? <ShotList /> : null}
      {activeTab === "Creator Notes" ? <CreatorNotes /> : null}
      <div id="export-options" className="grid gap-3 rounded-lg border border-[#181a14]/10 bg-[#f7f8ef] p-4 sm:grid-cols-4">
        {["Copy", "PDF", "DOCX", "Save"].map((item, index) => (
          <button key={item} type="button" className={index === 0 ? primaryButton : secondaryButton}>
            {index > 0 ? <LockKeyhole className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

function BreakdownGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {demoBreakdown.map(([label, value]) => (
        <div key={label} className="rounded-lg border border-[#181a14]/10 bg-[#fffffb] p-4">
          <p className={labelClass}>{label}</p>
          <p className="mt-2 text-sm leading-6 text-[#282b20]">{value}</p>
        </div>
      ))}
    </div>
  );
}

function ScriptResult({ length, tone }: { length: string; tone: string }) {
  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#d8ff68] px-3 py-1.5 text-xs font-bold text-[#181a14]">{length}</span>
        <span className="rounded-full bg-[#f2f4e8] px-3 py-1.5 text-xs font-bold text-[#626657]">{tone}</span>
      </div>
      <div className="grid gap-3">
        {demoScriptVariants.map((variant) => (
          <ScriptCard key={variant.name} variant={variant} />
        ))}
      </div>
    </div>
  );
}

function ScriptCard({ variant }: { variant: (typeof demoScriptVariants)[number] }) {
  return (
    <article className="rounded-lg border border-[#181a14]/10 bg-[#fffffb] p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="font-semibold text-[#181a14]">{variant.name}</h3>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6e7f1d]">{variant.runtime}</p>
        </div>
        <button type="button" className="rounded-full bg-[#f2f4e8] p-2 text-[#626657] hover:text-[#181a14]" aria-label="Copy script">
          <Copy className="size-4" aria-hidden="true" />
        </button>
      </div>
      <div className="grid gap-3 text-sm leading-6 text-[#282b20]">
        <p>
          <strong>Hook:</strong> {variant.hook}
        </p>
        <p>
          <strong>Voiceover:</strong> {variant.voiceover}
        </p>
        <p>
          <strong>On-screen:</strong> {variant.onScreen}
        </p>
        <p>
          <strong>CTA:</strong> {variant.cta}
        </p>
      </div>
    </article>
  );
}

function HooksResult({
  selectedHooks,
  toggleHook,
  compact = false,
}: {
  selectedHooks: string[];
  toggleHook: (hook: string) => void;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-3 lg:grid-cols-2"}>
      {demoHookGroups.map((group) => (
        <div key={group.type} className="rounded-lg border border-[#181a14]/10 bg-[#fffffb] p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className={labelClass}>{group.type}</p>
            <Target className="size-4 text-[#6e7f1d]" aria-hidden="true" />
          </div>
          <div className="grid gap-2">
            {group.hooks.map((hook) => {
              const selected = selectedHooks.includes(hook);
              return (
                <button
                  key={hook}
                  type="button"
                  className={`flex items-start gap-3 rounded-lg border p-3 text-left text-sm leading-6 transition ${
                    selected
                      ? "border-[#9ab326] bg-[#f5ffd7] text-[#181a14]"
                      : "border-[#181a14]/10 bg-[#f7f8ef] text-[#282b20] hover:border-[#9ab326]/60"
                  }`}
                  onClick={() => toggleHook(hook)}
                >
                  <span className={`mt-1 grid size-4 shrink-0 place-items-center rounded border ${selected ? "border-[#181a14] bg-[#181a14] text-[#d8ff68]" : "border-[#9da38f]"}`}>
                    {selected ? <Check className="size-3" aria-hidden="true" /> : null}
                  </span>
                  {hook}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function AnalyzerResult({ analysisMode }: { analysisMode: string }) {
  return (
    <div className="grid gap-4">
      <div className="grid gap-3 sm:grid-cols-4">
        {[
          ["Top Hooks", "12"],
          ["Angles", "7"],
          ["CTA Patterns", "4"],
          ["Mode", analysisMode],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-[#181a14]/10 bg-[#f7f8ef] p-4">
            <p className={labelClass}>{label}</p>
            <p className="mt-2 text-xl font-semibold text-[#181a14]">{value}</p>
          </div>
        ))}
      </div>
      <div className="overflow-hidden rounded-lg border border-[#181a14]/10">
        <div className="grid grid-cols-[0.7fr_0.9fr_1.4fr_1fr_0.9fr_0.8fr_1.4fr] bg-[#181a14] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#d8ff68] max-lg:hidden">
          <span>Video</span>
          <span>Hook Type</span>
          <span>Hook</span>
          <span>Angle</span>
          <span>Offer</span>
          <span>CTA</span>
          <span>Adaptation</span>
        </div>
        {demoMatrixRows.map((row) => (
          <div key={row.video} className="grid gap-3 border-b border-[#181a14]/10 p-4 text-sm last:border-b-0 lg:grid-cols-[0.7fr_0.9fr_1.4fr_1fr_0.9fr_0.8fr_1.4fr]">
            <strong className="text-[#181a14]">{row.video}</strong>
            <span>{row.hookType}</span>
            <span>{row.hook}</span>
            <span>{row.angle}</span>
            <span>{row.offer}</span>
            <span>{row.cta}</span>
            <span>{row.adaptation}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className={secondaryButton}>
          <Rows3 className="size-4" aria-hidden="true" />
          CSV
        </button>
        <button type="button" className={secondaryButton}>
          <LockKeyhole className="size-4" aria-hidden="true" />
          PDF Report
        </button>
      </div>
    </div>
  );
}

function ShotList() {
  return (
    <div className="grid gap-3">
      {demoShotList.map((shot) => (
        <div key={shot.time} className="grid gap-3 rounded-lg border border-[#181a14]/10 bg-[#fffffb] p-4 md:grid-cols-[80px_1fr]">
          <span className="font-mono text-xs font-bold text-[#6e7f1d]">{shot.time}</span>
          <div className="grid gap-2 text-sm leading-6 text-[#282b20]">
            <p>
              <strong>Visual:</strong> {shot.visual}
            </p>
            <p>
              <strong>Voiceover:</strong> {shot.voiceover}
            </p>
            <p>
              <strong>On-screen:</strong> {shot.onScreen}
            </p>
            <p>
              <strong>Creator notes:</strong> {shot.notes}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CreatorNotes() {
  const notes = [
    "Keep the delivery natural and first-person. Do not mention competitor brands.",
    "Show texture and usage clearly. Avoid exaggerated before/after claims.",
    "End with the offer in a clean, readable pack shot.",
  ];

  return (
    <div className="grid gap-3">
      {notes.map((note) => (
        <div key={note} className="flex gap-3 rounded-lg border border-[#181a14]/10 bg-[#f7f8ef] p-4 text-sm leading-6 text-[#282b20]">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#6e7f1d]" aria-hidden="true" />
          {note}
        </div>
      ))}
    </div>
  );
}

function resultCopyFor(kind: ToolPageConfig["kind"], transcriptText: string) {
  if (kind === "transcript") return transcriptText;
  if (kind === "brief") {
    return demoShotList
      .map((shot) => `${shot.time}\nVisual: ${shot.visual}\nVoiceover: ${shot.voiceover}\nOn-screen: ${shot.onScreen}`)
      .join("\n\n");
  }
  if (kind === "script") {
    return demoScriptVariants
      .map((variant) => `${variant.name} (${variant.runtime})\nHook: ${variant.hook}\nVoiceover: ${variant.voiceover}\nCTA: ${variant.cta}`)
      .join("\n\n");
  }
  if (kind === "hooks") {
    return demoHookGroups.map((group) => `${group.type}\n${group.hooks.join("\n")}`).join("\n\n");
  }
  return demoMatrixRows.map((row) => `${row.video}: ${row.hookType} - ${row.angle} - ${row.adaptation}`).join("\n");
}
