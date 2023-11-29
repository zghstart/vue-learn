import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18nPlugin from './plugins/i18n.ts'

const app = createApp(App)

// 全局注册组件
// app
//   .component('ComponentA', ComponentA)
//   .component('ComponentB', ComponentB)
//   .component('ComponentC', ComponentC)


// 使 v-focus 在所有组件中都可用
// app.directive('focus', {
//     /* ... */
//   })
app.use(createPinia())
app.use(router)

app.use(i18nPlugin, {
    greetings: {
      hello: 'Bonjour!'
    }
  })

app.mount('#app')



