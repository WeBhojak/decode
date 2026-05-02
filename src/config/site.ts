import ogImage from "@/assets/og-image.png";
import type { SiteConfig } from "@/types/types";

export const siteConfig: SiteConfig = {
  name: "Decode With Avyay",
  description: "Your one stop guide to DevOps",
  url: "https://decodewithavyay.com/",
  lang: "en",
  locale: "en_US",
  author: "Avyay",
  twitter: "@AvyayPraty1336",
  instagram: "@decodewithavyay",
  linkedin: "Avyay Pratyush",
  ogImage: ogImage,
  socialLinks: {
    instagram: "https://www.instagram.com/decodewithavyay",
    twitter: "https://x.com/avyaypraty1336",
    linkedin: "https://www.linkedin.com/in/avyaypratyush/",
  },
  navLinks: [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ],
};
