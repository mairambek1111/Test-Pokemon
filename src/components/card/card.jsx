import axios from "axios";
import { useEffect, useState } from "react";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        const pokemonArray = res.data.results;
        setData(pokemonArray);
      })
      .catch((error) => {
        console.error("ошибка", error);
      });
  }, []);

  return (
    <>
      <section>
        <div className="cards">
          {data.map((pokemon, id) => (
            <ul key={id} className="cards__pokemon">
              <li className="card">
                {" "}
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    id + 1
                  }.png`}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />{" "}
                {pokemon.name}
              </li>
            </ul>
          ))}
        </div>
      </section>
    </>
  );
}

export default Cards;
