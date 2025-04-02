import { Router, Status } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import { UserService } from "../services/userService.ts";
import { CreateUserDto, UpdateUserDto } from "../models/user.ts";

const router = new Router();

router
  .post("/users", async (ctx) => {
    try {
      const createUserDto = (await ctx.request.body.json()) as CreateUserDto;

      const user = await UserService.createUser(createUserDto);
      ctx.response.status = Status.Created;
      ctx.response.body = user;
    } catch (error: unknown) {
      ctx.response.status = Status.BadRequest;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  })
  .get("/users/:id", async (ctx) => {
    const { id } = ctx.params;
    const user = await UserService.getUserById(id);

    if (!user) {
      ctx.response.status = Status.NotFound;
      ctx.response.body = { error: "User not found" };
      return;
    }

    ctx.response.body = user;
  })
  .patch("/users/:id", async (ctx) => {
    try {
      const { id } = ctx.params;
      const updateUserDto = (await ctx.request.body.json()) as UpdateUserDto;

      const user = await UserService.updateUser(id, updateUserDto);

      if (!user) {
        ctx.response.status = Status.NotFound;
        ctx.response.body = { error: "User not found" };
        return;
      }

      ctx.response.body = user;
    } catch (error: unknown) {
      ctx.response.status = Status.BadRequest;
      ctx.response.body = {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  });

export default router;
