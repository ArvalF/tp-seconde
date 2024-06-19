import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

import OpenLayersMap from 'vue3-openlayers';
import 'vue3-openlayers/dist/vue3-openlayers.css';

createApp(App)
    .use(OpenLayersMap)
    .use(router)
    .mount('#app')
