import React from 'react'
import { Link } from 'react-router-dom';
import './NotFound.css'


export default function NotFound() {
   return (
    <div className="not-found-header">
      <h1>Oops! Página não encontrada.</h1>
      <Link to="/">Voltar para a Home</Link>
      <div>
      <img src="" alt="" />
      </div>
    </div>
  );
}
