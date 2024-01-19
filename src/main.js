import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/axios"


import SweetAlertPlugin from "@/plugins/sweetAlertPlugin.js";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(SweetAlertPlugin);
app.mount("#app");


// npm install vue-router