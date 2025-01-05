<template>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import confetti from 'canvas-confetti';
import { inBrowser } from 'vitepress';

const props = defineProps({
  popup: {
    type: Boolean,
    default: false
  }
})

watch(() => props.popup,
  (newVal) => {
    if (newVal) {
      confetti({
        particleCount: 100,
        spread: 170,
        origin: { y: 0.6 },
      })
    }
  },
  {
    immediate: true
  }
)

// if (inBrowser) {
//   /* 纸屑 */
//   confetti({
//     particleCount: 100,
//     spread: 170,
//     origin: { y: 0.6 },
//   })
// }
</script>
