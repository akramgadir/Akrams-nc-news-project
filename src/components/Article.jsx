
const Article = ( props ) => {
    // console.log(props,"article props");
    return (
      <div className="article">
        <h3>Article:</h3>
        <h3>{props.article.title}</h3>
        <p>Topic: {props.article.topic}</p>
    </div>
  );
};

  
  export default Article;