import { defineStore } from "pinia";
import { BehaviorSubject } from "rxjs";

interface State {
  theme: BehaviorSubject<string>;
}

export const useSiteSettingsStore = defineStore("siteSetting", {
  state: (): State => {
    return {
      theme: new BehaviorSubject<string>("teal"),
    };
  },
  getters: {},
  actions: {
    switchTheme(theme: string) {
      this.theme.next(theme);
      console.log("new theme aplied: ", this.theme.value);
    },
  },
});
