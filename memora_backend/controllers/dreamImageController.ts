import { Router, Status } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import { ImageGenerationService } from "../services/imageGenerationService.ts";
import { DreamService } from "../services/dreamService.ts";

const router = new Router();

router
  .post("/dreams/:id/generate-image", async (ctx) => {
    try {
      const { id } = ctx.params;
      const dream = await DreamService.getDreamById(id);

      if (!dream) {
        ctx.response.status = Status.NotFound;
        ctx.response.body = { error: "Dream not found" };
        return;
      }

      const prompt = `Dream scene: ${dream.description}`;

      const dreamImage = await ImageGenerationService.generateImage(id, prompt);

      ctx.response.status = Status.Created;
      ctx.response.body = dreamImage;
    } catch (error: unknown) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  })
  .get("/dreams/:id/image", async (ctx) => {
    try {
      const { id } = ctx.params;
      const dreamImage = await ImageGenerationService.getDreamImage(id);

      if (!dreamImage) {
        ctx.response.status = Status.NotFound;
        ctx.response.body = { error: "Dream image not found" };
        return;
      }

      ctx.response.body = dreamImage;
    } catch (error: unknown) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  });

export default router;
