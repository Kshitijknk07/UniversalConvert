import { Router, Status } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import { SearchService } from "../services/searchService.ts";

const router = new Router();

router
  .get("/dreams/search", async (ctx) => {
    try {
      const userId = ctx.state.user.id;
      const query = ctx.request.url.searchParams.get("query") || "";

      const dreams = await SearchService.searchDreams(userId, query);

      ctx.response.body = dreams;
    } catch (error: unknown) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  })
  .get("/dreams/filter", async (ctx) => {
    try {
      const userId = ctx.state.user.id;
      const type = ctx.request.url.searchParams.get("type") || undefined;
      const dateRange =
        ctx.request.url.searchParams.get("dateRange") || undefined;
      const emotion = ctx.request.url.searchParams.get("emotion") || undefined;

      const dreams = await SearchService.filterDreams(
        userId,
        type,
        dateRange,
        emotion
      );

      ctx.response.body = dreams;
    } catch (error: unknown) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  });

export default router;
