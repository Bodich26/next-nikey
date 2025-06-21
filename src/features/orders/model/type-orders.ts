import {
  ColorVariant,
  DraftOrder,
  DraftOrderItem,
  Size,
  Sneaker,
} from "@prisma/client";

type DraftOrderItemWithDetails = DraftOrderItem & {
  sneaker: Sneaker;
  colorVariant: ColorVariant;
  size: Size;
};

type FullDraftOrder = DraftOrder & {
  draftItems: DraftOrderItemWithDetails[];
};

type DraftOrderApiRes = {
  success: boolean;
  draftOrder: FullDraftOrder | null;
  error?: string;
};

type DraftOrderIdApiRes = {
  success: boolean;
  draftOrderId: string | null;
  error?: string;
};

type DraftOrderItemsList = DraftOrderItemWithDetails[];

//-------------

type CreateOrderRes = {
  success?: boolean;
  error?: string;
  message?: string;
};

type CreateOrderReq = {
  name: string;
  phone: string;
  email: string;
  deliveryAddress: string;
  paymentMethod: string;
  shippingMethod: string;
  shippingCost: number;
  promoCode?: string | undefined;
  orderAmount: number;
};

export type {
  DraftOrderItemWithDetails,
  DraftOrderApiRes,
  DraftOrderIdApiRes,
  DraftOrderItemsList,
  CreateOrderRes,
  CreateOrderReq,
};
