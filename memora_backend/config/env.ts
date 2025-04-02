export const config = {
  STABILITY_API_KEY: Deno.env.get("STABILITY_API_KEY") || "",
  STABILITY_API_URL:
    Deno.env.get("STABILITY_API_URL") ||
    "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image",
};
