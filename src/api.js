import axios from "axios";

const api = axios.create({
  baseURL: "https://back-end-nc-news-pi4w.onrender.com/api",
});

export const getUsers = () => {
  return api.get("/users").then(({ data: { users } }) => {
    return users;
  });
};

export const getArticles = (query) => {
  return api
    .get("/articles", { params: { topic: query } })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data: { article } }) => {
    return article;
  });
};

export const patchArticle = (article_id, voteChange) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: voteChange })
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getTopics = () => {
  return api.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

export const getComments = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postComment = (article_id, commentInput, loggedInUser) => {
  return api
    .post(`/articles/${article_id}/comments`, {
      body: commentInput,
      username: loggedInUser,
    })
    .then(({ data: { insertedComment } }) => {
      return insertedComment;
    });
};

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then((response) => {
    return response;
  });
};
