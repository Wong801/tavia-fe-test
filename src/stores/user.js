import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: null,
    token: null,
    event: null,
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    async login(payload) {
      const { data } = await axios.post("/api/v1/authenticate", payload);
      if (data.status !== "success") return false;
      this.token = data.data;
      return true;
    },
    async register(payload) {
      const { data } = await axios.post("/api/v1/register", payload);
      if (data.status !== "success") return false;
      this.user = data.data.user;
      this.event = data.data.event;
      return true;
    },
    async logout() {
      this.user = null;
      this.token = null;
      this.event = null;
      return true;
    },
  },
  persist: {
    user: "user",
    token: "token",
    event: "event",
  },
});
