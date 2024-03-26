import React from "react";
import { Link } from 'react-router-dom'



const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  ingredientLines,
  source,
  recipe
}) => {
  return (

      <li class="cards_item">
      <div class="card">
        <div class="card_image">
        {/* {`blog/${id}`}>{title} */}
        {/* <Link to='/details/{title}' state={recipe}> */}
        <Link to={`/details/${title}`} state={recipe}>
          <img src={image} alt="" />
          </Link>
        </div>
        <div class="card_content">
       
          <h2 class="card_title">{title}</h2>
          <div class="card_text">
            <p>{calories.toFixed(0)} calories</p>
            <p> {ingredients.length} ingredients</p>
            </div>
        </div>
      </div>
    </li>
      


    
  );
};

export default Recipe;
