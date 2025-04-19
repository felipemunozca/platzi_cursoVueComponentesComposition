<!-- 
    N_7.1: Se limpia el archivo App.vue y se deja con la configuración minima.
    Se eliminan los componentes creados en clases anteriores.
    Se crea un nuevo componente llamado ModalComponent.vue
    Como convención en Vue, los componentes son nombrados con la primera letra en Mayúscula.
    
    N_7.3: Se agrega el componente Modal dentro del template.
-->
<template>
    <div>
        <Modal />
    </div>
</template>

<script>
/**
 * N_7.4: Si los plugins de Vue funcionan correctamente, la linea con el import se agregara de forma automática.
 * Ademas se agregara el nombre Modal dentro de la sección components:{}.
 */
import Modal from "./components/ModalComponent.vue";

export default {
    name: "App",
    components: {
        Modal,
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
