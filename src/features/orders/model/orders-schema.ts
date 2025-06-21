import { z } from "zod";

export const OrdersSchema = z.object({
  name: z.string().trim().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Phone number is too short." })
    .regex(/^\+?[0-9\s()-]{10,}$/, {
      message: "Enter a valid phone number.",
    }),
  email: z.string().email({
    message: "Enter your Email.",
  }),
  deliveryAddress: z.string().nonempty({
    message: "Select delivery address.",
  }),
  paymentMethod: z.enum(["UPON_RECEIPT", "ONLINE"], {
    required_error: "Choose payment method.",
  }),
  shippingMethod: z.enum(["STANDARD", "EXPEDITED", "NEXT_DAY"], {
    required_error: "Choose shipping method.",
  }),
  shippingCost: z.number(),
  promoCode: z.string().optional(),
  orderAmount: z.number().min(0),
});

export type OrdersSchemaData = z.infer<typeof OrdersSchema>;
