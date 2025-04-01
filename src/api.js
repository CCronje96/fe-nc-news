import axios from "axios";

const api = axios.create({
  baseURL: "https://back-end-nc-news-pi4w.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getUsers = () => {
  return api.get("/users").then(({ data }) => {
    return data.users;
  });
};
