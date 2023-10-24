
const Article = ( props ) => {
    // console.log(props,"article props");
    return (
      <div className="article">
        <h3>Article:</h3>
        <p>{props.article.title}</p>
        <p>Topic: {props.article.topic}</p>
    </div>
  );
};

  
  export default Article;