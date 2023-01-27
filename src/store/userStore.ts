import { defineStore } from "pinia";
import { auth } from "@/firebase/intex";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import type { UserCredential, UserInfo } from "firebase/auth";
import { BehaviorSubject } from "rxjs";

interface State {
  user: UserInfo | null;
  isAuthenticated: BehaviorSubject<boolean>;
}

export const useUserStore = defineStore("user", {
  state: (): State => {
    return {
      user: null as UserInfo | null,
      isAuthenticated: new BehaviorSubject<boolean>(false),
    };
  },
  getters: {},
  actions: {
    async logIn(email: string, password: string) {
      try {
        const userCredential: UserCredential =
          await await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
        if (this.user.uid) {
          this.isAuthenticated.next(true);
        }
        console.log(`Welcome back ${this.user.displayName}!`);
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async logOut() {
      this.isAuthenticated.next(false);
      await signOut(auth);
    },
  },
});
