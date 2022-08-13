import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.directive("sc", {
    mounted(el,binding) {
        if(typeof binding.value === 'function') {
            const callback = binding.value.bind(null,el)
            document.addEventListener('scroll',callback)
        }
    },
    unmounted(el,binding) {
        const callback = binding.value.bind(null,el)
        document.removeEventListener('scroll',callback)
    }
})

app.use(store).use(router).mount('#app')
