import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./assets/css/gloable.css" //引入全局样式

import './assets/iconfont/iconfont.css'
import {store} from "./store";
const app =createApp(App)
app.use(router)
    .use(ElementPlus)
    .use(store)
    .mount('#app')
