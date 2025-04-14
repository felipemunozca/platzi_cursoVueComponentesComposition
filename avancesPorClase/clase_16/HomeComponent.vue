<!-- 
    N_16.4: Si se quisiera imprimir el nombre completo del usuario, se puede hacer escribiendo ambas variables por separado.
    
    N_16.7: Se utiliza la variable fullName para imprimir el valor dentro del template.
-->
<template>
    <!-- <div>Nombre completo: {{ firstName }} {{ lastName }}</div> -->
    <div>Nombre completo: {{ fullName }}</div>
</template>

<script>
/**
 * N_16.1: Se importan las funciones de ref y computed pertenecientes a vue.
 */
import { ref, computed } from "vue";

export default {
    setup() {
        /**
         * N_16.2: Se crean dos variables para guardar el nombre y apellido de una persona, simulando que se trata de un formulario 
         *      o valores obtenidos de una base de datos.
         * Se crean las constantes y se utiliza la función ref() para asignarles un valor estático.
         */
        const firstName = ref("Felipe");
        const lastName = ref("Muñoz");

        /**
         * N_16.5: Se crea una función computada para tener una variable que guarde el nombre y apellido en un solo valor.
         * Se crea la constate y sera igual a la función computed(), dentro recibirá como argumento una función, que en este caso,
         *      sera anónima y dentro retorna una nueva cadena de texto utilizando `` comillas invertidas y los valores de firstName
         *      y lastName.
         */
        const fullName = computed(() => {
        return `${firstName.value} ${lastName.value}`;
        });

        /**
         * N_16.3: Se retornan las variables para poder obtener su valor y luego utilizarlo dentro de todo el componente.
         * 
         * N_16.6: Se comentan las variables originales, y ahora se agrega la variable que retorna la función computada para
         *      imprimirlo en el template.
         */
        return {
        // firstName,
        // lastName,
        fullName,
        };
    },
};
</script>
