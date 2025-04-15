<!--
    N_17.1: Se envían como atributos las propiedades de nombre y apellido.
-->
<template>
    <Home first-name="Agustina" last-name="Muñoz"></Home>
</template>

<script>
import Home from "./components/HomeComponent.vue";

export default {
    name: "App",
    components: {
        Home,
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