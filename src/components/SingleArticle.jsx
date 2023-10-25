import { fetchArticleById } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
    const {article_id} = useParams()
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //isLoading makes the code wait for the articles to load


  useEffect(() => {
    fetchArticleById(article_id)
      .then((article) => {
        console.log('single article', article)
        setIsLoading(false);
        setArticle(article);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setIsLoading(false);

      });
  }, [article_id]);

  if (isLoading) {
    return <p>loading...</p>;
  }
  
    return (
        <>
          <h2 className='articles-title'>Article - {article.title}</h2>
          <div className="single-article">
            <p>{article.author}</p>
            <img className='article-image' src={article.article_img_url} alt="" />

        {/* index and articles are being passed to props of the Article component
        key is needed here to give each article card a unique key */}
          </div>
        </>
      );
    };

export default SingleArticle
