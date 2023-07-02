import { AiOutlineArrowLeft } from "react-icons/ai";
import { TbWeight } from "react-icons/tb";
import { LiaRulerVerticalSolid } from "react-icons/lia"
import { useNavigate } from "react-router-dom";
import styles from "./DetalhePokemon.module.css";
import SvgPokebola from "../SvgPokebola/SvgPokebola";
import { useEffect, useState } from "react";

const DetalhePokemon = (props) => {
    const navegacao = useNavigate();
    const [descricao, setDescricao] = useState("");

    useEffect(() => {
        getDescricao().then((fromResolve) => {
                setDescricao(fromResolve.flavor_text_entries[0].flavor_text);
            })
    })

    const getDescricao = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon-species/${props.pokemon.id}/`;
        const response = await fetch(url);
        const descricaoJson = response.json();

        return new Promise((resolve, reject) => {
            if (descricaoJson) {
                resolve(descricaoJson);
            } else {
                reject();
            }
        });
    }

    console.log(descricao);

    console.log(props.pokemon)

    return (
        <div className={`bg-zinc-800 flex-col w-2/5 self-center rounded-xl`}>
            <div className={`${styles[props.pokemon.types[0].type.name]} rounded-xl mb-2 rounded-b-none`}>
                <div className="flex justify-around items-center">
                    <button onClick={() => navegacao(-1)}><AiOutlineArrowLeft className="text-xl" /></button>
                    <p className="uppercase text-xl">{props.pokemon.name}</p>
                    <p className="">#{props.pokemon.id}</p>
                </div>
                <div className="flex justify-around">
                    <img className="w-60" src={props.pokemon.sprites.other["official-artwork"].front_default} alt={props.pokemon.name} />
                    <SvgPokebola larugura={160} altura={168} opacidade="opacidade" />
                </div>
            </div>

            <div className="flex-col bg-zinc-800 justify-center rounded-xl gap-4 mb-4">
                <div className="flex gap-4 justify-center">
                    {props.pokemon.types.map((tipo) => <small key={tipo.type.name + props.pokemon.name} className={`${styles[tipo.type.name]} p-2 rounded-xl w-16 text-sm text-center font-bold`}>{tipo.type.name}</small>)}
                </div>
                <h2 className="text-center text-xl m-4">Sobre</h2>
                <div className="flex justify-center gap-2">
                    <div className="flex gap-1">
                        <TbWeight className="text-xl" />
                        <p className="">{props.pokemon.weight} hg</p>
                    </div>
                    <div className="border border-zinc-50 mx-2"></div>
                    <div className="flex gap-1">
                        <LiaRulerVerticalSolid />
                        <p>{props.pokemon.height} dm</p>
                    </div>
                </div>
                <div className="text-center my-6">
                    <p>{descricao}</p>
                </div>
                <div>
                    {props.pokemon.stats.map((status) =>
                        <div className="flex uppercase  justify-between">
                            <p className={`text-center ml-14`}>{status.stat.name} {status.base_stat}</p>
                            <progress className={`${styles[props.pokemon.types[0].type.name]} ${styles.progresso} mr-20`} key={props.pokemon.name + status.base_stat} max="200" value={status.base_stat}></progress>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default DetalhePokemon;


