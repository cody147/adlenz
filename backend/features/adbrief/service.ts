import type { ProductInput, TikTokVideoInput, UGCBrief } from "./types";

export async function generateUGCBriefDemo(
  video: TikTokVideoInput,
  product: ProductInput,
): Promise<UGCBrief> {
  if (!video.url && !video.pastedTranscript) {
    throw new Error("A TikTok URL or pasted transcript is required.");
  }

  if (!product.name || !product.description) {
    throw new Error("Product name and description are required.");
  }

  return {
    campaignObjective: `Create a UGC ad brief for ${product.name}.`,
    targetAudience: product.targetAudience,
    competitorBreakdown: {
      hook: "Your skin should not feel tight after cleansing.",
      hookType: "Pain point",
      painPoint: "The buyer feels dry or stripped after washing.",
      targetAudience: product.targetAudience,
      sellingAngle: "Gentle routine reset",
      productPromise: product.keyBenefits.join(", "),
      proof: "Creator first-person routine demonstration.",
      offer: product.offer ?? "Try the first-order offer.",
      cta: "Try it tonight.",
      objectionHandling: "Gentle does not mean ineffective.",
      videoStructure: ["Hook", "Problem", "Texture demo", "Routine proof", "CTA"],
      whyItWorks:
        "The structure names a common routine frustration, then shows a simple product-led fix.",
    },
    productAngle: `${product.name} as the gentler daily routine upgrade.`,
    hookVariants: [
      "Your skin should not feel tight after cleansing.",
      "A stronger cleanser is not always a better cleanser.",
      "Try this 10-second test after washing your face.",
    ],
    script15s:
      "Your face should not feel tight after cleansing. I switched to a softer foam that still removes daily buildup. Clean, not stripped. Try it tonight.",
    script30s:
      "This is the cleanser test nobody talks about. After rinsing, wait ten seconds. If your skin feels tight, your cleanser may be overdoing it. This formula keeps the fresh feeling without the rough finish.",
    shotList: [
      {
        time: "0-3s",
        visual: "Creator pauses after rinsing near sink.",
        voiceover: "Your face should not feel tight after cleansing.",
        onScreenText: "Tight after washing?",
        creatorNotes: "Keep delivery natural and close to camera.",
      },
      {
        time: "3-8s",
        visual: "Texture demo in palm with slow lather.",
        voiceover: "I switched to a softer foam that still removes daily buildup.",
        onScreenText: "Soft foam + daily clean",
        creatorNotes: "Show product texture clearly.",
      },
    ],
    creatorInstructions: [
      "Use natural bathroom or vanity lighting.",
      "Do not mention competitor brands.",
      "Avoid exaggerated before/after claims.",
    ],
    doDont: {
      do: ["Show texture", "Keep CTA readable", "Use first-person delivery"],
      dont: ["Copy competitor phrasing", "Make medical claims", "Overpromise results"],
    },
    ctaVariants: ["Try it tonight", "Shop the first-routine offer", "Start with the intro bundle"],
  };
}
