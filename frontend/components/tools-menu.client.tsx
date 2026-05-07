"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, FileText, LineChart, MessageSquareQuote, ScrollText } from "lucide-react";
import type { ToolPageConfig } from "@/frontend/features/adbrief-pages/types";

type ToolsMenuProps = {
  tools: ToolPageConfig[];
};

const toolIcons: Partial<Record<ToolPageConfig["kind"], typeof ScrollText>> = {
  transcript: ScrollText,
  hooks: MessageSquareQuote,
  script: FileText,
  analyzer: LineChart,
};

export function ToolsMenu({ tools }: ToolsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#505346] transition hover:bg-[#eef0df] hover:text-[#181a14]"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        onClick={() => setIsOpen((value) => !value)}
      >
        Tools
        <ChevronDown className={`size-4 transition ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      {isOpen ? (
        <div className="absolute left-1/2 top-12 z-50 w-[min(92vw,560px)] -translate-x-1/2 rounded-xl border border-[#181a14]/10 bg-[#fffffb] p-3 text-left shadow-[0_24px_80px_rgba(24,26,20,0.18)]">
          <div className="mb-2 px-2 py-1">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6e7f1d]">
              Tool entrances
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {tools.map((tool) => {
              const Icon = toolIcons[tool.kind] ?? FileText;

              return (
                <Link
                  key={tool.path}
                  href={tool.path}
                  className="group rounded-lg border border-[#181a14]/10 bg-[#f7f8ef] p-4 transition hover:-translate-y-0.5 hover:border-[#9ab326]/60 hover:bg-[#fbfaf3]"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="mb-3 grid size-9 place-items-center rounded-lg bg-[#181a14] text-[#d8ff68]">
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-[#181a14]">{tool.headline}</p>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#626657]">
                    {tool.subheadline}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
