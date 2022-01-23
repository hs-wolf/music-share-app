import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
  state: () => ({
    darkMode: false,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      this.darkMode
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
    },
  },
});
