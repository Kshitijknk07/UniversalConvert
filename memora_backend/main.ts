import { Application } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import { connectDB } from "./config/database.ts";
import userRouter from "./controllers/userController.ts";
import searchRouter from "./controllers/searchController.ts";
import adminRouter from "./controllers/adminController.ts";
import lucidTrainingRouter from "./controllers/lucidTrainingController.ts";
import dreamRouter from "./controllers/dreamController.ts";
import dreamImageRouter from "./controllers/dreamImageController.ts";
import lucidDreamRouter from "./controllers/lucidDreamController.ts";
import dreamAnalyticsRouter from "./controllers/dreamAnalyticsController.ts";
import communityRouter from "./controllers/communityController.ts";

const app = new Application();

// Connect to the database
await connectDB();

// Error handling middleware
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err);
    ctx.response.status = 500;
    ctx.response.body = { error: "Internal server error" };
  }
});

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
app.use(lucidTrainingRouter.routes());
app.use(lucidTrainingRouter.allowedMethods());
app.use(dreamRouter.routes());
app.use(dreamRouter.allowedMethods());
app.use(dreamImageRouter.routes());
app.use(dreamImageRouter.allowedMethods());
app.use(lucidDreamRouter.routes());
app.use(lucidDreamRouter.allowedMethods());
app.use(dreamAnalyticsRouter.routes());
app.use(dreamAnalyticsRouter.allowedMethods());
app.use(communityRouter.routes());
app.use(communityRouter.allowedMethods());

const port = 8000;
console.log(`Server running on http://localhost:${port}`);
await app.listen({ port });
