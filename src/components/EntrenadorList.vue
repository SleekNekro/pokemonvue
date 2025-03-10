<template>
  <div>
    <h2>Lista de Entrenadores</h2>
    <table>
      <thead>
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="entrenador in entrenadores" :key="entrenador.id">
        <td>{{ entrenador.nombre }}</td>
        <td>{{ entrenador.edad }}</td>
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
      entrenadores: []
    };
  },
  created() {
    this.fetchEntrenadores();
  },
  methods: {
    fetchEntrenadores() {
      axios.get('http://localhost:8080/entrenadores')
          .then(response => {
            this.entrenadores = response.data;
          });
    }
  }
};
</script>
