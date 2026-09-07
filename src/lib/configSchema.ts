import { z } from "zod";

export const dotcvConfigSchema = z.object({
  theme: z.enum(["classic", "sidebar", "timeline"]).default("classic"),
});

export type DotcvConfig = z.infer<typeof dotcvConfigSchema>;
