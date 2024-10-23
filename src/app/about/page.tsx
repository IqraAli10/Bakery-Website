"use client"; // Ensure this is included at the top of your component

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className="about-container">
        <div className="about-content">
          <h1>Welcome to Cozy Bakery</h1>
          <p>
            At Cozy Bakery, we bake with love! From freshly made cakes to delicious pastries,
            we are passionate about bringing the finest baked goods to your table. With a 
            focus on quality, we use only the best ingredients to ensure every bite is a 
            delight. Whether you&apos;re celebrating a special occasion or just craving something 
            sweet, Cozy Bakery is here to satisfy your sweet tooth.
          </p>
        </div>
        <div className="about-images">
          <Image src="/cupcake.jpg" alt="Fresh Bakery Items" width={400} height={300} />
          <Image src="/pancake.jpg" alt="Delicious Cakes" width={400} height={300} />
          <Image src="/waffles.jpg" alt="Cupcakes" width={400} height={300} />
        </div>
      </div>

      <div className="about-values">
        <h2>Our Values</h2>
        <p>
          At Cozy Bakery, we believe in delivering fresh, high-quality products that make
          every occasion memorable. Our team is dedicated to crafting every order with precision,
          creativity, and passion for baking. Your satisfaction is our top priority!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
