<template>
  <!-- <div>Nombre completo: {{ firstName }} {{ lastName }}</div> -->
  <div>Nombre completo: {{ fullName }}</div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const firstName = ref("Felipe");
    const lastName = ref("Muñoz");

    const fullName = computed(() => {
      return `${firstName.value} ${lastName.value}`;
    });

    return {
      // firstName,
      // lastName,
      fullName,
    };
  },
};
</script>
