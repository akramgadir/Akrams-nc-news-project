import React, { useState, useEffect } from 'react';
import ArticleCard from "./ArticleCard";
import './Articles.css';
import { fetchAllArticles } from '../../utils/api';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



  
    useEffect(() => {
        fetchAllArticles()
            .then((articlesFromAPI) => {

            //   if (isLoading) {
            //     return <div className="loading-bar"></div>;
            // }

                setIsLoading(false);
                setArticles(articlesFromAPI);
                
            })
            .catch((error) => {
                console.error("Error fetching articles:", error);
                setIsLoading(false);
            });
    }, []);


    return (
        <>
            <h2 className='articles-title'>All Articles</h2>
            <div className="articles-grid">
                {articles.map((article) => (
                    <ArticleCard key={article.article_id} article={article} />
                ))}
            </div>
        </>
    );
};

export default Articles;
