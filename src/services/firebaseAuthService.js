import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default class FirebaseAuthService {
  #app;
  #auth;
  #user;

  constructor(firebaseApp) {
    this.#app = firebaseApp;
    this.#auth = null;
    this.#user = ref(null);
  }

  get user() {
    return this.#user.value;
  }

  async signIn(email, password) {
    if (this.#auth !== null) {
      return;
    }

    try {
      this.#auth = getAuth(this.#app);
      const userCredential = await signInWithEmailAndPassword(
        this.#auth,
        email,
        password,
      );
      this.#user.value = userCredential.user;
    } catch {
      this.#auth = null;
      throw new Error("Failed to sign-in user");
    }
  }

  async logout() {
    if (this.#auth === null) {
      return;
    }

    await signOut(this.#auth);

    this.#user.value = null;
    this.#auth = null;
  }
}
