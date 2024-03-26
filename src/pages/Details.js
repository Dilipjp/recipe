import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Details = ({}) => {
  const { state } = useLocation();
  return (
    <>
    <nav>
  <div class="wrapper">
    <div class="logo"><a href="/">Kitchen Magic</a></div>
    <input class="logo_slider" type="radio" name="slider" id="menu-btn"/>
    <input class="logo_slider" type="radio" name="slider" id="close-btn"/>
    <ul class="nav-links">
      <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
      <li><a href="/">Back to Home</a></li>
    </ul>
    <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
  </div>
</nav>

    <div className="details">
      <div class="card">
        <div class="description">
          <h1>{state.label}</h1>
          {state.cuisineType.map((cuisine) => (
            <p>{cuisine}</p>
          ))}
          {state.dishType.map((dish) => (
            <p>{dish}</p>
          ))}
          {state.mealType.map((meal) => (
            <p>{meal}</p>
          ))}
          <ul>
            <li>🍽 Serves: {state.yield}</li>
            <li>⏱ Prep Time: {state.totalTime} mins</li>
            <li>👨‍🍳 Calories: {state.calories.toFixed(0)} cals</li>
            <li>🍝 Weight: {state.totalWeight.toFixed(0)} grams</li>
          </ul>
        </div>

        <div>
          <figure>
            <img src={state.image} />
            {/* <figcaption>Shania Pinnata</figcaption> */}
          </figure>

          <p class="tip">{state.source}</p>
        </div>

        <div></div>
        {/* <div>
		<div class="next"><a href="#ingredients">Ingredients 👇</a></div>
	</div> */}
      </div>

      <div id="ingredients"></div>

      <div class="card">
        <div class="recipe_details">
          <figure>
            <img src={state.image} />
            {/* <figcaption>Tamanna Rumee</figcaption> */}
          </figure>

          <p class="variation">
            <strong>Total Ingredients:</strong> {state.ingredients.length}
          </p>
        </div>
        <div>
          <h2>The Ingredients</h2>

          <ul class="ingredients">
            {state.ingredientLines.map((ingredient) => (
              <li>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        <div></div>
        {/* <div>
		<div class="next"><a href="#process">The Process 👇</a></div>
	</div> */}
      </div>

      <div id="process"></div>

      <div class="process">
        <h2>Total Nutrients</h2>

        <ol class="instructions">
          {state.digest.map((digest_) => (
            <li>
              <span>
                {digest_.label} {digest_.total.toFixed(3)} {digest_.unit}
              </span>
            </li>
          ))}
        </ol>
        <p class="last">😋 Enjoy!</p>
      </div>
    </div>
    </>
  );
};

export default Details;
