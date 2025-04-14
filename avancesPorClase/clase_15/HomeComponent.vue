<!-- 
    N_15.1: Mantenemos el mismo código de la clase anterior.
-->
<template>
    <div>{{ obj.counter }}</div>
</template>

<script>
/*
    N_15.2: Se importa la variable watch que forma parte de Vue.
*/
import { reactive, watch } from "vue";

export default {
    setup() {
        const obj = reactive({ counter: 0 });
        setInterval(() => obj.counter++, 500);

        /*
            N_15.3: Dentro de la función setup() se agrega la función watch().
            Los watcher son funciones que nos permiten Escuchar cuando una variable reactiva cambia su valor y entonces podemos acceder 
                a su valor antiguo y a su valor nuevo.
            La función watch va a recibir 2 valores:
                - el valor que quieres escuchar.
                - la función que va a ejecutar cada vez que haya un cambio.
             *  
            N_15.4: El primer valor que se lee es una función anónima y se pasa como parámetro el valor del objeto obj.counter.
            Y como segundo valor, serán los valores nuevo y anteriores, que se imprimirán en la consola cada vez que se cambie el valor.
        */
        watch(
        () => obj.counter,
        (valorNuevo, anterior) => {
            console.log(valorNuevo, anterior);
        }
        );

        return { obj, };
    },
};
</script>
