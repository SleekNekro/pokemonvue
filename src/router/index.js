import { createRouter, createWebHistory } from 'vue-router';
import EntrenadoresView from '../views/EntrenadoresView.vue';
import PokemonsView from '../views/PokemonsView.vue';
import MovimientosView from '../views/MovimientosView.vue';
import DetallesEntrenadoresView from '../views/DetallesEntrenadoresView.vue';

const routes = [
  { path: '/', redirect: '/entrenadores' },
  { path: '/entrenadores', component: EntrenadoresView },
  { path: '/pokemons', component: PokemonsView },
  { path: '/movimientos', component: MovimientosView },
  { path: '/detallesEntrenadores', component: DetallesEntrenadoresView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
