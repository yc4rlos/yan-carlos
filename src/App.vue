<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Shortcuts from './components/Shortcuts.vue'
</script>

<template>
  <Navbar />
  <main>
    <div class="content">
      <router-view />
    </div>
  </main>
  <Shortcuts />
</template>

<style>
main {
  padding: 100px 10%;
  min-height: 100vh;
  height: max-content;
  background-image: url('src/assets/images/background-rock.jpg');
  background-size: cover;
}

main.content {
  max-width: 1366px;
}
</style>
