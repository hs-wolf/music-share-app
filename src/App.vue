<script setup lang="ts">
import { onMounted } from "vue";
import AppNavbar from "@/components/Navbar.vue";
import AppContainer from "@/components/Container.vue";
import AppAuthModal from "@/components/AuthModal.vue";
import { useAuthStore } from "./store/authStore";

const authStore = useAuthStore();

onMounted(() => {
  authStore.initLogin();
});
</script>

<template>
  <div
    class="min-h-screen flex flex-col theme-main transition-colors duration-250 ease-in-out"
  >
    <app-navbar />
    <app-container>
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="animate__animated animate__fadeInRight animate__faster"
          leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </app-container>
  </div>
  <app-auth-modal />
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto);

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
