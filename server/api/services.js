import {defineEventHandler} from 'h3'

export default defineEventHandler(() => {
    return [
        {
            id: 1,
            title: 'Laravel',
            description: {
                en: 'I build modern and advanced websites and applications with Laravel, the PHP framework.',
                mm: 'I build modern and advanced websites and applications with Laravel, the PHP framework.',
            },
            icon: 'logo-laravel',
            image: null,
        },
        {
            id: 2,
            title: 'Vue JS',
            description: {
                en: 'I use VueJS, a modern JavaScript framework, while making dynamic and static websites and applications.',
                mm: 'I use VueJS, a modern JavaScript framework, while making dynamic and static websites and applications.',
            },
            icon: 'logo-vue',
            image: null,
        },
    ]
})
