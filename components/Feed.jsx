"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTimeOut, setSearchTimeOut] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const [posts, setPosts] = useState([]);
  // Fetch posts from the server

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  // Filter the prompts based on the search text in the prompt and tag fields
  const filterPrompts = (text) => {
    const regex = new RegExp(text, "i"); // case-insensitive match for the text in the prompt and tag fields
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeOut);
    setSearchText(e.target.value);

    // Set a timeout to wait for the user to stop typing
    setSearchTimeOut(
      setTimeout(() => {
        setSearchedResults(filterPrompts(e.target.value));
      }, 600)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    const result = filterPrompts(tagName);
    setSearchedResults(result);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          className="search_input peer ml-2"
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>

      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
