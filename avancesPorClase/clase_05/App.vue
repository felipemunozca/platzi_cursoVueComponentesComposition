<!--  
    N_5.1: Volvemos al ejemplo básico de la clase anterior. 
    En el navegador, buscar e instalar la extension vue.js devtools
    https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
    Se recomienda instalar esta extension en el navegador google chrome. 
    Una vez instalada, levantar el proyecto nuevamente. 
    Clic derecho sobre la pagina y seleccionar inspeccionar, dentro del menu de opciones de DevTools de Chrome, buscar la que se llama
        Vue, dentro podre ver la cantidad de paginas creadas, la cantidad de componentes asi como las variables reactivas. 
    
    N_5.2: Para comprobar como funciona el transpilador de Vue, en la consola ejecutar el comando: 
    > npm run build
    Creara la carpeta dist y dentro archivos con todo el código que hemos visto hasta ahora, de forma mirificada. 
    Por configuración del archivo .gitignore la carpeta dist no se subirá al repositorio en GitHub. 
-->
<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
</template>

<script>
/**
 * N_5.3: No siempre es necesario que todos los componentes o el contenido de una aplicación cargue toda al mismo tiempo, sino que 
 *      se puede dar prioridad a que primero cargue lo mas importante, y luego lo demás (Esto se hace indispensable en aplicaciones 
 *      muy grandes).
 * Para este tipo de casos, Vue.js cuenta con los componentes asíncronos.
 * Lo primero es importar una función de Vue llamada defineAsyncComponent.
 * Luego, no se importara el componente de la forma que estábamos viendo hasta ahora, sino que se creara una constante la cual sera 
 *      igual al método defineAsyncComponent y utilizando una función flecha, se agrega el import del componente.
 * IMPORTANTE: Eslint mostrara un error si se escribe el código como el profesor, todo en una linea, se debe seguir la ayuda de 
 *      Eslint y utilizar los espaciados y enter necesarios para que quede formateado a 3 lineas. De no hacerlo asi, se producirá un 
 *      error y el servidor se caerá.
 */
import { defineAsyncComponent } from "vue";

const HelloWorld = defineAsyncComponent(() =>
    import("./components/HelloWorld.vue")
);

export default {
    name: "App",
    components: {
        HelloWorld,
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
</style>
