import { fetchArticleById, getCommentsByArticleId, updateVotes } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const SingleArticle = () => {
    const {article_id} = useParams()
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [votes, setVotes] = useState(article.votes);

  //isLoading makes the code wait for the articles to load

  useEffect(() => {
    fetchArticleById(article_id)
      .then((article) => {
        console.log('single article', article)
        setIsLoading(false);
        setArticle(article);
        setVotes(article.votes)
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
        // console.log('comments are here: ',comments)
        if (showComments===false) {
        setComments(comments)
        setShowComments(true)}
        if (showComments===true) {
          setShowComments(false)
        }
    })
    .catch((error) => {
        console.error("Error fetching comments:", error);
        setIsLoading(false);

      });
  }
  const handleVotes = () => {
      // optimistically incrementing the votes in the state
  setVotes(votes + 1);
updateVotes((article_id, votes + 1) )
    .then((votes)=>{
      console.log('handleVotes votes: ', votes)
setVotes(votes)
    })
    .catch((error) => {
        console.error("Error fetching comments:", error);
        setIsLoading(false);

      });
  }




  if (isLoading) {
    return <p>loading...</p>;
  }
 
  
    return (
        <>
          <h2 className='articles-title'>Article - {article.title}</h2>
          <div className="single-article">
            <p>{article.author}</p>
            <img className='article-image' src={article.article_img_url} alt="" />
            <p>Votes: {votes}</p>
            <button className="votes-button" onClick={handleVotes}>Vote</button>
        <button className="show-comments-button" onClick={handleOpenComments}>{showComments ? <>Hide Comments</> : <>Show Comments</>}
</button>
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