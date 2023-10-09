type create_comment = {
  id: string,
  comment: string,
  createdAt: float,
}

type comment = {
  id: string,
  comment: string,
  createdAt: Js.Date.t,
}

let createComment = ({id, comment, createdAt}: create_comment): comment => {
  {
    id,
    comment,
    createdAt: Js.Date.fromFloat(createdAt),
  }
}

let fromFirestore = (snapshot, options) => {
  let data = snapshot["data"](. options)
  createComment({
    id: snapshot["id"],
    comment: data["comment"],
    createdAt: data["createdAt"]["seconds"] *. 1000.0,
  })
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

type comment_converter<'snapshot, 'options> = {
  toFirestore: comment => firestore_comment,
  fromFirestore: ('snapshot, 'options) => comment,
}

let commentConverter = {toFirestore, fromFirestore}
