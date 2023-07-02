/* eslint-disable react-hooks/exhaustive-deps */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Erorr404';
import DetalhamentoPokemon from './pages/DetalhamentoPokemon/DetalhamentoPokemon';
import Geracao from './pages/Geracao/Geracao';
import PokemonsGeracao from './pages/PokemonsGeracao/PokemonsGeracao';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [geracoes, setGeracoes] = useState([]);

  useEffect(() => {
      getGeracoes();
  }, []);

  const getGeracoes = async () => {
      const url = `https://pokeapi.co/api/v2/generation`;
      const res = await fetch(url);
      const data = await res.json();

      const promises = data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          return data;
      })

      const resultado = await Promise.all(promises);

      setGeracoes(resultado);
  }

  useEffect(() => {
    getPokemons();
  }, [offset]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0`;
        const res = await fetch(url);
        const data = await res.json();
  
        const promises = data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          return data;
        });
  
        const resultado = await Promise.all(promises);
  
        setGlobalPokemons(resultado);
      } catch (error) {
        console.error(error);
        // Lide com o erro aqui, se necessário
      }
    };
  
    fetchData();
  }, []);

  const getPokemons = async (limit = 27) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const res = await fetch(url);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    })

    const resultado = await Promise.all(promises);

    setPokemons([...pokemons, ...resultado]);
  }

  const carregarMais = () => {
    setOffset(offset + 27);
  }

  return (
    <div className={`${styles.body} bg-zinc-700 text-zinc-50 gap-6`}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home pokemons={pokemons} carregar={carregarMais}/>} />
          <Route path="*" element={<Error404 />} />
          <Route path="/pokemon/:pokemon" element={<DetalhamentoPokemon pokemons={globalPokemons} />} />
          <Route path="/geracao" element={<Geracao geracoes={geracoes} />}/>
          <Route path="pokemons-geracao/:id" element={<PokemonsGeracao geracoes={geracoes}/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;