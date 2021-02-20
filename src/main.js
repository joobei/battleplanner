import { createApp } from 'vue'
import { FontAwesomeIcon } from "@/plugins/font-awesome";

import App from './App.vue'


createApp(App).component("fa", FontAwesomeIcon).mount('#app')