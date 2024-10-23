// pages/restaurant.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const restaurants = [
    {
        name: 'Cozy Cafe',
        description: 'A warm and inviting cafe that offers a delightful selection of pastries, coffee, and light meals.',
        image: '/bakery1.jpg',
    },
    {
        name: 'Gourmet Kitchen',
        description: 'An upscale restaurant featuring gourmet dishes made with fresh, locally sourced ingredients.',
        image: '/bakery2.jpg',
    },
    {
        name: 'Pasta Paradise',
        description: 'A family-owned Italian restaurant known for its authentic pasta dishes and cozy atmosphere.',
        image: '/bakery3.jpg',
    },
];

const Restaurant = () => {
    return (
        <div className="restaurant-page">
            <h1>Our Partner Restaurants</h1>
            <div className="restaurant-container">
                {restaurants.map((restaurant, index) => (
                    <motion.div 
                        key={index}
                        className="restaurant-card"
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image 
                            src={restaurant.image} 
                            alt={restaurant.name} 
                            width={400} 
                            height={300} 
                            className="restaurant-image"
                        />
                        <h2>{restaurant.name}</h2>
                        <p>{restaurant.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Restaurant;
