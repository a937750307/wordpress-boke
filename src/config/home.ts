// 首页 hero 区域的文案配置
export const homeConfig = {
  // 问候语 / 主标语
  greeting: "Hello, 我是忆痕！",
  // 自我介绍 / 副标语
  description: "A passionate frontend developer with a keen eye for design and a love for creating beautiful, functional web experiences.",
  // 按钮文案
  buttons: {
    viewProjects: "查看项目", // “查看项目”按钮
    readPosts: "阅读文章"        // “阅读文章”按钮
  }
} as const; // 使用 as const 使所有字段成为字面量类型，避免被 TypeScript 推断为 string
