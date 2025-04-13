<!-- 
    N_13.1: Se crea un nuevo proyecto en blanco.
    Dentro de la carpeta components se crea el archivo: HomeComponent.vue
    Se agrega el componente dentro del template y de forma automática debería importar la url del componente y quedar definido dentro
        la propiedad components en el script.
-->
<template>
    <Home></Home>
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
