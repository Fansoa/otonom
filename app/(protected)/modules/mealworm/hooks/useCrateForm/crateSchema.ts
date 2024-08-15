import * as z from "zod";

const crateSchema = z.object({
  rack_id: z.string(),
  name: z.string(),
});

export default crateSchema;
