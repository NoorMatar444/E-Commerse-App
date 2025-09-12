import * as z from "zod";

export const CheckOutSchema = z
  .object({
    details: z.string().nonempty("this field is empty"),
    phone: z.string().nonempty("this field is empty").regex(/^01[0125][0-9]{8}$/),
    city:z.string().nonempty("this field is empty"),
  })

export type CheckOutSchemaType = z.infer<typeof CheckOutSchema>;