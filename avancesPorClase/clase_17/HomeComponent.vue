<!-- 
    N_17.6: Se agrega el valor de la variable para imprimirlo en el template.
-->
<template>
    <div>Nombre completo: {{ fullName }}</div>
</template>

<script>
/**
 * N_17.4: Se agrega la función toRefs que pertenece a vue.
 * Esta función nos permite recibir un objeto y lo convierte a una referencia reactiva.
 */
import { toRefs, computed } from "vue";

export default {
    /**
     * N_17.2: Para recibir los datos desde el componente, se deben definir las variables que pueden o no tener el mismo nombre, 
     *      seguido del tipo de dato que sera, en este caso, un string (se pueden agregar otro tipo de valores como si tiene un 
     *      valor por defecto, si es requerido, entro otros).
     */
    props: {
        firstName: String,
        lastName: String,
    },
    /**
     * N_17.3: La función setup() recibirá dos argumentos, los props y en la siguiente clase, veremos los context.
     * props es un objeto json por los que se declaran como una constante, utilizando llaves { } y dentro las variables seguido del 
     *      valor de props.
     * Si se deja el código de esta forma, aparecer una alerta en la consola, indicando que aunque el programa funciona, se pierde 
     *      la reactividad, si se cambia el valor del nombre o apellido en App.vue ese nuevo nombre o apellido no se cargaran de 
     *      forma automática y se pierde la reactividad.
     * 
     * N_17.5: La constante con el objeto se iguala a la función toRefs() y dentro del paréntesis se pasan los props que ahora si 
     *      serán reactivos.
     */
    setup(props) {
        // const { firstName, lastName } = props; // Se pierde la reactividad
        const { firstName, lastName } = toRefs(props);

        const fullName = computed(() => {
            return `${firstName.value} ${lastName.value}`;
        });

        return {
            fullName,
        };
    },
};
</script>
