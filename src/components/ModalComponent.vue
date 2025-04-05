<template>
  <div>
    <button @click="toggle">Modal</button>
    <teleport to="body">
      <div v-show="show" class="modal">
        <h1>Titulo</h1>
        <p>Lorem ipsum dolor</p>
        <button @click="toggle">Cerrar</button>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
.modal {
  background-color: #dceeff;
  padding: 10px;
}
</style>
