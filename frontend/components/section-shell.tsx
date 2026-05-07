import type { ReactNode } from "react";

type SectionShellProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  children: ReactNode;
};

export function SectionShell({ eyebrow, title, copy, children }: SectionShellProps) {
  return (
    <section className="border-t border-[#181a14]/10 bg-[#fbfaf3] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-9 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#6e7f1d]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-[#181a14] sm:text-4xl">
            {title}
          </h2>
          {copy ? <p className="mt-4 text-base leading-7 text-[#626657]">{copy}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
