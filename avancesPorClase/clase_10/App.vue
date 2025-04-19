<!--
    N_10.1: Se limpia el template y se agrega un div que dentro agregara el texto de una nueva variable.
-->
<template>
    <div>{{ text }}</div>
</template>

<script>
export default {
    name: "App",
    /**
     * N_10.2: Se retorna el valor de la variable text con un mensaje.
     */
    data() {
        return {
            text: "Hola Vue",
        };
    },
    /**
     * N_10.3: Se agrega el ciclo beforeCreate() y mediante la consola, se mostrara un mensaje junto a la función data y acceder 
     *      al elemento DOM que representa este componente.
     * Se replica este mismo código utilizando los ciclos created() y mounted().
     * 
     * N_10.4: Se abre la consola del navegador para ver las respuestas de la consola.
     * La primera respuesta: no muestra nada, el objeto $data aun no se crea y aun no se inicializa la reactividad de Vue.
     * La segunda respuesta: se crea la instancia a la variable text para poder ver el texto guardado, pero aun no hay 
     *      interacción con el DOM.
     * La tercera respuesta: ya existe tanto el valor de $data como el elemento html donde se monto el contenido en el DOM.
     */
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