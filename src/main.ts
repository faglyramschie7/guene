import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import MyPlugin from '@/components/Guene/GnLoading/GnLoading'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(MyPlugin, {
    message: "Custom message from main.ts",
  });
app.mount('#app')
