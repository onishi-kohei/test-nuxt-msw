import { worker } from "~/mocks/browser";

export default defineNuxtPlugin(() => {
  if (process.env.NODE_ENV === 'development') {
    worker.start()
    console.log('worker started')
  }
})