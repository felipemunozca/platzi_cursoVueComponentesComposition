<!-- 
  N_11.6: Se agrega la variable algo declarada en el archivo base.js para imprimir el texto dentro de un div.
-->
<template>
  <div>{{ text }}</div>
  <div>{{ algo }}</div>
</template>

<script>
/*
  N_11.4: Se importa de forma manual el archivo que creamos de la siguiente manera:
  Se le asigna el nombre "base" y en la url se utiliza el signo "@/" que se puede traducir como escribir la carpeta "source/" y luego el resto de la ruta del archivo.
*/
import base from "@/mixins/base";

export default {
  name: "App",
  /*
    N_11.5: Se agrega la opción mixins y una lista con todos los mixins que voy a utilizar, pueden ser uno o muchos.
  */
  mixins: [base],
  data() {
    return {
      text: "Hola Vue",
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this.$data, this.$el);
  },
  created() {
    console.log("created", this.$data, this.$el);
  },
  mounted() {
    console.log("mounted", this.$data, this.$el);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
