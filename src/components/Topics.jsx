import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Topics.css';
import { fetchTopics } from '../../utils/api';

const Topics = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchTopics()
            .then((topicsFromAPI) => {
                setIsLoading(false);
                setTopics(topicsFromAPI);
            })
            .catch((error) => {
                console.error("Error fetching topics:", error);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="topics-container">
            <h2>Explore Topics</h2>
            <ul className="topics-list">
                {topics.map((topic) => (
                    <li key={topic.slug}>
                        <Link className='topic-link' to={`/Topics/${topic.slug}`}>{capitalizeFirstLetter(topic.slug)}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Topics;
