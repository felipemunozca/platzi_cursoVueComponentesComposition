<!-- 
    N_14.4: Se llama a la variable text y no es necesario utilizar el value.
  * 
    N_14.7: Se llama a la variable counter para ver como cambia su valor de forma reactiva.
  * 
    N_10.10: Se llama a la variable obj y a su propiedad counter.
-->
<template>
    <!-- <div>{{ text }}</div> -->
    <!-- <div>{{ counter }}</div> -->
    <div>{{ obj.counter }}</div>
</template>

<script>
/*
    N_14.1: Se importa la función ref que forma parte de vue.
    Esta función ref nos va a permitir generar una referencia reactiva a un dato variable.
  * 
    N_14.9: Se importa la función reactive que forma parte de vue.
    Esta función hace lo mismo que ref, pero esta optimizada para trabajar con objetos y multiples valores al mismo tiempo.
*/
import { ref } from "vue";
import { reactive } from "vue";

export default {
    setup() {
        /*
            N_14.2: Se crea una constante que sera igual a la función ref() y dentro se le asigna un valor. Puede ser un numero o una 
                cadena de texto.
        * 
            N_14.3: Ahora puedo leer o escribir la variable, para esto:
            llamar a la variable con el elemento value y asi se podrá utilizar o asignar un nuevo valor.
            Para utilizar esta variable fuera de setup, se debe utilizar el return y con eso queda disponible para el resto del 
                componente incluido el template.
        */
        // const text = ref("Hola Vue con ref");
        // text.value
        // return { text }
        
        /*
            N_14.5: Se crea un nuevo tipo de constante que sera un contador.
            Sera igual a la función ref() y tendrá el valor inicial de cero.
        *  
            N_14.6: Utilizando vanilla javascript, se llama a la función setInterval() y dentro tendrá una función flecha que hará 
                aumentar el valor de counter cada 500 milésimas.
            Si se levanta el servidor, el contador comenzara a aumentar de forma automática desde cero.
        */
        // const counter = ref(0)
        // setInterval(() => counter++, 500);
        // return { counter, };
        
        /*
            N_14.8: Y ¿Que pasaría si no tenemos una variable reactiva?
            Por ejemplo, si se necesita utilizar un JSON.
            Se crea un objeto se puede agregar directamente dentro de los paréntesis, pero un punto muy importante a tener en 
                consideración es que al utilizar objetos, se debe utilizar la función reactive() de vue.
            Se ajusta la función set interval para llamar al objeto obj y luego a la propiedad counter.
            Finalmente, se retorna obj.
        */
        const obj = reactive({ counter: 0 });
        setInterval(() => obj.counter++, 500);
        return { obj, };
    },
};
</script>
