import * as PrimeVue from 'primevue/config'
import * as Button from 'primevue/button'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue)
  nuxtApp.vueApp.component('Button', Button)
})
