const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Esketch Song",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Manager AI",
    bio: "I AM I.",
    email: "esketch@gmail.com",
    linkedin: "esketch",
    github: "esketch9",
    instagram: "esketch",
  },
  projects: [
    {
      name: `Notion-Blog`,
      href: "https://github.com/esketch-ai/esketch-ai.github.io",
    },
  ],
  // blog setting (required)
  blog: {
    title: "SSH Blog",
    description: "welcome to SSH blog!",
    theme: "dark", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://Notion-Blog.vercel.app",
  NOTION_PAGE_ID: "https://www.notion.so/esketch/0d9e3d03f2804688b155e6722702a3cb?v=fc8c61ee610845bc92285184ee6dbdb5", 
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
//   ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
//     https://www.notion.so/esketch/0d9e3d03f2804688b155e6722702a3cb?v=fc8c61ee610845bc92285184ee6dbdb5
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
