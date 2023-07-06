export function createComment({ id, comment, createdAt }) {
  return {
    id,
    comment,
    createdAt: new Date(createdAt),
  };
}

export const commentConverter = {
  toFirestore: (comment) => {
    return {
      comment: comment.comment,
      createdAt: comment.createdAt.getTime() / 1000,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return createComment({
      id: snapshot.id,
      comment: data.comment,
      createdAt: data.createdAt.seconds * 1000,
    });
  },
};
