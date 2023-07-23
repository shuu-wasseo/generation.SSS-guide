import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "generation.SSS guide",
  description: "a guide to generation.SSS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'home', link: '/' },
      { text: 'guide', link: '/introduction' }
    ],

    sidebar: [
      {
        text: 'overview',
        items: [
          { text: 'introduction', link: '/introduction' },
          { text: 'members and dimensions', link: '/members' },
        ]
      },
      {
        text: 'the game',
        items: [
          { text: 'dimensions and currency', link: '/dimensions' },
          { text: 'prestige', link: '/prestige' },
          { text: 'challenges', link: '/challenges' },
          { text: 'objekts and autobuyers', link: '/objekts' },          
          { text: 'milestones', link: '/milestones' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shuu-wasseo/generation.SSS' }
    ]
  }
})
