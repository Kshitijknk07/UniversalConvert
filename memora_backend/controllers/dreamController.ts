import { Router, Status } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import { DreamService } from "../services/dreamService.ts";
import { CreateDreamDto } from "../models/dream.ts";

const router = new Router();

router
  .post("/dreams", async (ctx) => {
    try {
      const createDreamDto = (await ctx.request.body.json()) as CreateDreamDto;
      const userId = ctx.state.user.id;

      const dream = await DreamService.createDream(userId, createDreamDto);
      ctx.response.status = Status.Created;
      ctx.response.body = dream;
    } catch (error: unknown) {
      ctx.response.status = Status.BadRequest;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  })
  .get("/dreams/:id", async (ctx) => {
    try {
      const { id } = ctx.params;
      const dream = await DreamService.getDreamById(id);

      if (!dream) {
        ctx.response.status = Status.NotFound;
        ctx.response.body = { error: "Dream not found" };
        return;
      }

      ctx.response.body = dream;
    } catch (error: unknown) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  })
  .get("/dreams/user/:userId", async (ctx) => {
    try {
      const { userId } = ctx.params;
      const dreams = await DreamService.getDreamsByUserId(userId);
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
