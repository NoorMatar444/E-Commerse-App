import * as z from "zod";


export const LoginSchema = z
  .object({
    email: z.string().nonempty("this field is empty"),
    password: z.string().nonempty("this field is empty"),
  })

export type loginSchemaType = z.infer<typeof LoginSchema>;
