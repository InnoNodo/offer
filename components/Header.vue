<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Header"
})
</script>

<template>
  <header class="header">
    Main page
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
}
</style>
