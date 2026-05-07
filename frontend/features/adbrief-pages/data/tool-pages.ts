import type { ToolPageConfig } from "../types";

export const toolPages: ToolPageConfig[] = [
  {
    kind: "transcript",
    path: "/tiktok-transcript-generator",
    navLabel: "Transcript",
    eyebrow: "Free TikTok tool",
    headline: "Free TikTok Transcript Generator",
    subheadline:
      "Paste a public TikTok video URL and extract spoken words, on-screen text, timestamps, and a clean copyable transcript.",
    primaryCta: "Extract Transcript",
    secondaryCta: {
      label: "Create UGC Brief",
      href: "/ugc-brief-generator",
    },
    seo: {
      title: "Free TikTok Transcript Generator | AdBrief AI",
      description:
        "Extract TikTok transcripts, timestamps, on-screen text, word count, and language from public videos, then turn the transcript into a UGC brief.",
      keywords: [
        "tiktok transcript generator",
        "tiktok transcript",
        "extract tiktok transcript",
      ],
    },
    workspaceTitle: "Transcript workspace",
    workspaceCopy:
      "Use the transcript as raw material for hook analysis, angle mapping, and creator-ready UGC briefs.",
    conversionCta: {
      title: "Turn this transcript into a UGC brief",
      copy: "Keep the structure, rewrite the message for your product, and hand a creator something they can shoot.",
      label: "Create UGC Brief",
      href: "/ugc-brief-generator",
    },
    howItWorks: [
      {
        title: "Paste a public TikTok URL",
        copy: "Start with a competitor ad, TikTok Shop clip, or creator video you want to study.",
      },
      {
        title: "Extract the text layer",
        copy: "Review spoken transcript, timestamps, screen text, duration, language, and word count.",
      },
      {
        title: "Move into creative strategy",
        copy: "Use the transcript to generate hooks, scripts, shot lists, and a full UGC brief.",
      },
    ],
    useCases: [
      {
        title: "TikTok Shop sellers",
        copy: "Understand what a competitor video says before rewriting the structure for your own product.",
      },
      {
        title: "Media buyers",
        copy: "Pull transcript details from videos before mapping hooks, claims, pacing, and CTA patterns.",
      },
      {
        title: "UGC creators",
        copy: "Use timestamped text to prepare clean scripts and client-facing content references.",
      },
    ],
    faqs: [
      {
        question: "Does this download TikTok videos?",
        answer:
          "No. AdBrief AI focuses on extracting and analyzing text so you can create original briefs.",
      },
      {
        question: "Can I use the output as final ad copy?",
        answer:
          "Use it as source material. Always rewrite, review claims, and make sure the final script fits your brand and platform policy.",
      },
      {
        question: "What happens if a video has no speech?",
        answer:
          "The workflow can still use on-screen text or a pasted transcript as a fallback.",
      },
    ],
  },
  {
    kind: "brief",
    path: "/ugc-brief-generator",
    navLabel: "UGC Brief",
    eyebrow: "Core generator",
    headline: "Turn Competitor TikToks into UGC Ad Briefs",
    subheadline:
      "Paste a TikTok URL, add your product, and get hooks, angles, scripts, shot lists, and creator-ready instructions in seconds.",
    primaryCta: "Generate UGC Brief",
    seo: {
      title: "UGC Brief Generator for TikTok Ads | AdBrief AI",
      description:
        "Create creator-ready UGC ad briefs from competitor TikTok structures, including hooks, angles, 15s and 30s scripts, shot lists, and CTA variants.",
      keywords: [
        "ugc brief generator",
        "tiktok ugc brief",
        "creator brief generator",
      ],
    },
    workspaceTitle: "Brief generation workspace",
    workspaceCopy:
      "Analyze the competitor structure, then rewrite it into a product-specific brief that a creator can actually shoot.",
    conversionCta: {
      title: "Save and export your next brief",
      copy: "Export options become the natural paywall once the generated brief is useful.",
      label: "View export options",
      href: "#export-options",
    },
    howItWorks: [
      {
        title: "Analyze the competitor structure",
        copy: "Break down the hook, pain point, promise, proof, offer, CTA, and pacing.",
      },
      {
        title: "Add your product context",
        copy: "Bring in benefits, audience, offer, and claims to avoid before the rewrite.",
      },
      {
        title: "Generate a shootable brief",
        copy: "Get hook variants, 15s and 30s scripts, shot-by-shot direction, and creator notes.",
      },
    ],
    useCases: [
      {
        title: "Small ecommerce teams",
        copy: "Go from competitor inspiration to a clear creator brief without a creative strategist.",
      },
      {
        title: "DTC growth teams",
        copy: "Turn winning structures into testable angles while avoiding copycat ads.",
      },
      {
        title: "UGC agencies",
        copy: "Deliver structured concepts, scripts, and shot lists that clients can approve quickly.",
      },
    ],
    faqs: [
      {
        question: "Does it copy competitor videos?",
        answer:
          "No. It analyzes structure and generates original creative directions for your own product.",
      },
      {
        question: "What product details do I need?",
        answer:
          "For MVP-level output, product name, description, key benefits, target audience, and offer are enough.",
      },
      {
        question: "Can the brief include claims?",
        answer:
          "Yes, but claims should be reviewed for brand accuracy, evidence, and platform compliance before publishing.",
      },
    ],
  },
  {
    kind: "script",
    path: "/tiktok-ad-script-generator",
    navLabel: "Scripts",
    eyebrow: "Ad script tool",
    headline: "TikTok Ad Script Generator",
    subheadline:
      "Turn product details and proven short-form structures into test-ready TikTok ad scripts with hooks, voiceover, on-screen text, and CTA variants.",
    primaryCta: "Generate Ad Scripts",
    secondaryCta: {
      label: "Build Full Brief",
      href: "/ugc-brief-generator",
    },
    seo: {
      title: "TikTok Ad Script Generator | AdBrief AI",
      description:
        "Generate TikTok ad scripts for ecommerce and UGC campaigns, including hooks, voiceover, on-screen text, CTA variants, and 15s or 30s formats.",
      keywords: [
        "tiktok ad script generator",
        "tiktok script generator",
        "ugc ad script",
      ],
    },
    workspaceTitle: "Script generation workspace",
    workspaceCopy:
      "Use this as the fast script layer, then expand the strongest variant into a full UGC brief.",
    conversionCta: {
      title: "Turn a script into a full creator brief",
      copy: "Add shot direction, b-roll notes, do/don't guidance, and export-ready creator instructions.",
      label: "Generate UGC Brief",
      href: "/ugc-brief-generator",
    },
    howItWorks: [
      {
        title: "Describe your product",
        copy: "Add the offer, buyer, core benefit, and any competitor structure you want to learn from.",
      },
      {
        title: "Choose the ad format",
        copy: "Generate 15s, 30s, or 45s scripts in UGC review, founder, demo, or problem-solution style.",
      },
      {
        title: "Expand what works",
        copy: "Move the best script into a brief when you need scene direction and creator delivery notes.",
      },
    ],
    useCases: [
      {
        title: "Weekly creative testing",
        copy: "Generate new script variants before creative fatigue slows account performance.",
      },
      {
        title: "Creator direction",
        copy: "Give creators a clean voiceover path without forcing a word-for-word performance.",
      },
      {
        title: "Offer testing",
        copy: "Compare CTA and offer phrasing across multiple angles before production.",
      },
    ],
    faqs: [
      {
        question: "Is this different from a normal script generator?",
        answer:
          "Yes. The script is tied to ad structure, hook logic, offer framing, and UGC production needs.",
      },
      {
        question: "Can I generate multiple lengths?",
        answer:
          "The MVP interface supports 15s, 30s, and 45s script formats as selectable options.",
      },
      {
        question: "Should creators read scripts exactly?",
        answer:
          "Usually no. Treat scripts as structured guidance and let creators keep a natural delivery.",
      },
    ],
  },
  {
    kind: "hooks",
    path: "/tiktok-hook-generator",
    navLabel: "Hooks",
    eyebrow: "Hook testing tool",
    headline: "TikTok Hook Generator",
    subheadline:
      "Generate pain point, contrarian, curiosity, social proof, how-to, and listicle hooks from a TikTok URL or product description.",
    primaryCta: "Generate Hooks",
    secondaryCta: {
      label: "Turn Hooks Into Brief",
      href: "/ugc-brief-generator",
    },
    seo: {
      title: "TikTok Hook Generator for UGC Ads | AdBrief AI",
      description:
        "Generate TikTok hooks by type for UGC ads, ecommerce offers, and short-form creative testing, then turn selected hooks into a full brief.",
      keywords: [
        "tiktok hook generator",
        "ugc hooks",
        "ad hook generator",
      ],
    },
    workspaceTitle: "Hook generation workspace",
    workspaceCopy:
      "Use hook groups to quickly compare creative angles before expanding the strongest idea into scripts or briefs.",
    conversionCta: {
      title: "Turn selected hooks into a full UGC brief",
      copy: "Keep the hook direction and add product-specific scenes, voiceover, on-screen text, and creator notes.",
      label: "Create Full Brief",
      href: "/ugc-brief-generator",
    },
    howItWorks: [
      {
        title: "Start from product or URL",
        copy: "Use your own product details or a competitor TikTok structure as the source.",
      },
      {
        title: "Generate by hook type",
        copy: "Compare pain point, contrarian, curiosity, social proof, how-to, mistake, and listicle options.",
      },
      {
        title: "Select winners",
        copy: "Move the best hooks into script generation or a creator-ready UGC brief.",
      },
    ],
    useCases: [
      {
        title: "Rapid angle testing",
        copy: "Find several first-three-second concepts before writing full ads.",
      },
      {
        title: "Creative meetings",
        copy: "Give teams a structured hook board instead of scattered one-off ideas.",
      },
      {
        title: "UGC creator briefs",
        copy: "Offer creators multiple natural openings without locking them into one script.",
      },
    ],
    faqs: [
      {
        question: "How many hook types are supported?",
        answer:
          "The page groups hooks by common UGC ad patterns like pain point, contrarian, problem/solution, curiosity, and social proof.",
      },
      {
        question: "Can I use a competitor hook?",
        answer:
          "Use competitor hooks as structural input only. The generated output should be original and product-specific.",
      },
      {
        question: "Where should hooks go next?",
        answer:
          "The strongest hook should become the opening scene of a 15s or 30s UGC script.",
      },
    ],
  },
  {
    kind: "analyzer",
    path: "/tiktok-ad-analyzer",
    navLabel: "Analyzer",
    eyebrow: "Pro creative intelligence",
    headline: "Analyze Winning TikTok Ads at Scale",
    subheadline:
      "Uncover hooks, angles, offers, pacing, creator patterns, and creative opportunities across competitor TikTok ads.",
    primaryCta: "Start Analyzing Free",
    secondaryCta: {
      label: "Generate Brief",
      href: "/ugc-brief-generator",
    },
    seo: {
      title: "TikTok Ad Analyzer for Hooks, Angles, and CTAs | AdBrief AI",
      description:
        "Analyze TikTok ad structures, hook types, selling angles, offers, CTAs, and creative opportunities for ecommerce and agency teams.",
      keywords: [
        "tiktok ad analyzer",
        "tiktok competitor analysis",
        "ad creative analysis",
      ],
    },
    workspaceTitle: "Creative analysis workspace",
    workspaceCopy:
      "Map individual videos into a Hook / Angle Matrix before deciding which ideas deserve scripts or full briefs.",
    conversionCta: {
      title: "Upgrade for batch reports",
      copy: "Batch import, CSV/PDF reports, saved projects, and agency-ready summaries become Pro workflows.",
      label: "Create Pro Report",
      href: "/ugc-brief-generator",
    },
    howItWorks: [
      {
        title: "Import one or many URLs",
        copy: "Analyze a single ad for free or batch competitor videos for Pro-style creative planning.",
      },
      {
        title: "Extract creative patterns",
        copy: "Identify hook types, angles, offers, CTAs, objections, proof, and pacing.",
      },
      {
        title: "Convert opportunities",
        copy: "Choose the best angles and generate original scripts or briefs for your product.",
      },
    ],
    useCases: [
      {
        title: "Media buyers",
        copy: "Build weekly creative testing plans around real hook and angle patterns.",
      },
      {
        title: "DTC growth teams",
        copy: "Spot repeatable creative structures without copying competitor assets.",
      },
      {
        title: "UGC agencies",
        copy: "Turn competitor research into report-ready client strategy.",
      },
    ],
    faqs: [
      {
        question: "Is batch analysis part of Free?",
        answer:
          "The page previews the batch workflow, while full batch reports are a Pro or Agency value path.",
      },
      {
        question: "Does the analyzer claim ads are winning?",
        answer:
          "No. It analyzes visible creative structure and uses careful language such as likely, appears to, or suggests.",
      },
      {
        question: "Can reports be exported?",
        answer:
          "CSV and PDF export are represented in the MVP UI and are intended as paid workflow features.",
      },
    ],
  },
];

export function getToolPage(kind: ToolPageConfig["kind"]) {
  const page = toolPages.find((item) => item.kind === kind);

  if (!page) {
    throw new Error(`Unknown tool page: ${kind}`);
  }

  return page;
}
