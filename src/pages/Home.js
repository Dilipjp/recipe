import { Button } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../contexts/user.context";
import React, { Component, useEffect, useState } from "react";

import Recipe from "./Recipes";

export default function Home() {
  const { logOutUser } = useContext(UserContext);

  const APP_ID = "334c5b9f";
  const APP_KEY = "3c8b9486e1e3276400218a77896c18e9";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("salad");
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

  const logOut = async () => {
    try {
      const loggedOut = await logOutUser();
      if (loggedOut) {
        window.location.reload(true);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="App">
<nav>
  <div class="wrapper">
    <div class="logo"><a href="#">Kitchen Magic</a></div>
    <input class="logo_slider" type="radio" name="slider" id="menu-btn"/>
    <input class="logo_slider" type="radio" name="slider" id="close-btn"/>
    <div className="search">
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
    </div>
    
    <ul class="nav-links">
      <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
      {/* <li><a href="#">Home</a></li> */}
      {/* <li><a href="#">About</a></li> */}
      <li> <button className="search-button" onClick={logOut}>
        Logout
      </button></li>
    </ul>
    <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
  </div>
</nav>
 <div class="main">
        <ul class="cards">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredients}
              source={recipe.recipe.source}
              ingredientLines={recipe.recipe.ingredientLines}
              recipe = {recipe.recipe}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
