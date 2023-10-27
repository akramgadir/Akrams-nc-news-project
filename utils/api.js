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
  return axios
    .get(`https://akram-nc-news.onrender.com/api/topics`)
    .then((response) => {
      return response.data.topics;
    });
};

export const fetchArticleByTopic = (topic) => {
  return axios
    .get(`https://akram-nc-news.onrender.com/api/articles/?topic=${topic}`)
    .then((response) => {
      return response.data.articles;
    });
};

export const fetchArticleById = (article_id) => {
  return axios
    .get(
      `https://akram-nc-news.onrender.com/api/articles/?article_id=${article_id}`
    )
    .then((response) => {
      return response.data.articles[article_id];
    });
};

//finish this function
export const getCommentsByArticleId = (article_id) => {
  return axios
    .get(
      `https://akram-nc-news.onrender.com/api/articles/${article_id}/comments`
    )
    .then((response) => {
      return response.data;
    });
};

export const updateVotes = (article_id, newVoteCount) => {
  return axios
    .patch(`https://akram-nc-news.onrender.com/api/articles/${article_id}`, {
      inc_votes: newVoteCount, //sending the new vote count
    })
    .then((response) => {
      console.log(
        "api for updateVotes response data",
        response.data.articles.votes
      );
      return response.data.articles.votes;
    });
};

export const voteUpArticleById = (article_id) => {
  return axios
    .patch(`https://akram-nc-news.onrender.com/api/articles/${article_id}`, {
      inc_votes: 1,
    })
    .then((response) => {
      return response.data;
    });
};

export const voteDownArticleById = (article_id) => {
  return axios
    .patch(`https://akram-nc-news.onrender.com/api/articles/${article_id}`, {
      inc_votes: -1,
    })
    .then((response) => {
      //   console.log(response, "res in api, vote down");
      return response.data;
    });
};
