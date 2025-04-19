<!-- 
    N_21.1: Continuamos utilizando el código de la clase anterior.
    En esta clase, crearemos una comparativa sobre este componente creado con Composition API y un nuevo componente con este mismo
        código pero utilizando option API.
-->
<template>
    <div>{{ fullName }}</div>
    <div>{{ username }}</div>
    <button ref="btn">Click!</button>
</template>

<script>
import { toRefs, computed, inject, ref, watch } from "vue";

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

        const username = inject("username");

        expose({
            fullName,
        });

        const btn = ref(null);
        console.log(btn.value);

        watch(btn, (valor) => {
            console.log(valor);
        });

        return {
            fullName,
            username,
            btn,
        };
    },
};
</script>
