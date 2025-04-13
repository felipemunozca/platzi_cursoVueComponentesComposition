<template>
  <div>Hola utilizando Composition API</div>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      console.log("mounted!");
    });
  },
};
</script>
