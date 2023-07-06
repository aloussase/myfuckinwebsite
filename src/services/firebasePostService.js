import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { postConverter } from "../models/post.js";

export default class FirebasePostService {
  #db;

  constructor(firebaseApp) {
    this.#db = getFirestore(firebaseApp);
  }

  async findAll({ force } = { force: false }) {
    const collRef = collection(this.#db, "posts").withConverter(postConverter);
    const querySnapshot = await getDocs(collRef);
    const blogPosts = [];
    querySnapshot.forEach((doc) => blogPosts.push(doc.data()));
    return blogPosts;
  }

  async getById(id) {
    const docRef = doc(this.#db, "posts", id).withConverter(postConverter);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error(`Failed to retrieve post: $id`);
    }
  }

  async update(id, { title, content }) {
    try {
      const docRef = doc(this.#db, "posts", id);
      await updateDoc(docRef, {
        title,
        content,
        updatedAt: serverTimestamp(),
      });
    } catch {
      throw new Error("Failed to update post");
    }
  }

  async create({ title, content }) {
    const newId = uuidv4();
    const docRef = doc(this.#db, "posts", newId);
    await setDoc(docRef, {
      title,
      content,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }

  async delete(id) {
    const docRef = doc(this.#db, "posts", id);
    await deleteDoc(docRef);
    return true;
  }
}
