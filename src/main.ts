import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
const pinia = createPinia()
export function createApp() {
	const app = createSSRApp(App)
	app.use(pinia)
	return {
		app
	}
}
