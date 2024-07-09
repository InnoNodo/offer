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
  position: relative;
  bottom: 0;
  align-content: end;
  justify-content: center;
  font-size: 20px;
  padding: 10px;
  background-color: #f1f1f1;
}
</style>
