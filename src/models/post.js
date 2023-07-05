export function createPost({ id, title, content, createdAt, updatedAt }) {
  return {
    id,
    title,
    content,
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt),
  };
}

export const postConverter = {
  toFirestore: (post) => {
    return {
      title: post.title,
      content: post.content,
      createdAt: post.createdAt.getTime() / 1000,
      updatedAt: post.updatedAt.getTime() / 1000,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return createPost({
      id: snapshot.id,
      title: data.title,
      content: data.content,
      createdAt: data.createdAt.seconds * 1000,
      updatedAt: data.updatedAt.seconds * 1000,
    });
  },
};
