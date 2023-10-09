import {
  getFirestore,
  collection,
  getDocs,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { commentConverter } from "../models/comment.bs.js";

export default class FirebaseCommentsService {
  #db;

  constructor(firebaseApp) {
    this.#db = getFirestore(firebaseApp);
  }

  /**
   * @return All comments for the given postId.
   */
  async commentsForPost(postId) {
    const collRef = collection(
      this.#db,
      "posts",
      postId,
      "comments"
    ).withConverter(commentConverter);
    const snapshot = await getDocs(collRef);
    const comments = [];
    snapshot.forEach((doc) => comments.push(doc.data()));
    comments.sort((c1, c2) => c2.createdAt.getTime() - c1.createdAt.getTime());
    return comments;
  }

  async createCommentForPost(postId, comment) {
    const commentId = uuidv4();
    const docRef = doc(this.#db, "posts", postId, "comments", commentId);
    await setDoc(docRef, {
      comment,
      createdAt: serverTimestamp(),
    });
  }
}
