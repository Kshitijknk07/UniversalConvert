import { Router, Status } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import { AdminService } from "../services/adminService.ts";

const router = new Router();

router.delete("/community/dreams/:id", async (ctx) => {
  try {
    const userId = ctx.state.user.id;
    const isAdmin = await AdminService.isAdmin(userId);

    if (!isAdmin) {
      ctx.response.status = Status.Forbidden;
      ctx.response.body = { error: "Unauthorized access" };
      return;
    }

    const { id } = ctx.params;
    await AdminService.removeDream(id, userId);

    ctx.response.status = Status.OK;
    ctx.response.body = { message: "Dream removed successfully" };
  } catch (error: unknown) {
    ctx.response.status = Status.InternalServerError;
    ctx.response.body = {
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
});

export default router;
