import axios from "axios";

const api = axios.create({
  baseURL: "https://back-end-nc-news-pi4w.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export const getUsers = () => {
  return api.get("/users").then(({ data: { users } }) => {
    return users;
  });
};

export const getArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data: { article } }) => {
    return article;
  });
};

export const getComments = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};
