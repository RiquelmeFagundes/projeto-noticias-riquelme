import React from 'react'
import { Link } from 'react-router-dom'
import { noticias } from '../data/noticias'

export default function Home() {
  const destaques = noticias.slice(0,5);

  return (
    <div>
      <h1>Notícias</h1>
      {destaques.map((noticia) => (
        <Link key={noticia.id} to = {`/noticia/${noticia.id}`}>
          <div>
            <img src={noticia.foto} alt={noticia.titulo} width="200"/>
              <h2>{noticias.titulo}</h2>
                <p>{noticias.resumo}</p>               
          </div>
        </Link>
      ))}
    </div>
  );
}
