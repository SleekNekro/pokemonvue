<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <nav>
      <RouterLink to="/entrenadores">Entrenadores</RouterLink>
      <RouterLink to="/pokemons">Pokémon</RouterLink>
      <RouterLink to="/movimientos">Movimientos</RouterLink>
      <RouterLink to="/detallesEntrenadores">Detalles Entrenadores</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  text-align: center;
  padding: 2rem 1rem;
  background-color: #f4fdfb;
  border-bottom: 1px solid #ddd;
}

.logo {
  margin-bottom: 1rem;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

nav a {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #333;
  border-radius: 6px;
  transition: background-color 0.2s;
  border: 1px solid transparent;
}

nav a:hover {
  background-color: #e8f8f3;
}

nav a.router-link-exact-active {
  background-color: #42b983;
  color: white;
  border: 1px solid #42b983;
}

main {
  padding: 2rem;
  max-width: 960px;
  margin: auto;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
