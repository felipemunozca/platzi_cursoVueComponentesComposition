<!--
    N_18.4: Se crea un nuevo atributo llamado otroValor para probar que se puede acceder a este atributo mediante la variable context.
-->
<template>
    <Home first-name="Miguel" last-name="Torres" otroValor="solo soy texto"></Home>
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
