import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default class FirebaseAuthService {
  #auth;
  #user;

  constructor(firebaseApp) {
    this.#auth = getAuth(firebaseApp);
    this.#user = null;
  }

  async signIn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.#auth,
        email,
        password,
      );
      this.#user = userCredential.user;
    } catch {
      throw new Error("Failed to sign-in user");
    }
  }

  get user() {
    return this.#user;
  }
}
