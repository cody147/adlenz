import type {
  DemoHookGroup,
  DemoMatrixRow,
  DemoScriptVariant,
  DemoShot,
  DemoTranscriptLine,
} from "../types";

export const demoTranscript: DemoTranscriptLine[] = [
  {
    time: "00:00",
    speaker: "Creator",
    text: "If your skin feels tight after cleansing, your cleanser may be doing too much.",
  },
  {
    time: "00:04",
    speaker: "Creator",
    text: "I switched to a softer foam that still gets sunscreen and makeup off.",
  },
  {
    time: "00:09",
    speaker: "Creator",
    text: "The difference is that my face feels clean, not stripped.",
  },
  {
    time: "00:15",
    speaker: "Creator",
    text: "If you want a calmer routine, try this before your moisturizer tonight.",
  },
];

export const demoOnScreenText = [
  "Your cleanser might be too harsh",
  "Soft foam, no tight feeling",
  "Clean skin without the reset drama",
  "Try it tonight",
];

export const demoBreakdown = [
  ["Hook", "Names a familiar post-cleanse frustration in the first second."],
  ["Hook Type", "Pain point / routine mistake"],
  ["Audience", "Skincare buyers with sensitive or dry-feeling skin."],
  ["Angle", "Gentle reset without sacrificing a clean finish."],
  ["Promise", "Remove daily buildup while keeping skin comfortable."],
  ["Proof", "Creator first-person routine switch and tactile reaction."],
  ["CTA", "Try it tonight before your moisturizer."],
];

export const demoScriptVariants: DemoScriptVariant[] = [
  {
    name: "Routine Reset",
    runtime: "15s",
    hook: "Your face should not feel tight after cleansing.",
    voiceover:
      "I changed one step in my night routine: a soft foam that gets everything off without leaving that dry pull.",
    onScreen: "Clean, not stripped",
    cta: "Try the gentle reset tonight.",
  },
  {
    name: "Problem/Solution",
    runtime: "30s",
    hook: "This is the cleanser test nobody talks about.",
    voiceover:
      "After rinsing, wait ten seconds. If your skin feels tight, your cleanser may be overdoing it. This formula keeps the fresh feeling without the rough finish.",
    onScreen: "The 10-second cleanser test",
    cta: "Shop the first-routine offer.",
  },
  {
    name: "Creator Review",
    runtime: "30s",
    hook: "I wanted the clean feeling without the squeaky feeling.",
    voiceover:
      "This became my easy night routine because it removes sunscreen, feels soft while I massage it in, and my skin is ready for moisturizer right after.",
    onScreen: "Soft foam nightly cleanse",
    cta: "Start with the intro bundle.",
  },
];

export const demoHookGroups: DemoHookGroup[] = [
  {
    type: "Pain Point",
    hooks: [
      "Your skin should not feel tight after you wash it.",
      "If cleansing burns a little, this routine check is for you.",
      "That squeaky-clean feeling may be the problem.",
    ],
  },
  {
    type: "Contrarian",
    hooks: [
      "A stronger cleanser is not always a better cleanser.",
      "Stop chasing the deepest clean and start checking the finish.",
      "Your face does not need a reset that feels like punishment.",
    ],
  },
  {
    type: "Problem / Solution",
    hooks: [
      "If your cleanser leaves your face tight, swap the texture first.",
      "One routine change helped my skin feel calmer at night.",
      "The easiest skincare upgrade is the step you already do.",
    ],
  },
  {
    type: "Curiosity",
    hooks: [
      "Try this 10-second test after washing your face.",
      "I did not change my whole routine, just this one step.",
      "This is why my skin stopped feeling dry after cleansing.",
    ],
  },
  {
    type: "Social Proof",
    hooks: [
      "I thought gentle meant weak until I tried this.",
      "This is the cleanser I keep next to my sink now.",
      "I finally get the hype around soft-foam cleansers.",
    ],
  },
];

export const demoShotList: DemoShot[] = [
  {
    time: "0-3s",
    visual: "Creator holds current cleanser near sink, then pauses after rinsing.",
    voiceover: "Your face should not feel tight after cleansing.",
    onScreen: "Tight after washing?",
    notes: "Film close, natural bathroom light, no heavy beauty filter.",
  },
  {
    time: "3-8s",
    visual: "Texture demo in palm, slow lather, quick water rinse.",
    voiceover: "I switched to a softer foam that still removes daily buildup.",
    onScreen: "Soft foam + daily clean",
    notes: "Capture texture clearly; keep hand movement slow.",
  },
  {
    time: "8-14s",
    visual: "Creator taps cheek, applies moisturizer comfortably.",
    voiceover: "My skin feels clean, not stripped, so the rest of my routine sits better.",
    onScreen: "Clean, not stripped",
    notes: "Show real reaction, not exaggerated surprise.",
  },
  {
    time: "14-18s",
    visual: "Product on counter with offer card beside it.",
    voiceover: "Try it tonight with the first-routine offer.",
    onScreen: "Try it tonight",
    notes: "End with clean pack shot and readable CTA.",
  },
];

export const demoMatrixRows: DemoMatrixRow[] = [
  {
    video: "Video A",
    hookType: "Pain Point",
    hook: "Your skin is begging for a reset.",
    angle: "Gentle reset",
    offer: "20% first order",
    cta: "Try it tonight",
    adaptation: "Use for sensitive-skin cleanser angle.",
  },
  {
    video: "Video B",
    hookType: "Mistake",
    hook: "Stop doing this after sunscreen.",
    angle: "Routine correction",
    offer: "Starter bundle",
    cta: "Shop the set",
    adaptation: "Adapt to SPF-removal proof scene.",
  },
  {
    video: "Video C",
    hookType: "Social Proof",
    hook: "I get why everyone keeps this by the sink.",
    angle: "Everyday habit",
    offer: "Subscribe and save",
    cta: "Make it your nightly step",
    adaptation: "Use for creator habit testimonial.",
  },
];
