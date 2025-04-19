<!-- 
    N_22.1: Volvemos a utilizar el mismo código de las clases anteriores.
-->
<template>
    <div>{{ fullName }}</div>
    <div>{{ username }}</div>
    <button ref="btn">Click!</button>
</template>

<!-- 
    N_22.2: En esta clase vamos a reorganizar el código para que quede mas limpio y parezca mas Javascript puro.
    Esto se puede hacer agregando una nueva configuración de Vue.
    Dentro de la etiqueta <script> se puede agregar el valor setup y de esta manera, todo lo que este dentro de la etiqueta 
        <script>, es como si se hubiese escrito dentro de la función setup().
-->
<script setup>
/**
 * N_22.4: Se importa la función defineProps que es parte de vue.
 * Se utiliza para poder utilizar props.
 * 
 * N_22.7: Se importa la función defineExpose que es parte de vue.
 * Cumple la misma tarea que expose, pero se utiliza cuando esta fuera de un código que se exporta.
 */
import { defineProps, defineExpose, toRefs, computed, inject, ref, watch } from "vue";

/**
 * N_22.3: El siguiente paso, es copiar todo el código que esta dentro de setup() excepto del return y se pega fuera del 
 *      export default {}.
 * Nos queda traer las props, pero para eso primero se debe importar una nueva función.
 * 
 * N_22.5: Se crea una nueva constante que se llamara "props", este debe ser el mismo nombre que se utiliza en la función 
 *      toRefs(props) por lo que si se cambia, se debe cambiar en ambos lados.
 * Dentro de export default {} se sacan las variables que se crearon en props y se pegan en esta nueva función.
 */
const props = defineProps({
    firstName: String,
    lastName: String,
});

const { firstName, lastName } = toRefs(props);

const fullName = computed(() => {
    return `${firstName.value} ${lastName.value}`;
});

const username = inject("username");

/**
 * N_22.6: Otro cambio que se debe realizar es cambiar la función expose() por una nueva llamada defineExpose() que debe ser 
 *      importada al inicio.
 */
defineExpose({
    fullName,
});

const btn = ref(null);

console.log(btn.value);

watch(btn, (valor) => {
    console.log(valor);
});

/**
 * Luego de sacar el código que necesitamos, todo lo que esta dentro del export default {} puede ser borrado.
 */
</script>
