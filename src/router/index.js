import Accueil from '../components/Accueil.vue'
import Exo1 from '../components/Exo1.vue'
import Exo2 from '../components/Exo2.vue'
import Exo2False from '../components/Exo2False.vue'
import Exo3 from '../components/Exo3.vue'
import Exo4 from '../components/Exo4.vue'
import Success from '../components/Success.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = new createRouter({
    history: createWebHistory(import.meta.env.BASE_URL || ''),
    routes: [
      { path: '/', component: Accueil },
      { path: '/exo1', component: Exo1 },
      { path: '/exo2', component: Exo2False },
      { path: '/vraiexo2', component: Exo2 },
      { path: '/css', component: Exo3 },
      { path: '/exo4', component: Exo4 },
      { path: '/success', component: Success },
    ]
  })

export default router
