// deno-lint-ignore-file
import { Router, Status } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import { LucidTrainingService } from "../services/lucidTrainingService.ts";
import { DreamService } from "../services/dreamService.ts";

const router = new Router();

router
  .get("/lucid-training/tips", async (ctx) => {
    try {
      const userId = ctx.state.user.id;
      const stats = await DreamService.getUserDreamStats(userId);

      const tips = await LucidTrainingService.generatePersonalizedTips({
        lucidDreams: stats.lucidCount,
        totalDreams: stats.totalCount,
        lastLucidDate: stats.lastLucidDate,
      });

      ctx.response.body = { tips };
    } catch (error: unknown) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  })
  .get("/lucid-training/progress", async (ctx) => {
    try {
      const userId = ctx.state.user.id;
      const dreams = await DreamService.getUserDreamStats(userId);

      const progress = await LucidTrainingService.analyzeLucidityProgress(
        dreams.map((dream: { date: any; type: string; description: any }) => ({
          date: dream.date,
          isLucid: dream.type === "lucid",
          description: dream.description,
        }))
      );

      ctx.response.body = { progress };
    } catch (error: unknown) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  })
  .get("/lucid-training/techniques", async (ctx) => {
    try {
      const userId = ctx.state.user.id;
      const stats = await DreamService.getUserDreamStats(userId);

      let userLevel: "beginner" | "intermediate" | "advanced";
      if (stats.lucidCount < 5) userLevel = "beginner";
      else if (stats.lucidCount < 20) userLevel = "intermediate";
      else userLevel = "advanced";

      const techniques = await LucidTrainingService.suggestTechniques(
        userLevel
      );

      ctx.response.body = { techniques };
    } catch (error: unknown) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  });

export default router;
