<template>
  <div>{{ obj.counter }}</div>
</template>

<script>
import { reactive, watch } from "vue";

export default {
  setup() {
    const obj = reactive({ counter: 0 });
    setInterval(() => obj.counter++, 500);

    watch(
      () => obj.counter,
      (valorNuevo, anterior) => {
        console.log(valorNuevo, anterior);
      }
    );

    return { obj, };
  },
};
</script>
