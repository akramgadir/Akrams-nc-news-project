import { fetchArticleById, getCommentsByArticleId } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const SingleArticle = () => {
    const {article_id} = useParams()
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

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

//GETcOOMMNETS BY ARTICLE ID NEEDS TO BE IN A USE EFFECT, ALONG WITH THE THEN AND CATCH BLOCKS
    
const handleOpenComments = () => {
        getCommentsByArticleId(article_id)
    .then((comments) => {
        console.log('comments are here: ',comments)
        setComments(comments)
        setShowComments(true)
    })
    .catch((error) => {
        console.error("Error fetching comments:", error);
        setIsLoading(false);

      });
  }


  if (isLoading) {
    return <p>loading...</p>;
  }
  // const renderComments = (comments) => {
  //   console.log(comments, 'entered true function')
  //   setShowComments(true)
  //   if (comments.comments.length!==0) {
  //      comments.comments.map((comment)=> {
  //       comment.body
  //      })
  //   }
  //       return (

  //   <>
  //   comments pressed
  //   </>)

    
  //   }

  const renderComments = () => {
    if (showComments) {
      if (comments.length !== 0) {
        return (
          <div className="comments">
            <h3>Comments:</h3>
            {comments.comments.map((comment) => (
              <div key={comment.comment_id}>
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
        );
      } else {
        return <p>No comments available.</p>;
      }
    }
    return null; // Return null if showComments is false
  };
  
    return (
        <>
          <h2 className='articles-title'>Article - {article.title}</h2>
          <div className="single-article">
            <p>{article.author}</p>
            <img className='article-image' src={article.article_img_url} alt="" />

        <button className="open-comments-button" onClick={handleOpenComments}>Open Comments</button>
        {showComments && (
          <div className="comments">
            <h3>Comments:</h3>
            {comments.length !== 0 ? (
              comments.comments.map((comment) => (
                <div key={comment.comment_id}>
                  <p>{comment.body}</p>
                </div>
              ))
            ) : (
              <p>No comments available.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SingleArticle;