import React from "react";

const Recipe = ({
  title,
  calories,
  healthLabels,
  image,
  ingredients,
  index,
}) => {
  return (
    <div className="card mx-auto" style={{ width: "18rem", height: "100%" }}>
      <img
        className="card-img-top"
        style={{ height: "20rem" }}
        src={image}
        alt=""
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <div className="row">
          <p className="lead font-weight-normal col-6">Calories</p>
          <p className="lead text-danger col-6">{Math.round(calories)} kcal</p>
        </div>
        <div className="row">
          <p className="lead font-weight-normal col-6">Health Check</p>
          <div className="col-6">
            {healthLabels.map((healthLabel, index) => {
              return (
                <p className="" key={index}>
                  <em>{healthLabel}</em>
                </p>
              );
            })}
          </div>
        </div>

        <div
          className="btn btn-primary mt-auto"
          data-toggle="collapse"
          data-target={`#id${index}`}
        >
          Recipe
        </div>
        <div className="collapse" id={`id${index}`}>
          {ingredients.map((ingredient, index) => (
            <p className="card-text" key={index}>
              {ingredient.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
