<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NavigationBar"
})
</script>

<template>
  <div class="navigation-bar">
    <button>Cart</button>
    <button>Pivo</button>
    <button>Home</button>
  </div>
</template>

<style scoped>
.navigation-bar {
  display: flex;

  background-color: white;
  border-top-left-radius: 5px;
  gap: 5px;
  border-top-right-radius: 5px;
  border: none;

}

button {

  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: none;
}
</style>