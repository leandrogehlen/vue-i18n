import { createApp as vueCreateApp } from "vue";
import App from "./App.vue";

export function createApp() {
  return vueCreateApp(App);
}
