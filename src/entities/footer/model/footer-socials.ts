import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export const FooterSocials = [
  { id: "1", socialName: "Instagram", link: "/", icon: Instagram },
  { id: "2", socialName: "Facebook", link: "/", icon: Facebook },
  {
    id: "3",
    socialName: "Youtube",
    link: "https://www.youtube.com/",
    icon: Youtube,
  },
  { id: "4", socialName: "Twitter", link: "/", icon: Twitter },
];

export type SocialsType = (typeof FooterSocials)[number];
