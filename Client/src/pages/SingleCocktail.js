import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

export default function SingleCocktail() {
  const { _id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`http://localhost:5000/?i=${_id}`);
        const data = await response.json();
        if (data) {
          const {
            name: name,
            img: img,
            info: info,
            instructions: instructions,
            category: category,
            glass: glass,
            ingredients: ingredients,
          } = data[0];

          const newCocktail = {
            name,
            img,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          console.log(newCocktail);
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [_id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no item to display</h2>;
  } else {
    const { name, img, category, info, glass, instructions, ingredients } =
      cocktail;
    console.log(cocktail);
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={img} alt={name}></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {name}
            </p>
            <p>
              <span className="drink-data">category :</span> {category}
            </p>
            <p>
              <span className="drink-data">info :</span> {info}
            </p>
            <p>
              <span className="drink-data">glass :</span> {glass}
            </p>
            <p>
              <span className="drink-data">instructons :</span> {instructions}
            </p>
            <p>
              <span className="drink-data">ingredients :</span> {ingredients}
            </p>
            {/* <p>
            <span className="drink-data">ingredients :</span>
            {cocktail.map((item, index) => {
              return item ? <span key={index}> {item}</span> : null;
            })}
          </p> */}
          </div>
        </div>
      </section>
    );
  }
}
