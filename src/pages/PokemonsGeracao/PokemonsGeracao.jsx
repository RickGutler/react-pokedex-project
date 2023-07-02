/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ListaDeCardsPokemon from "../../components/ListaDeCardsPokemon/ListaDeCardsPokemon";

const PokemonsGeracao = (props) => {
    const navegacao = useNavigate();
    const [pokemonsGeracao, setPokemonsGeracao] = useState([]);
    const parametro = useParams();

    const geracao = props.geracoes.find((geracao) => geracao.id === Number(parametro.id));

    const getPokemonsGeracao = async () => {
        const url = "https://pokeapi.co/api/v2/pokemon/";

        const promises = geracao.pokemon_species.map(async (geracao) => {
            const urlPokemon = geracao.url;
            const splitArray = urlPokemon.split("pokemon-species/");
            const stringDepois = splitArray[1].slice(0, -1);

            const res = await fetch(url+stringDepois);
            const data = await res.json();
            return data;
        })
        
        const resultado = await Promise.all(promises);
  
        setPokemonsGeracao(resultado);
    }

    useEffect(() =>{
        getPokemonsGeracao();
    },[geracao])

    const ordernarPokemons = pokemonsGeracao.sort((a, b) => a.id - b.id);

    return (
        <div className="flex-col justify-items-center">
            <div className="flex justify-center gap-12 mb-4">
                <button onClick={() => navegacao(-1)}><AiOutlineArrowLeft className="text-4xl" /></button>
                <h1 className="text-4xl uppercase">{geracao.id}ª Geração</h1>
            </div>
            <ListaDeCardsPokemon pokemons={ordernarPokemons} />
        </div>
    )
}

export default PokemonsGeracao;