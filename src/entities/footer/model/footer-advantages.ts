import { Truck, ShoppingBag, Repeat, Earth } from "lucide-react";

export interface AdvantageItem {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

export const FooterAdvantages: AdvantageItem[] = [
  {
    id: 1,
    icon: Truck,
    title: "Fast Delivery",
    text: "Get it in 1–3 business days",
  },
  {
    id: 2,
    icon: ShoppingBag,
    title: "Secure Packaging",
    text: "Each pair in a branded boxs",
  },
  {
    id: 3,
    icon: Repeat,
    title: "Easy Returns",
    text: "14-day return — no questions asked",
  },
  {
    id: 4,
    icon: Earth,
    title: "Nationwide Shipping",
    text: "Delivery to every city across country",
  },
];
