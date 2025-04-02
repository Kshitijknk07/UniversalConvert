import { Router, Status } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import { LucidDreamService } from "../services/lucidDreamService.ts";

const router = new Router();

router
  .get("/lucid-dreams/:userId", async (ctx) => {
    try {
      const { userId } = ctx.params;
      const stats = await LucidDreamService.getLucidDreamStats(userId);

      ctx.response.body = stats;
    } catch (error: unknown) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  })
  .post("/lucid-dreams/tips", async (ctx) => {
    try {
      const { userId } = await ctx.request.body.json();

      const stats = await LucidDreamService.getLucidDreamStats(userId);
      const tips = await LucidDreamService.generateLucidDreamingTips(stats);

      ctx.response.body = tips;
    } catch (error: unknown) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  });

export default router;
