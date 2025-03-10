<template>
  <div>
    <h2>Lista de Pokémon</h2>
    <table>
      <thead>
      <tr>
        <th>Nombre</th>
        <th>Tipo</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="pokemon in pokemons" :key="pokemon.id">
        <td>{{ pokemon.nombre }}</td>
        <td>{{ pokemon.tipo }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemons: []
    };
  },
  created() {
    this.fetchPokemons();
  },
  methods: {
    fetchPokemons() {
      axios.get('http://localhost:8080/pokemons')
          .then(response => {
            this.pokemons = response.data;
          });
    }
  }
};
</script>
