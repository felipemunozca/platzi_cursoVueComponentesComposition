<!-- 
    N_12.1: Se crea un template que rescatara información de usuarios como si se tratara de un repositorio de GitHub donde se 
        colocara un nombre de usuario y retornara todos sus repositorios.
-->
<template>
    <UserRepositories :user="'Diana'"></UserRepositories>
</template>

<script>
/**
 * N_12.3: Se importa el archivo componente.
 */
import UserRepositories from "./components/UserRepositories.vue";

export default {
    name: "App",
    components: {
        UserRepositories,
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