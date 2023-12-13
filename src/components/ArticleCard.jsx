import React from 'react';
import './ArticleCard.css';
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    return (
        <div className="article-card">
            <h3>Article:</h3>
            <Link to={`/article/${article.article_id}`}>
                <p>{article.title}</p>
                <img className='article-card-image' src={article.article_img_url} alt={article.title} />
            </Link>
            <p>Topic - {article.topic}</p>
        </div>
    );
};

export default ArticleCard;
