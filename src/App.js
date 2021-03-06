import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipes";
import { ClipLoader } from "react-spinners";

const App = () => {
  const APP_ID = "44e6321f";
  const APP_KEY = "ab20b003f22cb5c304c546fb65fb2b2b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("peanut");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    const getRecipes = () => {
      fetch(url).then((res) => {
        res.json().then((data) => {
          setRecipes(data.hits);
        });
      });
    };
    getRecipes();
  }, [query, url]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const loadingScreen = () => {
    return (
      <div className="row" style={{ height: "300px" }}>
        <div className=" mx-auto my-auto col-1">
          <ClipLoader size={50} color={"#36D7B7"} loading={true} />
        </div>
      </div>
    );
  };

  return (
    <div className=" text-center">
      <h1 className="display-4 text-primary">Delicious Recipe Finder</h1>
      <form onSubmit={getSearch} className="form-group ">
        <input
          type="text"
          className="form-control col-md-6 offset-md-3 text-center mb-2"
          placeholder="Search for your favourite recipe and never wait for others"
          value={search}
          onChange={updateSearch}
        />
        <button className=" btn btn-success" type="submit">
          Search
        </button>

        {recipes.length === 0 && loadingScreen()}
        <div className="row mt-4">
          {recipes.map((recipe, index) => (
            <div key={index} className="col-md-3">
              <Recipe
                index={index}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                healthLabels={recipe.recipe.healthLabels}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default App;
