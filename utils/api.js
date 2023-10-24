import axios from "axios";

export const fetchAllArticles = () => {
  return axios
    .get(`https://akram-nc-news.onrender.com/api/articles`)
    .then((response) => {
      //console.log("response:", response.data.articles);
      return response.data.articles;
    });
};

export const fetchTopics = () => {
  return (
    axios
      .get(`https://akram-nc-news.onrender.com/api/topics`)
      //   .get(`../backend/be-nc-news/db/data/development-data/topics.js`)
      .then((response) => {
        return response.data.topics;
      })
  );
};
