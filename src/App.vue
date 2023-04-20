<template>
  <main>
    <navbar v-model:language="language" />
    <div class="content">
      <Transition name="fade" mode="out-in">
        <router-view :language="language">
        </router-view>
      </Transition>
    </div>
  </main>
  <shortcuts />
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
import Shortcuts from './components/Shortcuts.vue';
export default {
  components: {
    Navbar,
    Shortcuts
  },
  data() {
    return {
      language: 'english'
    }
  }
}
</script>


<style>
main {
  display: flex;
  justify-content: center;
  padding: 100px 10%;
  min-height: 100vh;
  height: max-content;
  background-image: url('./assets/images/background-rock.jpg');
  background-size: cover;
  width: 100vw;
}

.content {
  max-width: var(--max-width);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
