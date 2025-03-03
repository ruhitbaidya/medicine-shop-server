import z from "zod";

export const userValidation = z.object({
  email: z.string().email(),
  phone: z.string().min(11).max(14),
  password: z.string(),
});
