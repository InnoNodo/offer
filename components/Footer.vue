<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from "../components/NavigationBar.vue";



export default defineComponent({
  name: "Footer",
  components: {NavigationBar},

})
</script>

<template>
  <footer class="footer">
    <NavigationBar/>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-content: center;
  justify-content: center;
  bottom: auto;
}
</style>
