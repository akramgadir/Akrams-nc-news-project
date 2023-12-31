import { useEffect, useState } from "react"
import {useParams } from "react-router-dom"
import { fetchArticleByTopic } from "../../utils/api"
import ArticleCard from "./ArticleCard"
const Topic = () => {
    let {topic} = useParams()
    const [filteredArticles, setFilteredArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
   
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

    useEffect(()=> {
        fetchArticleByTopic(topic)
        .then((filteredArticles)=> {
          // console.log(filteredArticles);
            setIsLoading(false)
            setFilteredArticles(filteredArticles)
        }).catch((error) => {
        console.error("Error fetching articles:", error);
      });
    }, [topic])
    

    if (isLoading) {
        return <p>loading...</p>;
      }

    return (
        <>
        <h2 key={topic} className = 'topic-title'>Topic: {capitalizeFirstLetter(topic)}</h2>
        <div className="articles-container">
      {filteredArticles.map((article, index) => (
       <ArticleCard key={index} article={article}/>
      ))}
      </div>
        </>
    )
}

export default Topic