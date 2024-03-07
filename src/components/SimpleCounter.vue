<template>
  <div class ="simple-counter">
    <p>Component with Vue CLI configuration</p>
    <button @click="increment">Increment</button>
    <span>{{ count }}</span>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    };

    const decrement = () => {
      count.value--;
    };

    return { count, increment, decrement };
  },
};
</script>
  