<!-- 
    N_18.1: Continuamos con el mismo ejemplo de la clase anterior.
-->
<template>
    <div>{{ fullName }}</div>
</template>

<script>
import { toRefs, computed } from "vue";

export default {
    props: {
        firstName: String,
        lastName: String,
    },
    /**
     * N_18.2: Se agrega el segundo argumento de la función setup() que es el context y luego imprimirlo por la consola para ver 
     *      que valor tiene.
     * 
     * N_18.3: En la consola del navegador, puedo ver que se están ofreciendo 4 valores desde el context:
     *      - attrs -> abreviación de atributos, que es todo lo que recibimos como props desde un componente, por ejemplo: firstName 
     *          y lastName, que se están pasando desde el componente App.vue como si fuera html.
     *      - emit -> permite saber el nombre de un evento que queremos emitir.
     *      - expose -> es una función y nos permite que podemos llamarla solo UNA VEZ dentro del componente. 
     *      - slots -> aquí se almacenan los slots del componente.
     * 
     * N_18.5: Se recarga la pagina en el navegador, y si se navega en las opciones de attrs, deberá aparecer el otroValor con el 
     *      texto agregado.
     * 
     * N_18.6: La constante fullName, solo existe dentro del contexto de la función setup(), si la quisiera hacer publica para 
     *      utilizar dentro de todo el componente, se puede exponer esta constante, para esto, se utiliza la des-estructuración de 
     *      EcmaScript utilizando llaves { } y acceder directamente a expose.
     */
    setup(props, { expose }) { 
        // console.log(context);

        const { firstName, lastName } = toRefs(props);

        const fullName = computed(() => {
            return `${firstName.value} ${lastName.value}`;
        });

        /**
         * N_18.7: Antes del return, se ejecuta la función expose() y puedo publicar una variable o un objeto completo, en este 
         *      caso, sera la variable fullName.
         * De esta manera, esta valor va a poder ser accedido desde otros componentes (seria lo equivalente a hacerlo publico).
         */
        expose({
            fullName,
        });

        return {
            fullName,
        };
    },
};
</script>
