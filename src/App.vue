<template>
  <div>
    <Modal />
  </div>
</template>

<script>
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
