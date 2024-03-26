// import logo from "./logo.svg";
import "./App.css";
import React, { Component, useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import Signup from "./pages/Signup";
import Details from "./pages/Details";

const App = () => {
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

    <BrowserRouter>
     <UserProvider>
       <Routes>
         <Route exact path="/login" element={<Login />} />
         <Route exact path="/signup" element={<Signup />} />
         {/* users by wrapping it with PrivateRoute here. */}
         <Route element={<PrivateRoute />}>
           <Route exact path="/" element={<Home />} />
           <Route exact path="/details/:title" element={<Details />} />
         </Route>
       </Routes>
     </UserProvider>
   </BrowserRouter>
  );
};
export default App;
