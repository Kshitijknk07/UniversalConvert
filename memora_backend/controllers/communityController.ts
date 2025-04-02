import { Router, Status } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import { CommunityService } from "../services/communityService.ts";
import {
  CreateSharedDreamDto,
  CreateCommentDto,
} from "../models/communityDream.ts";

const router = new Router();

router
  .post("/community/dreams", async (ctx) => {
    try {
      const userId = ctx.state.user.id; 
      const createDreamDto =
        (await ctx.request.body.json()) as CreateSharedDreamDto;

      const sharedDream = await CommunityService.shareDream(
        userId,
        createDreamDto
      );

      ctx.response.status = Status.Created;
      ctx.response.body = sharedDream;
    } catch (error: unknown) {
      ctx.response.status = Status.BadRequest;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  })
  .get("/community/dreams", async (ctx) => {
    try {
      const page = Number(ctx.request.url.searchParams.get("page")) || 1;
      const limit = Number(ctx.request.url.searchParams.get("limit")) || 10;

      const dreams = await CommunityService.getSharedDreams(page, limit);

      ctx.response.body = dreams;
    } catch (error: unknown) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  })
  .post("/community/dreams/:id/like", async (ctx) => {
    try {
      const { id } = ctx.params;
      const userId = ctx.state.user.id;

      await CommunityService.likeDream(id, userId);

      ctx.response.status = Status.OK;
      ctx.response.body = { message: "Dream liked successfully" };
    } catch (error: unknown) {
      ctx.response.status = Status.BadRequest;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  })
  .post("/community/dreams/:id/comment", async (ctx) => {
    try {
      const { id } = ctx.params;
      const userId = ctx.state.user.id;
      const commentDto = (await ctx.request.body.json()) as CreateCommentDto;

      const comment = await CommunityService.addComment(id, userId, commentDto);

      ctx.response.status = Status.Created;
      ctx.response.body = comment;
    } catch (error: unknown) {
      ctx.response.status = Status.BadRequest;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  })
  .get("/community/dreams/:id/comments", async (ctx) => {
    try {
      const { id } = ctx.params;
      const page = Number(ctx.request.url.searchParams.get("page")) || 1;
      const limit = Number(ctx.request.url.searchParams.get("limit")) || 10;

      const comments = await CommunityService.getDreamComments(id, page, limit);

      ctx.response.body = comments;
    } catch (error: unknown) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  });

export default router;
