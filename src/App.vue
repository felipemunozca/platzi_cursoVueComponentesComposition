<template>
  <Home first-name="Felipe" last-name="Muñoz" otroValor="solo soy texto"></Home>
</template>

<script>
import Home from "./components/HomeComponent.vue";
import { provide } from "vue";

export default {
  name: "App",
  components: {
    Home,
  },
  setup() {
    provide("username", "felipe_spriggan");
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
