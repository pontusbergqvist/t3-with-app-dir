import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { createTRPCContext } from "~/server/api/trpc";
import { appRouter } from "~/server/api/root";

// export API handler
const handler = (request: Request) => fetchRequestHandler({
  router: appRouter,
  createContext: () => ({}),
  endpoint: '/api/trpc',
  req: request
});

export const GET = handler;
