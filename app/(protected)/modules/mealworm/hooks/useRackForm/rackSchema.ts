import * as z from "zod";

const rackSchema = z.object({
  name: z.string(),
});

export default rackSchema;
