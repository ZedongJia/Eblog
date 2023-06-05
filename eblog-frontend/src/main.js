import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 注册全局组件
import AddComponent from './components/index'

// 引入markdown查看器
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'

import hljs from 'highlight.js'

VMdPreview.use(githubTheme, {
  Hljs: hljs
})

const app = createApp(App).use(store).use(router).use(VMdPreview)

AddComponent(app)
app.mount('#app')
