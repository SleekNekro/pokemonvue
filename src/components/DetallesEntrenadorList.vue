<template>
  <div>
    <h2>Lista de Detalles de Entrenadores</h2>
    <table>
      <thead>
      <tr>
        <th>Región</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="detalle in detallesEntrenadores" :key="detalle.id">
        <td>{{ detalle.region }}</td>
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
      detallesEntrenadores: []
    };
  },
  created() {
    this.fetchDetallesEntrenadores();
  },
  methods: {
    fetchDetallesEntrenadores() {
      axios.get('http://localhost:8080/detallesEntrenadores')
          .then(response => {
            this.detallesEntrenadores = response.data;
          });
    }
  }
};
</script>
