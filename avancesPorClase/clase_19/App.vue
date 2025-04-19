<template>
    <Home first-name="Felipe" last-name="Muñoz" otroValor="solo soy texto"></Home>
</template>

<script>
import Home from "./components/HomeComponent.vue";
/**
 * N_19.3: Se importa la función provide que pertenece a vue.
 */
import { provide } from "vue";

export default {
    name: "App",
    components: {
        Home,
    },
    /**
     * N_19.2: En esta clase pondremos a prueba las características de provide/inject.
     * provide/inject -> es la forma de Vue para generar componentes que se comunican de forma profunda con sus descendientes.
     * La forma de utilizar provide/inject dentro de Composition API es lo mismo que utilizar la función setup().
     * Se crea la función setup() pero antes se importa el provide.
     * 
     * N_19.4: agregamos la función provide() y dentro creamos un nombre de variable, a la cual se le asigna un valor. En esta 
     *      caso sera un nombre de usuario que utilicemos en alguna red social.
     * Dentro de provide también se pueden utilizar variables reactivas utilizando ref.
     */
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
