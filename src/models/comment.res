type comment = {
  id: string,
  comment: string,
  createdAt: Js.Date.t,
}

type create_comment = {
  id: string,
  comment: string,
  createdAt: float,
}

let createComment = ({id, comment, createdAt}: create_comment): comment => {
  {
    id,
    comment,
    createdAt: Js.Date.fromFloat(createdAt),
  }
}

type firestore_comment = {
  comment: string,
  createdAt: float,
}

let toFirestore = (comment: comment): firestore_comment => {
  open Js.Date
  {
    comment: comment.comment,
    createdAt: comment.createdAt->getTime /. 1000.0,
  }
}

type comment_data = {
  id: string,
  comment: string,
  createdAt: Util.has_seconds,
}

let fromFirestore = (snapshot: Snapshot.t, options: Snapshot.options) => {
  let data = snapshot->Snapshot.data(options)
  createComment({
    id: snapshot.id,
    comment: data.comment,
    createdAt: data.createdAt.seconds *. 1000.0,
  })
}

type comment_converter = {
  toFirestore: comment => firestore_comment,
  fromFirestore: (Snapshot.t, Snapshot.options) => comment,
}

let commentConverter = {toFirestore, fromFirestore}
