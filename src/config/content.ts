// 整个站点的全局配置
export const siteConfig = {
  // 站点名称（浏览器标题栏 / SEO）
  name: "Someone's Portfolio",
  // 站点一句话简介（meta description）
  description: "A showcase of my work and thoughts",

  // 顶部主导航文案
  nav: {
    home: "首页",      // “首页”
    posts: "文章",    // “文章”
    projects: "项目", // “项目”
    about: "关于我"     // “关于我”
  },

  // 首页 hero 区域
  home: {
    greeting: "Hello, I'm IanChow.", // 问候语
    description: "A passionate frontend developer with a keen eye for design and a love for creating beautiful, functional web experiences.", // 自我介绍
    buttons: {
      viewProjects: "查看项目", // “查看项目”按钮
      readPosts: "阅读文章"        // “阅读文章”按钮
    }
  },

  // 项目（Projects）页面
  projects: {
    title: "忆痕的日记本",   // 页面主标题
    description: "Here are some of the current projects I've been working on. I really enjoy creating new projects and coming up with new ideas. I'm always working on something new, so check back often!", // 页面副标题
    backButton: "Back to Home", // 返回首页按钮
    noProjects: "No projects found.", // 项目为空时的占位文字

    // 项目列表
    items: [
      {
        title: "TempMail.Best",                      // 项目名称
        description: "Best Temporary Email.",        // 一句话描述
        href: "https://tempmail.best",               // 项目链接
        imageUrl: "/assets/images/projects/tempmail.best.png" // 封面图
      },
      {
        title: "DNS.Surf",
        description: "Querying DNS Resolution Results in Different Regions Worldwide.",
        href: "https://dns.surf",
        imageUrl: "/assets/images/projects/dns.surf.png"
      },
      {
        title: "HTML.ZONE",
        description: "Web Toolbox.",
        href: "https://html.zone",
        imageUrl: "/assets/images/projects/html.zone.png"
      },
      {
        title: "Sink",
        description: "A Simple / Speedy / Secure Link Shortener with Analytics.",
        href: "https://sink.cool",
        imageUrl: "/assets/images/projects/sink.cool.png"
      },
      {
        title: "BroadcastChannel",
        description: "Turn your Telegram Channel into a MicroBlog.",
        href: "https://github.com/ccbikai/BroadcastChannel",
        imageUrl: "/assets/images/projects/broadcast-channel.png"
      },
      {
        title: "L(O*62).ONG",
        description: "Make your URL looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger",
        href: "https://loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo.ong",
        imageUrl: "/assets/images/projects/long.png"
      }
    ]
  },

  // 文章（Posts）页面
  posts: {
    title: "My Writing",              // 页面主标题
    description: "My thoughts and ideas about technology and development.", // 页面副标题
    backButton: "Back to Home",       // 返回首页按钮
    noPosts: "No posts found matching your search.", // 文章为空时的占位文字
    searchPlaceholder: "Filter posts by title...",   // 搜索框占位符

    // 分页文案
    pagination: {
      previous: "Previous", // “上一页”
      next: "Next"          // “下一页”
    },

    // 文章列表
    items: [
      {
        title: "Run MCP Server in a Docker sandbox",  // 文章标题
        description: "Run MCP Server in a Docker sandbox to avoid supply chain attacks.", // 摘要
        date: "Apr 25, 2025",                         // 发布日期
        href: "/post/guide-to-running-mcp-server-in-a-sandbox", // 站内链接
        imageUrl: "/assets/images/posts/post1.jpg",   // 封面图
        readingTime: 8                                // 预计阅读分钟数
      },
      {
        title: "Use Cloudflare Workers to concat audio files",
        description: "How to use Cloudflare Workers to merge audio files using FFmpeg in the browser.",
        date: "April 19, 2025",
        href: "/post/cloudflare-audio-concat",
        imageUrl: "/assets/images/posts/post2.jpg",
        readingTime: 12
      },
      {
        title: "RSS.Beauty - Make Your RSS Beautiful!",
        description: "Beautify your RSS feeds with RSS.Beauty, featuring elegant interfaces, responsive design, and self-hosting support. Try it now!",
        date: "Dec 31, 2024",
        href: "/post/rss-beauty",
        imageUrl: "/assets/images/posts/post3.jpg",
        readingTime: 6
      },
      {
        title: "Building a Modern Web App with Next.js",
        description: "Learn how to build a modern web application using Next.js, React, and Tailwind CSS.",
        date: "Dec 15, 2024",
        href: "/post/nextjs-web-app",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 15
      },
      {
        title: "The Future of Web Development",
        description: "Exploring the latest trends and technologies shaping the future of web development.",
        date: "Dec 1, 2024",
        href: "/post/future-web-dev",
        imageUrl: "/assets/images/posts/post2.jpg",
        readingTime: 10
      },
      {
        title: "Mastering TypeScript in 2024",
        description: "A comprehensive guide to TypeScript features and best practices for modern web development.",
        date: "Nov 20, 2024",
        href: "/post/typescript-guide",
        imageUrl: "/assets/images/posts/post3.jpg",
        readingTime: 20
      },
      {
        title: "The Art of Clean Code",
        description: "Learn the principles and practices of writing clean, maintainable code that stands the test of time.",
        date: "Nov 10, 2024",
        href: "/post/clean-code",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 12
      },
      {
        title: "Building Scalable APIs with Node.js",
        description: "Best practices and patterns for building robust and scalable APIs using Node.js and Express.",
        date: "Oct 28, 2024",
        href: "/post/nodejs-apis",
        imageUrl: "/assets/images/posts/post2.jpg",
        readingTime: 18
      },
      {
        title: "Getting Started with GraphQL",
        description: "A beginner's guide to GraphQL: concepts, implementation, and real-world examples.",
        date: "Oct 15, 2024",
        href: "/post/graphql-intro",
        imageUrl: "/assets/images/posts/post3.jpg",
        readingTime: 14
      },
      {
        title: "The Power of CSS Grid",
        description: "Master CSS Grid layout and create complex, responsive designs with ease.",
        date: "Oct 1, 2024",
        href: "/post/css-grid",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 9
      }
    ]
  },

  // 关于（About）页面
  about: {
    title: "About",                // 页面标题
    description: "Learn more about me and my journey.", // 页面简介
    backButton: "Back to Home"     // 返回首页按钮
  },

  // 主题切换文案
  theme: {
    dayMode: "Day mode",   // 日间模式
    nightMode: "Night mode" // 夜间模式
  }
} as const; // 使用 `as const` 让 TypeScript 推断出最严格的字面量类型
