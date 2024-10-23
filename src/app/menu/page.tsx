"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const menuItems = [
  {
    id: 1,
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake topped with chocolate ganache.",
    price: "$25",
    image: "/birthday cake.jpg",
  },
  {
    id: 2,
    name: "Vanilla Cupcakes",
    description: "Light and fluffy vanilla cupcakes with buttercream frosting.",
    price: "$15",
    image: "/raspberry cake.jpg",
  },
  {
    id: 3,
    name: "Fruit Tart",
    description: "Fresh seasonal fruits atop a creamy custard in a flaky crust.",
    price: "$20",
    image: "/donut.jpg",
  },
  {
    id: 4,
    name: "Muffins",
    description: "Creamy cheesecake on a graham cracker crust with a hint of lemon.",
    price: "$22",
    image: "/muffins.jpg",
  },

  {
    id: 1,
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake topped with chocolate ganache.",
    price: "$25",
    image: "/birthday cake.jpg",
  },
  {
    id: 3,
    name: "Fruit Tart",
    description: "Fresh seasonal fruits atop a creamy custard in a flaky crust.",
    price: "$20",
    image: "/donut.jpg",
  },
  // Add more items as needed
];

const Menu = () => {
  return (
    <motion.div 
      className="menu-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-container">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <Image 
              src={item.image} 
              alt={item.name} 
              width={400} 
              height={300} 
              className="menu-image"
            />
            <div className="menu-content">
              <h2 className="item-name">{item.name}</h2>
              <p className="item-description">{item.description}</p>
              <p className="item-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Menu;
