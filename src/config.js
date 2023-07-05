export default class Config {
  static instance_ = null;

  static get instance() {
    if (Config.instance_ === null) {
      Config.instance_ = new Config();
    }
    return Config.instance_;
  }

  get firebaseConfig() {
    return {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSADING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };
  }

  get authConfig() {
    return {
      adminEmail: import.meta.env.VITE_FIREBASE_ADMIN_EMAIL,
      adminPassword: import.meta.env.VITE_FIREBASE_ADMIN_PASSWORD,
    };
  }
}
