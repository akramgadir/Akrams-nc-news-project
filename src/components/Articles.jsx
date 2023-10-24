import { fetchAllArticles } from "../../utils/api";
import { useState, useEffect } from "react";
import Article from "./Article";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //isLoading makes the code wait for the articles to load


  useEffect(() => {
    fetchAllArticles()
      .then((articles) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  if (isLoading) {
    return <p>loading...</p>;
  }
  
    return (
        <>
          <h2 className='articles-title'>All Articles</h2>
          <div className="articles-container">
            <p>Test: Entered Articles.jsx return statement</p>
          {articles.map((article, index) => (
            <>
            <p>Test: each article should appear here</p>
           <Article key={article} article={article}/>
        //index and articles are being passed to props of the Article component
        //key is needed here to give each article card a unique key
        </>
          ))}
          </div>
        </>
      );
    };

export default Articles
