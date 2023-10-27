import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getArticleById, voteUpArticleById, voteDownArticleById } from "../api";

import Comments from "./Comments";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [articleVotes, setArticleVotes] = useState(0);
  const [voteUpDisabled, setVoteUpDisabled] = useState(false);
  const [voteDownDisabled, setVoteDownDisabled] = useState(false);

  const { article_id } = useParams(); //we get this from the path in app.jsx?

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      console.log(articleData, "log of DATA");
      setArticle(articleData);
      setArticleVotes(articleData.article.votes);
      setIsLoading(false);
    });
  }, [article_id]);

  const incVote = () => {
    if (!voteDownDisabled) {
      setArticleVotes(articleVotes + 1);
      voteUpArticleById(article_id);
      setVoteUpDisabled(true);
      setVoteDownDisabled(false);
    } else {
      setArticleVotes(articleVotes + 2);
      voteUpArticleById(article_id);
      voteUpArticleById(article_id);
      setVoteUpDisabled(true);
      setVoteDownDisabled(false);
    }
  };

  const decVote = () => {
    if (!voteUpDisabled) {
      setArticleVotes(articleVotes - 1);
      voteDownArticleById(article_id);
      setVoteUpDisabled(false);
      setVoteDownDisabled(true);
    } else {
      setArticleVotes(articleVotes - 2);
      voteDownArticleById(article_id);
      voteDownArticleById(article_id);
      setVoteUpDisabled(false);
      setVoteDownDisabled(true);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  } else
    return (
      <article>
        <div className="article-container">
          <h3>{article.article.title}</h3>
          <p>
            Topic: {article.article.topic} | Author: {article.article.author}
          </p>
          <img
            src={article.article.article_img_url}
            alt="supplementary image relating to the article"
          ></img>
          <p>
            Published: {article.article.created_at} | Votes: {articleVotes}
          </p>
          <p>{article.article.body}</p>
          <button onClick={incVote} disabled={voteUpDisabled}>
            vote up
          </button>
          <button onClick={decVote} disabled={voteDownDisabled}>
            vote down
          </button>

          <Comments article_id={article_id} />
        </div>
      </article>
    );
};

export default Article;

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

import axios from "axios";

const request = axios.create({
  baseURL: "https://shamm-news-api.onrender.com/",
});

export const getAllArticles = () => {
  return request.get("api/articles").then((response) => {
    console.log(response, "response");
    return response.data;
  });
};

export const getArticleById = (article_id) => {
  return request.get(`api/articles/${article_id}`).then((response) => {
    console.log(response, "log of res");
    return response.data;
  });
};
//is :article_id just a back end thing?

export const getCommentsById = (article_id) => {
  return request.get(`api/articles/${article_id}/comments`).then((response) => {
    // console.log(response, "log of Comments res");
    return response.data;
  });
};

export const voteUpArticleById = (article_id) => {
  return request
    .patch(`api/articles/${article_id}`, { inc_votes: 1 })
    .then((response) => {
      return response.data;
    });
};

export const voteDownArticleById = (article_id) => {
  return request
    .patch(`api/articles/${article_id}`, { inc_votes: -1 })
    .then((response) => {
      //   console.log(response, "res in api, vote down");
      return response.data;
    });
};

// export const postComment = (article_id) => {
//   return request
//     .post(`api/articles/${article_id}/comments`)
//     .send()
//     .then((response) => {
//       return response.data;
//     });
// };