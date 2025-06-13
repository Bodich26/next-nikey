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

export type {
  DraftOrderItemWithDetails,
  DraftOrderApiRes,
  DraftOrderIdApiRes,
  DraftOrderItemsList,
};
