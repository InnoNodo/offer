<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "DefaultLayout",
})
</script>

<template>
  <div>
    <Header />
      <NuxtPage />
    <Footer />
  </div>
</template>

<style scoped>
NuxtPage {
  background-color: aqua;
}
</style>
