import React from 'react';
import { useParams } from 'react-router-dom';
import { noticias } from '../data/noticias';
import './DetalhesNoticia.css';

export default function DetalhesNoticia() {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === Number(id));

  if (!noticia) { 
    return (
      <div className="noticia-not-found">
        <p>Página não encontrada!</p>
      </div>
    );
  }

  return (
    <article className="noticia-container">
      {/* Categoria/Tema destacado no topo (estilo G1) */}
      {noticia.temas && (
        <span className="noticia-tema">{noticia.temas}</span>
      )}

      {/* Título principal grande e de destaque */}
      <h1 className="noticia-titulo">{noticia.titulo}</h1>

      {/* Metadados: Autor e Data na mesma linha com divisor */}
      <div className="noticia-meta">
        <span className="noticia-autor">Por <strong>{noticia.autor}</strong></span>
        <span className="noticia-divisor">•</span>
        <time className="noticia-data">{noticia.data}</time>
      </div>

      {/* Container de Imagem com proporção controlada */}
      <div className="noticia-foto-wrapper">
        <img 
          src={noticia.foto} 
          alt={noticia.titulo} 
          className="noticia-foto" 
        />
      </div>

      {/* Corpo do Texto da Notícia */}
      <div className="noticia-conteudo">
        <p>{noticia.textoCompleto}</p>
      </div>
    </article>
  );
}