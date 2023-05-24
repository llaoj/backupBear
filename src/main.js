// import './assets/main.css'

import '@tabler/core/dist/css/tabler.min.css'
import '@tabler/core/dist/js/tabler.min.js'
import '@tabler/core/dist/js/demo-theme.min.js'
import { IconPlus } from '@tabler/icons-vue';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
