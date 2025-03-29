<!--  
  N_4.1: El archivo app.vue es nuestro componente principal.
  Esta conformado por las etiquetas:
  <template>
  <script>
  <style>
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!--  
    N_4.4: Se reemplaza el nombre del componente por defecto por el escrito como variable para probar si el mensaje se imprime igual al levantar el servidor.
  -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <Saludo msg="Welcome to Your Vue.js App" /> -->
  <!--  
    N_4.6: Si tengo un segundo componente, que quiero que se muestre o no dependiendo de una acción de un usuario se muestre uno o el otro.
    Vue.js nos provee de un componente genérico llamado <component> que tiene un atributo especial llamado ":is" que al utilizar el snippet de Vue solo lo agrega con dos puntos, pero se puede ver declarado también con la directiva v-bind:is. Se le debe agregar una variable que luego se agregara dentro de data().
  -->
  <component :is="miComponente"></component>
</template>

<script>
/*  
  N_4.2: Cuando se importa un componente se hace desde la carpeta components y se debe agregar con el nombre completo agregando la extension.
  Luego dentro del json de export por defecto, se declara este componente para poder dejarlo utilizable dentro del template.
  Se pueden agregar diferentes componentes a la vez, no olvidar separarlos por comas.
* 
  N_4.3: Algunas veces puede existir ambigüedades al utilizar componentes con nombres parecidos, por lo que se puede asignar un nuevo nombre a un componente y luego llamarlo como se si tratara de una variable.
  Se asi el nombre "Saludo" al componente HelloWorld.
*/
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    Saludo: HelloWorld,
  },
  /*
    N_4.7: Se agrega la función data() para agregar la nueva variable que se utilizara en el componente. Este retornara el valor que tiene Saludo y para probar si funciona, se comenta el código donde se llama a este componente Saludo.
  */
  data() {
    return {
      miComponente: "Saludo",
    };
  },
};
</script>

<!--  
  N_4.5: Dentro de la estructura del componente principal, la etiqueta style se encarga de definir el CSS. 
  Un dato muy importante a considerar, es que si se crea una regla CSS para una etiqueta, por ejemplo un <h1> que tenga el texto rojo, se aplicara para todas etiquetas <h1> del proyecto. Para hacer que solo se apliquen las reglas dentro de este componente, se debe agregar la propiedad scope a la etiqueta. 
  Ej: <style scope>
-->
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
