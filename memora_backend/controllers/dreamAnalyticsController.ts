import { Router, Status } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import { DreamAnalyticsService } from "../services/dreamAnalyticsService.ts";

const router = new Router();

router.get("/dreams/:userId/analytics", async (ctx) => {
  try {
    const { userId } = ctx.params;

    const analytics = await DreamAnalyticsService.generateDreamInsights(userId);

    ctx.response.body = analytics;
  } catch (error: unknown) {
    ctx.response.status = Status.InternalServerError;
    ctx.response.body = {
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
});

export default router;
