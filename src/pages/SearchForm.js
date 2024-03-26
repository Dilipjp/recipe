// import React from "react";
import React, { Component, useEffect, useState } from "react";

const SearchForm = () => {
    const APP_ID = "334c5b9f";
    const APP_KEY = "3c8b9486e1e3276400218a77896c18e9";
  
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("random");
    useEffect(() => {
      getRecipes();
    }, [query]);
    const getRecipes = async () => {
      const response = await fetch(
        "https://api.edamam.com/search?q=" +
          query +
          "&app_id=" +
          APP_ID +
          "&app_key=" +
          APP_KEY
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
  
    const updateSearch = (e) => {
      setSearch(e.target.value);
      console.log(e.target.value);
    };
    const getSearch = (e) => {
      e.preventDefault();
      setQuery(search);
    };
  return (
    <form onSubmit={getSearch} className="search-form">
    <input
      onChange={updateSearch}
      value={search}
      className="search-bar"
      type="text"
      placeholder="Search"
    />
    <button className="search-button" type="submit">
      {" "}
      Search
    </button>
  </form>
  );
};

export default SearchForm;
