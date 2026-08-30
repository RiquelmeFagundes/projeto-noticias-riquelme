import React from 'react'
import { useParams } from 'react-router-dom'
import { noticias } from '../data/noticias'

export default function DetalhesNoticia() {
    const {id} = useParams();
    const noticia = noticias.find((n) => n.id === Number (id));

    if(!noticia) { 
        return
        <p>
        Página não encontrada!
        </p>;
    }

  return (
    <div>
     <img src={noticia.foto} alt={noticia.titulo} width="400" />
        <h1>{noticia.titulo}</h1>
            <p><strong>Autor:</strong> {noticia.autor}</p>
            <p><strong>Data:</strong> {noticia.data}</p>
            <p><strong>Temas:</strong> {noticia.temas}</p>
            <p>{noticia.textoCompleto}</p>
    </div>
  );
}
