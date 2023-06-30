import React from "react";
import { Link } from "react-router-dom";
export default function Cocktail({ name, info, glass, img, _id }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/${_id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
}
