import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./assets/css/gloable.css" //引入全局样式
import  store from './store/index' //添加vuex:状态管理器
import './assets/iconfont/iconfont.css'
const app =createApp(App)
app.use(router)
    .use(ElementPlus)
    .use(store)

    .mount('#app')
