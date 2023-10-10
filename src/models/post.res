type post = {
  id: string,
  title: string,
  content: string,
  createdAt: Js.Date.t,
  updatedAt: Js.Date.t,
}

type create_post = {
  id: string,
  title: string,
  content: string,
  createdAt: float,
  updatedAt: float,
}

let createPost = ({id, title, content, createdAt, updatedAt}: create_post): post => {
  {
    id,
    title,
    content,
    createdAt: Js.Date.fromFloat(createdAt),
    updatedAt: Js.Date.fromFloat(updatedAt),
  }
}

type firestore_post = {
  title: string,
  content: string,
  createdAt: float,
  updatedAt: float,
}

let toFirestore = (post: post): firestore_post => {
  open Js.Date
  {
    title: post.title,
    content: post.content,
    createdAt: post.createdAt->getTime /. 1000.0,
    updatedAt: post.updatedAt->getTime /. 1000.0,
  }
}

type post_data = {
  title: string,
  content: string,
  createdAt: Util.has_seconds,
  updatedAt: Util.has_seconds,
}

let fromFirestore = (snapshot: Snapshot.t, options: Snapshot.options): post => {
  let data = snapshot->Snapshot.data(options)
  createPost({
    id: snapshot.id,
    title: data.title,
    content: data.content,
    createdAt: data.createdAt.seconds *. 1000.0,
    updatedAt: data.updatedAt.seconds *. 1000.0,
  })
}

type post_converter = {
  toFirestore: post => firestore_post,
  fromFirestore: (Snapshot.t, Snapshot.options) => post,
}

let postConverter = {toFirestore, fromFirestore}
