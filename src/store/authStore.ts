import { defineStore } from "pinia";
import {
  auth,
  createNewUser,
  signInUser,
  signOutUser,
} from "../assets/firebase";
import router from "../router";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    authModalShow: false,
    userLoggedIn: false,
  }),
  actions: {
    toggleAuthModal() {
      this.authModalShow = !this.authModalShow;
    },
    toggleUserLogged() {
      this.userLoggedIn = !this.userLoggedIn;
    },
    async register(payload: any) {
      const credentials = await createNewUser(payload);
      if (credentials) {
        this.toggleUserLogged();
      }
    },
    async login(payload: any) {
      const credentials = await signInUser(payload);
      if (credentials) {
        console.log("I logged");
        this.toggleUserLogged();
      }
    },
    initLogin() {
      const user = auth.currentUser;
      if (user) {
        this.toggleUserLogged();
      }
    },
    async signOut() {
      await signOutUser();
      this.toggleUserLogged();
      router.go(0);
    },
  },
});
