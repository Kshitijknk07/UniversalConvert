import { Application } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import userRouter from "./controllers/userController.ts";
import searchRouter from "./controllers/searchController.ts";
import adminRouter from "./controllers/adminController.ts";

const app = new Application();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.use(searchRouter.routes());
app.use(searchRouter.allowedMethods());
app.use(adminRouter.routes());
app.use(adminRouter.allowedMethods());

const port = 8000;
console.log(`Server running on http://localhost:${port}`);
await app.listen({ port });
