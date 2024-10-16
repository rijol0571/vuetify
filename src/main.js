/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

//ApexChart
import VueApexCharts from "vue3-apexcharts";


app.use(VueApexCharts);

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
