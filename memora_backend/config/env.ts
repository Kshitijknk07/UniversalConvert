export const config = {
  STABILITY_API_KEY: Deno.env.get("STABILITY_API_KEY") || "",
  STABILITY_API_URL:
    Deno.env.get("STABILITY_API_URL") ||
    "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image",
  GEMINI_API_KEY:
    Deno.env.get("GEMINI_API_KEY") || "AIzaSyASsILxHwd1C18szDKYFsEGCvXivwA_Brk",
  GEMINI_API_URL:
    Deno.env.get("GEMINI_API_URL") ||
    "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent",
};
