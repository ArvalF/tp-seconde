import Accueil from '../components/Accueil.vue'
import Exo1 from '../components/Exo1.vue'
import Exo2 from '../components/Exo2.vue'
import Exo2False from '../components/Exo2False.vue'
import Exo3 from '../components/Exo3.vue'
import Exo4 from '../components/Exo4.vue'
import Success from '../components/Success.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = new createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/tp-seconde/', component: Accueil },
      { path: '/tp-seconde/exo1', component: Exo1 },
      { path: '/tp-seconde/exo2', component: Exo2False },
      { path: '/tp-seconde/vraiexo2', component: Exo2 },
      { path: '/tp-seconde/css', component: Exo3 },
      { path: '/tp-seconde/exo4', component: Exo4 },
      { path: '/tp-seconde/success', component: Success },
    ]
  })

export default router
