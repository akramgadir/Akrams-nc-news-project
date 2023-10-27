import { fetchArticleById, getCommentsByArticleId, updateVotes, voteDownArticleById, voteUpArticleById} from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const SingleArticle = () => {
    const {article_id} = useParams()
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [votes, setVotes] = useState(0);
  const [voteUpDisabled, setVoteUpDisabled] = useState(false);
  const [voteDownDisabled, setVoteDownDisabled] = useState(false);

  //isLoading makes the code wait for the articles to load

  useEffect(() => {
    fetchArticleById(article_id)
      .then((article) => {
        console.log('single article', article.votes)
        setArticle(article);
        setVotes(article.votes)
        setIsLoading(false);
   })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setIsLoading(false);

      });
  }, [article_id]);

  const incVote = () => {
    if (!voteDownDisabled) {
      setVotes(votes + 1);
      voteUpArticleById(article_id);
      setVoteUpDisabled(true);
      setVoteDownDisabled(false);
      console.log('incVote: ', votes)
    } else {
      setVotes(votes + 2);
      voteUpArticleById(article_id);
      voteUpArticleById(article_id);
      setVoteUpDisabled(true);
      setVoteDownDisabled(false);
      console.log('incVote else: ', votes)
    }
  };

  const decVote = () => {
    if (!voteUpDisabled) {
      setVotes(votes - 1);
      voteDownArticleById(article_id);
      setVoteUpDisabled(false);
      setVoteDownDisabled(true);
      console.log('decVote: ', votes)

    } else {
      setVotes(votes - 2);
      voteDownArticleById(article_id);
      voteDownArticleById(article_id);
      setVoteUpDisabled(false);
      setVoteDownDisabled(true);
      console.log('decVote else: ', votes)

    }
  };

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
          <button onClick={incVote} disabled={voteUpDisabled}>
            vote up
          </button>
          <button onClick={decVote} disabled={voteDownDisabled}>
            vote down
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