<!--
    N_13.2: Se agregan las etiquetas de template y script.
-->
<template>
    <div>Hola utilizando Composition API</div>
</template>

<script>
/**
 * N_13.5: Se importan los ciclos de vida directamente de vue.
 * Para este ejercicio se escuchara el momento en que el componente quede montado en el DOM por lo que se utilizara el ciclo
 *      mounted pero se utilizara la sintaxis "on" y luego el nombre del ciclo con su primera letra en mayúscula -> onMounted.
 */
import { onMounted } from "vue";

export default {
    /**
     * N_13.4: Se agrega la función setup().
     * Dentro se utiliza los elementos del ciclos de vida
     * 
     * N_13.6: Se llama a la función onMounted() y se le agrega una función flecha. La función mostrara un mensaje por consola.
     */
    setup() {
        onMounted(() => {
            console.log("mounted!");
        });
    },
};
</script>