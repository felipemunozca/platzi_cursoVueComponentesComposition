<!-- 
    N_6.1: Se crea la vista del componente raíz, en esta clase haremos un menu desplegable.
    Lo primero sera agregar un botón que va a ocultar y mostrar el menu. El botón tendrá un evento para escuchar el click que 
        cambiara una variable booleana y pasar su valor de verdadero a falso y viceversa.

    N_6.4: Se llama al componente Menu, el plugin snippet nos puede ayudar a crear código agregando la linea de import dentro de 
        la etiqueta <script>

    N_6.5: Al componente <Menu> se le agrega la directiva v-if para crear una condición con la variable show.
    
    N_6.6: Otra forma de aplicar la misma lógica, es con la directiva v-show que es mas recomendable ya que asi evitamos montar y 
        desmontar el componente del DOM, sino que solo lo mostramos y ocultamos con CSS.

    N_6.7: Para agregar la animación de desvanecimiento, lo primero sera envolver el componente <Menu> dentro del componente 
        <transition> y para definir la transición lo mínimo es agregarle un nombre que sera fade.
-->
<template>
    <button @click="show = !show">Menu</button>
    <transition name="fade">
        <!-- <Menu v-if="show" /> -->
        <Menu v-show="show" />
    </transition>
</template>

<script>
import Menu from "./components/MenuComponent.vue";

export default {
    name: "App",
    components: { Menu },
    /**
     * N_6.2: Se crea la variable booleana show, que por defecto tendrá el valor de falso.
     */
    data() {
        return {
            show: false,
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

/**
    N_6.8: Para crear clases en Vue.js de entrada espera que sean creadas utilizando nombres específicos.
    Por ejemplo, cuando se crea una galería de imágenes con botones de avanzar y retroceder, cuando un elemento "entra" se vuelve 
        visible y cuando "sale" se oculta.
    Ademas, las transiciones tienen 3 tiempos: 
        - el momento que inicia la transición.
        - el momento cuando sucede la transición, cuando esta activa.
        - el momento cuando termina la transición.
    Todos estos conceptos se deben comprender para crear las reglas CSS.

    N_6.9: Se llama a la transición fade y se crea la regla.
    Cuando la animación sale (leave-to) o cuando el elemento este por aparecer (enter-from) la opacidad sera de cero.
*/
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/*
    N_6.10: Cuando el elemento aparezca con el leave o cuando aparezca con el enter, la opacidad sera de 0.5
*/
.fade-leave-active,
.fade-enter-active {
    transition: opacity 0.5s ease;
}

li {
    list-style: none;
}
</style>
