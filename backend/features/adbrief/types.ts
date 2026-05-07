export type TikTokVideoInput = {
  url: string;
  pastedTranscript?: string;
};

export type ProductInput = {
  name: string;
  description: string;
  keyBenefits: string[];
  targetAudience: string;
  offer?: string;
  claimsToAvoid?: string[];
};

export type TranscriptLine = {
  start: number;
  end: number;
  speaker?: string;
  text: string;
};

export type AdBreakdown = {
  hook: string;
  hookType: string;
  painPoint: string;
  targetAudience: string;
  sellingAngle: string;
  productPromise: string;
  proof: string;
  offer: string;
  cta: string;
  objectionHandling: string;
  videoStructure: string[];
  whyItWorks: string;
};

export type BriefScene = {
  time: string;
  visual: string;
  voiceover: string;
  onScreenText: string;
  creatorNotes: string;
};

export type UGCBrief = {
  campaignObjective: string;
  targetAudience: string;
  competitorBreakdown: AdBreakdown;
  productAngle: string;
  hookVariants: string[];
  script15s: string;
  script30s: string;
  shotList: BriefScene[];
  creatorInstructions: string[];
  doDont: {
    do: string[];
    dont: string[];
  };
  ctaVariants: string[];
};
