import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Web Development',
        mm: 'Web Geliştirme',
      },
    },
    {
      id: 2,
      title: {
        en: 'Application',
        mm: 'Uygulama',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Design',
        mm: 'Web Tasarım',
      },
    },
  ]
})
