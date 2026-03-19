import ankrImage from "../images/cases/ankr.jpg";
import chatAppImage from "../images/cases/chat-app.jpg";
import neuraImage from "../images/cases/neura.jpg";
import pathCryptoImage from "../images/cases/path-crypto.jpg";

export const homeCases = [
  {
    id: "ankr",
    brand: "Ankr",
    title: "Elevated the market position of a blockchain infrastructure provider.",
    meta: {
      dateRange: "2021—2026",
      location: "San-Francisco, CA, Remote",
      stack: "Web",
      roles: "UI/UX, Brand",
    },
    goal:
      "Drive audience growth and enterprise adoption by shaping the design language and product flows across Ankr’s website, products, and client solutions.",
    impact:
      "Over five years, revenue grew ~30% YoY, monthly RPC requests reached 1T+, social audience increased +205%, and partnerships included Binance, Microsoft, and Tencent.",
    detailsUrl: "/cases",
    image: ankrImage,
    imageAlt: "Ankr case preview",
  },
  {
    id: "path-crypto",
    brand: "Path Crypto",
    title: "End-to-end design for an SEC-approved crypto investing platform.",
    meta: {
      dateRange: "2022",
      location: "Chicago, IL, Remote",
      stack: "Web, Mobile App",
      roles: "UI/UX",
    },
    goal:
      "Design a cross-platform crypto investment service that meets regulatory requirements while remaining beautiful and intuitive for a broad audience.",
    impact:
      "Following the product announcement, the social media audience grew from 0 to ~150K followers. The platform was approved by the SEC, and the audience was later integrated into Gemini.",
    detailsUrl: "/cases",
    image: pathCryptoImage,
    imageAlt: "Path Crypto case preview",
  },
  {
    id: "neura",
    brand: "Neura",
    title: "Drove blockchain adoption by gamifying ecosystem products.",
    meta: {
      dateRange: "2025—2026",
      location: "San-Francisco, CA, Remote",
      stack: "Web",
      roles: "UI/UX, Brand",
    },
    goal:
      "Design an immersive metaverse to onboard new users into the blockchain ecosystem and drive growth in transactions, addresses, and other key network metrics.",
    impact:
      "The network scaled to 97M+ transactions, 8.2M blocks, and 1.18M wallet addresses, sustaining ~427K daily transactions and proving its reliability to potential partners.",
    detailsUrl: "/cases",
    image: neuraImage,
    imageAlt: "Neura case preview",
  },
  {
    id: "chat-app",
    brand: "Chat App",
    title: "Messaging meets DeFi: Designed a crypto-native superapp. ",
    meta: {
      dateRange: "2021—2022",
      location: "New-York, NY, Remote",
      stack: "Mobile App",
      roles: "UI/UX",
    },
    goal:
      "Led the design of an advanced mobile messaging app for creators, featuring deep integration of crypto wallets, payments, and digital assets as the project’s sole designer.",
    impact:
      "Delivered 50+ user flows, 500+ layouts, and 100+ icons, all adapted for dark mode and prepared for iOS development, bringing the product to a production-ready stage.",
    detailsUrl: "/cases",
    image: chatAppImage,
    imageAlt: "Chat App case preview",
  },
] as const;

