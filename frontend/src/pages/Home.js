import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './Home.css';

const Home = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);

    useEffect(() => {
        const fetchPortfolioItems = async () => {
            try {
                const response = await axios.get('/api/portfolio');
                setPortfolioItems(response.data);
            } catch (error) {
                console.error('Error fetching portfolio items:', error);
            }
        };

        fetchPortfolioItems();
    }, []);

    return (
        <div className="home">
            <h1>My Portfolio</h1>
            <div className="portfolio-items">
                {portfolioItems.map(item => (
                    <div key={item._id} className="portfolio-item">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        {item.imageUrl && <img src={item.imageUrl} alt={item.title} />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;