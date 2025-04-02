import { Application } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import { connectDB } from "./config/database.ts";
import userRouter from "./controllers/userController.ts";
import dreamRouter from "./controllers/dreamController.ts";
import dreamImageRouter from "./controllers/dreamImageController.ts";
import lucidDreamRouter from "./controllers/lucidDreamController.ts";
import dreamAnalyticsRouter from "./controllers/dreamAnalyticsController.ts";
import communityRouter from "./controllers/communityController.ts";

const app = new Application();

await connectDB();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err);
    ctx.response.status = 500;
    ctx.response.body = { error: "Internal server error" };
  }
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
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
console.log(`Server running on port ${port}`);
await app.listen({ port });
