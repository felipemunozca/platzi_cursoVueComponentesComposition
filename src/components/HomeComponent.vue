<template>
  <!-- <div>{{ text }}</div> -->
  <!-- <div>{{ counter }}</div> -->
  <div>{{ obj.counter }}</div>
</template>

<script>
import { ref } from "vue";
import { reactive } from "vue";

export default {
  setup() {
    // const text = ref("Hola Vue con ref");
    // text.value
    // return { text }
    
    // const counter = ref(0)
    // setInterval(() => counter++, 500);
    // return { counter, };
    
    const obj = reactive({ counter: 0 });
    setInterval(() => obj.counter++, 500);
    return { obj, };
  },
};
</script>
