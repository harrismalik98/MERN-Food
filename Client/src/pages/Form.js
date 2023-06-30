import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [category, setCategory] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [glass, setGlass] = useState("");
  const [img, setImg] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/addfood", {
        name,
        category,
        info,
        glass,
        instructions,
        ingredients,
        img,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(response);
  };
  // const  = "http://localhost:5000/addfood";

  return (
    <article style={{ margin: "4rem" }}>
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h1 style={{ marginBottom: "5rem", textAlign: "center" }}>Add Product</h1>
      <form
        className="form"
        // onSubmit={handleSubmit}
        action="http://localhost:5000/addfood"
        method="post"
      >
        <div className="form-control">
          <label
            htmlFor="name"
            style={{ fontWeight: "bold", minWidth: "50px" }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            // placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="info" style={{ fontWeight: "bold" }}>
            Info:
          </label>
          <input
            type="text"
            id="info"
            name="info"
            // placeholder="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="category" style={{ fontWeight: "bold" }}>
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            // placeholder="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="img" style={{ fontWeight: "bold" }}>
            Image:
          </label>
          <input
            type="text"
            id="img"
            name="img"
            // placeholder="Image"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="glass" style={{ fontWeight: "bold" }}>
            Glass:
          </label>
          <input
            type="text"
            id="glass"
            name="glass"
            // placeholder="glass"
            value={glass}
            onChange={(e) => setGlass(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="instructions" style={{ fontWeight: "bold" }}>
            Instructions:
          </label>
          <input
            type="text"
            id="instructions"
            name="instructions"
            // placeholder="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="ingredients" style={{ fontWeight: "bold" }}>
            Ingredients:
          </label>
          <input
            type="text"
            id="ingredients"
            name="ingredients"
            // placeholder="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
      </form>
      <button
        type="submit"
        className="btn"
        style={{ marginTop: "15px", marginRight: "5px" }}
        onClick={handleClick}
      >
        Add Product
      </button>
    </article>
  );
};

export default Form;
