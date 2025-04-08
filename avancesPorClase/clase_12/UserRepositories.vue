<!-- 
    N_12.2: Se crea el archivo UserRepositories que sera un componente.
-->
<template>
    <div>{{ user }} Repositories</div>
</template>

<script>
export default {
    /*
        N_12.4: Se crea un props para obtener un nombre de usuario, sera de tipo string y sera requerido.
    */
    props: {
        user: {
            type: String,
            required: true,
        },
    },
    /*
        N_12.7: Una nueva forma de tomar el control de la organización del código es utilizando Composition API.
        En lugar de tener un objeto JSON separando algo porque sea props, porque sea data, porque sea computed y que esa sea nuestra 
            estructura principal, con la Composition API vamos a poder organizarlo a nuestro propio gusto y asi agruparlo según lo 
            necesite nuestra aplicación y no lo que pide el framework.
     *  
        N_12.8: Lo primero es agregar la función setup(){}.
        Esta función se comporta como un hook de ciclo de vida, pero con la característica que se va a ejecutar antes que cualquier 
            otro hook.
        La función setup() recibe dos argumentos:
            - props: los props del componente.
            - ctx: el contexto del componente.
        Esto lo veremos con mas detalle en las siguientes clases.
        Lo que retornara la función es cualquier cosa que queramos exponer hacia el resto del componente. Por ejemplo: la variable 
            repositories o una función computada.
  */
    setup(props, ctx) {
        return {
            repositories,
        };
    },
    /* 
        N_12.5: Dentro de data() se retorna la lista de repositorios.
        Los filtros para generar búsquedas por valoraciones, nombres, lenguajes.
        Búsquedas por texto utilizando títulos o nombres de proyecto.
    */
    data() {
        return {
            repositories: [], // 1
            filters: {}, // 3
            searchQuery: "", // 2
        };
    },
    /*
        N_12.6: Se crean funciones computadas para que devuelvan todos los repositorios filtrados.
        Otra función computada para realizar búsqueda por texto.
    */
    computed: {
        filteredRepositories() {
            // 3
            return null;
        },
        repositoriesMatchingSearchQuery() {
            // 2
            return null;
        },
    },
};
</script>