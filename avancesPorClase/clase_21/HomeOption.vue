<template>
    <div>{{ fullName }}</div>
    <div>{{ username }}</div>
    <button ref="btn">Click!</button>
</template>

<script>
export default {
    props: {
        firstName: String,
        lastName: String,
    },
    /**
     * N_22.3: Para obtener la propiedad username desde App.vue se debió utilizar inject como una option en un JSON.
     */
    inject: ["username"],
    /**
     * N_21.2: En esta version, se debió crear una propiedad computada para obtener el nombre completo, utilizando la propiedad 
     *      "this" dentro del return.
     */
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
    },
    /**
     * N_21.4: Se debió utilizar el ciclo de vida mounted() para poder obtener el mensaje por consola del botón.
     * Otra diferencia, es que al utilizar la propiedad $refs que utiliza el botón no es necesario agregar un watcher que escuche 
     *      el evento ni fue necesario utilizar el .value para obtener el valor.
     */
    mounted() {
        console.log(this.$refs.btn);
    },
};
</script>