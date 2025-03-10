<template>
  <div>
    <PokemonList />
  </div>
</template>

<script>
import PokemonList from '../components/PokemonList.vue';

export default {
  name: 'PokemonsView',
  components: {
    PokemonList
  }
};
</script>
