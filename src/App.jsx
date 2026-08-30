import React from 'react'
import Home from './pages/Home'
import Layout from './pages/Layout'
import DetalhesNoticia from './pages/DetalhesNoticia'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element= {<Home />}></Route>
      <Route path="noticia/:id" element={<DetalhesNoticia />}></Route>
      </Route>
      <Route path="*" element= {<NotFound/>}></Route>
    </Routes>
  );
}
