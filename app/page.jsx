"use client";
import React from "react"; // Import the React package
import { motion } from "framer-motion"; // Import the motion package
import Feed from "@components/Feed";

const Home = () => {
  const text = "Infinite Prompts for Every Idea.";

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Share & Discover
          <br />
          <div className="text-blue-400 text-center">
            <motion.div>
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </h1>
        <p className="desc text-center">
          Welcome to the ultimate hub for creative minds! Our prompt library web
          app is designed to inspire writers, artists, and thinkers with an
          endless stream of prompts tailored to ignite your imagination. Dive
          into a world where every click brings you closer to your next great
          idea.
        </p>
        <Feed />
      </section>
    </motion.div>
  );
};

export default Home;
