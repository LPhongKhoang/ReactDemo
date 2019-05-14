import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  console.log("Fetching posts...");
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
  fetch(url)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    );
};

export const createPost = newPost => dispatch => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url, {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(newPost)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: NEW_POST,
        payload: data
      })
    );
};
