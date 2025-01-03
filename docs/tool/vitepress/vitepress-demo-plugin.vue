<template>
  <div>
    <ElButton type="primary" @click="handleClick">Go to GitHub</ElButton>
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  window.open('https://github.com/')
}
</script>
