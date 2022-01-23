<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useThemeStore } from "../store/themeStore";
import { useAuthStore } from "../store/authStore";
import { storeToRefs } from "pinia";

const themeStore = useThemeStore();
const { darkMode } = storeToRefs(themeStore);

const authStore = useAuthStore();
const { userLoggedIn } = storeToRefs(authStore);
</script>

<template>
  <!-- Header -->
  <div class="w-full h-16 flex theme-sub transition-colors duration-250">
    <div
      class="w-full lg:max-w-7xl lg:mx-auto p-4 flex items-center justify-between"
    >
      <div class="text-xl">
        <router-link :to="{ name: 'home' }" exact-active-class="no-active"
          ><span class="hidden lg:block font-bold text-black dark:text-white"
            >Music Share App</span
          >
          <span class="block lg:hidden font-bold text-black dark:text-white"
            >M.S.A.</span
          >
        </router-link>
      </div>
      <div class="hidden lg:flex text-lg">
        <button
          @click.prevent="authStore.toggleAuthModal()"
          title="Login or Register"
          class="py-2 px-4 theme-main-hover rounded"
          v-show="!userLoggedIn"
        >
          Login / Register
        </button>
        <router-link
          :to="{ name: 'manage' }"
          title="Manage Musics"
          class="py-2 px-4 theme-main-hover rounded"
          v-show="userLoggedIn"
          >Manage</router-link
        >
        <button
          @click.prevent="authStore.signOut()"
          title="Sign Out"
          class="py-2 px-4 theme-main-hover rounded"
          v-show="userLoggedIn"
        >
          Logout
        </button>
        <router-link
          :to="{ name: 'about' }"
          title="About the App"
          class="py-2 px-4 theme-main-hover rounded"
          >About</router-link
        >
      </div>
      <div class="flex lg:hidden space-x-2 text-3xl">
        <button class="py-1 px-2 theme-main-hover rounded">
          <font-awesome-icon
            :icon="darkMode ? ['fas', 'moon'] : ['fas', 'sun']"
          />
        </button>
        <router-link
          :to="{ name: 'manage' }"
          class="py-1 px-2 theme-main-hover rounded"
        >
          <font-awesome-icon
            :icon="darkMode ? ['fas', 'moon'] : ['fas', 'sun']"
          />
        </router-link>
        <router-link
          :to="{ name: 'about' }"
          class="py-1 px-2 theme-main-hover rounded"
        >
          <font-awesome-icon
            :icon="darkMode ? ['fas', 'moon'] : ['fas', 'sun']"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
