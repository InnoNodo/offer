<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Footer"
})
</script>

<template>
  <footer class="footer">
    Footer content
  </footer>
</template>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  font-size: 20px;
  padding: 10px;
  background-color: #f1f1f1;
}
</style>
