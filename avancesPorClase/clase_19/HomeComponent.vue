<!--
    N_19.1: Continuamos con el mismo ejemplo de la clase anterior.

    N_19.8: Se imprime el valor de la variable username que viene desde el componente App.vue
-->
<template>
    <div>{{ fullName }}</div>
    <div>{{ username }}</div>
</template>

<script>
/**
 * N_19.5: Desde el archivo descendiente, para poder recibir la variable que se esta enviando, se debe importar inject que 
 *      pertenece a  vue.
 */
import { toRefs, computed, inject } from "vue";

export default {
    props: {
        firstName: String,
        lastName: String,
    },
    setup(props, { expose }) {
        const { firstName, lastName } = toRefs(props);

        const fullName = computed(() => {
            return `${firstName.value} ${lastName.value}`;
        });

        /**
         * N_19.6: Dentro de la función setup() se crea una variable para almacenar el valor recibido (puede ser el mismo nombre 
         *      u otro) seguido de la función inject() y dentro, el nombre de la variable a la que queremos acceder.
         */
        const username = inject("username");

        expose({
            fullName,
        });

        /**
         * N_19.7: Ya con el valor de la variable guardado dentro del componente, se puede retornar para utilizar fuera de la 
         *      función setup().
         */
        return {
            fullName,
            username,
        };
    },
};
</script>
