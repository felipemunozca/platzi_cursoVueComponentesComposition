<!--
    N_20.1: Continuamos con el código de la clase anterior.
    Se agrega un nuevo elemento botón dentro del template y a este se le agregara una referencia llamada btn.
-->
<template>
    <div>{{ fullName }}</div>
    <div>{{ username }}</div>
    <button ref="btn">Click!</button>
</template>

<script>
/**
 * N_20.3: Se importa la función ref que pertenece a vue.
 */
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

        /**
         * N_20.2:Con las option API el código hubiese sido algo asi:
         * this.$refs.btn;
         * 
         * Sin embargo, la linea anterior no es posible con composition API porque la función setup() se ejecuta antes de todos 
         *      los ciclos de vida, por lo tanto, no se ha montando el componente y no se puede acceder a ese elemento.
         * Entonces, ¿Que debería hacer?
         * La respuesta es: crear una variable utilizando ref
         *
         * N_20.4: Se crea una nueva constante btn la cual sera igual a la función ref() y por convención, se le pasa un valor null.
         *
         * N_20.6: Ya que la variable fue exportada fuera de setup, se podrá utilizar en el template, y cuando se presione el 
         *      botón, el valor de ref() deberá cambiar.
         * Para probar lo anterior, se utiliza la consola para mostrar el valor de btn utilizando .value
         * Al recargar la pagina, en la consola aparecerá el valor null por defecto ya que la función setup() se ejecuta antes del 
         *      ciclo de vida, por lo que lee la instrucción e imprime el valor de ref().
         * Al presionar el botón, no pasa nada, esto porque hace falta un watcher que este escuchando el evento clic.
         */
        const btn = ref(null);
        console.log(btn.value);

        /**
         * N_20.7: Se crea un watch sobre la variable btn para obtener su valor.
         * Dentro se agrega un mensaje para mostrar por consola.
         * IMPORTANTE: se debe importar la función watch, de lo contrario, se produce un error.
         */
        watch(btn, (valor) => {
            console.log(valor);
        });

        /**
         * N_20.5: Luego de crear la variable btn, ya se puede exportar, para que este accesible en el template.
         */
        return {
            fullName,
            username,
            btn,
        };
    },
};
</script>