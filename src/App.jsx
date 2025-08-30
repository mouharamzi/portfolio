import React from 'react'
import './styles.css'

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Ramzi Mouha</h1>
        <p>Front-End Developer (React/JavaScript) • Côte d’Azur – France</p>
        <div className="links">
          <a href="https://github.com/mouharamzi" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/CV_Ramzi_Mouha_Frontend.pdf" target="_blank" rel="noreferrer">
  Télécharger mon CV
</a>
        </div>
      </header>

      <section>
        <h2>Projets</h2>
        <ul className="cards">
          <li className="card">
            <h3>To-Do React</h3>
            <p>Filtrage, persistance localStorage, composants réutilisables.</p>
            <div className="card-links">
              <a href="/src/Projects/Todo.jsx" target="_blank" rel="noreferrer">Live</a>
              <a href="#" target="_blank" rel="noreferrer">Code</a>
            </div>
          </li>
          <li className="card">
            <h3>Dashboard API</h3>
            <p>Table, pagination, recherche, requêtes asynchrones.</p>
            <div className="card-links">
              <a href="#" target="_blank" rel="noreferrer">Live</a>
              <a href="#" target="_blank" rel="noreferrer">Code</a>
            </div>
          </li>
          <li className="card">
            <h3>App Météo</h3>
            <p>Gestion des états de chargement et erreurs, fetch API.</p>
            <div className="card-links">
              <a href="#" target="_blank" rel="noreferrer">Live</a>
              <a href="#" target="_blank" rel="noreferrer">Code</a>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email : ramzi.m.mouha@gmail.com • Mobile : 06 70 32 25 88</p>
      </section>
    </div>
  )
}