
// src/server/routers/todos.ts
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  getTodos: publicProcedure.query(() => {
    return ['Learn tRPC', 'Build something great'];
  }),
});
export type AppRouter = typeof appRouter;
