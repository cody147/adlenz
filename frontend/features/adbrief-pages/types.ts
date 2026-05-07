export type ToolPageKind =
  | "transcript"
  | "brief"
  | "script"
  | "hooks"
  | "analyzer";

export type FaqItem = {
  question: string;
  answer: string;
};

export type HowItWorksStep = {
  title: string;
  copy: string;
};

export type UseCase = {
  title: string;
  copy: string;
};

export type DemoTranscriptLine = {
  time: string;
  speaker: string;
  text: string;
};

export type DemoScriptVariant = {
  name: string;
  runtime: string;
  hook: string;
  voiceover: string;
  onScreen: string;
  cta: string;
};

export type DemoHookGroup = {
  type: string;
  hooks: string[];
};

export type DemoShot = {
  time: string;
  visual: string;
  voiceover: string;
  onScreen: string;
  notes: string;
};

export type DemoMatrixRow = {
  video: string;
  hookType: string;
  hook: string;
  angle: string;
  offer: string;
  cta: string;
  adaptation: string;
};

export type ToolPageConfig = {
  kind: ToolPageKind;
  path: string;
  navLabel: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta?: {
    label: string;
    href: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  workspaceTitle: string;
  workspaceCopy: string;
  conversionCta: {
    title: string;
    copy: string;
    label: string;
    href: string;
  };
  howItWorks: HowItWorksStep[];
  useCases: UseCase[];
  faqs: FaqItem[];
};
