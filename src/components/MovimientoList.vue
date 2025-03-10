<template>
  <div>
    <h2>Lista de Movimientos</h2>
    <table>
      <thead>
      <tr>
        <th>Nombre</th>
        <th>Tipo</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="movimiento in movimientos" :key="movimiento.id">
        <td>{{ movimiento.nombre }}</td>
        <td>{{ movimiento.tipo }}</td>
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
      movimientos: []
    };
  },
  created() {
    this.fetchMovimientos();
  },
  methods: {
    fetchMovimientos() {
      axios.get('http://localhost:8080/movimientos')
          .then(response => {
            this.movimientos = response.data;
          });
    }
  }
};
</script>
style>