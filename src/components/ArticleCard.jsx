import { Link } from "react-router-dom";

const ArticleCard = ( props ) => {
    // console.log(props,"articleCard props");
    return (
      <div className="article-card">
        <h3>Article:</h3>
        <Link to={`/article/${props.article.article_id}`}>
        <p>{props.article.title}</p>
        </Link>
        <p>Topic - {props.article.topic}</p>
    </div>
  );
};

  
  export default ArticleCard;