import React from "react";
import { Link } from "react-router-dom";
import { noticias } from "../data/noticias";
import "./Home.css";

export default function Home() {
  const destaques = noticias.slice(0, 6);

  return (
    <div className="home-container">

      <hr></hr>

      {/* Classe grid pai englobando todas tags para montar o grid*/}
      <div className="grid-noticias">
        {destaques.map((noticia) => (
          /* O 'key' fica no container principal de cada item */
          <div key={noticia.id} className="card-noticia">
            <div className="card-image-wrapper">
              <img src={noticia.foto} alt={noticia.titulo} />
            </div>

            <div className="card-content">
              <h2>{noticia.titulo}</h2>
              <p>{noticia.resumo}</p>
            </div>

            <div className="card-action">
              {/* O Link envolve o botão corretamente */}
              <Link to={`/noticia/${noticia.id}`}>
                <button>Ver mais</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}