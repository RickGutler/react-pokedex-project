import { useNavigate } from "react-router-dom";
import styles from "./CardPokemon.module.css";

const CardPokemon = (props) => {
    const navegacao = useNavigate();
    return (
        <div onClick={() => navegacao(`/pokemon/${props.pokemon.name}`)} className={`${styles.card} flex-col p-2 m-2 bg-zinc-800 rounded b-zinc-700 cursor-pointer hover:bg-zinc-600`}>
            <div>  
            <p className='text-zinc-50 uppercase text-center'>{props.pokemon.name}</p>
            <p className="text-zinc-500 text-center"> #{props.pokemon.id}</p>
            </div>
            <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
            <div className="flex gap-2 justify-center">
                {props.pokemon.types.map((tipo) => <small key={tipo.type.name+props.pokemon.name} className={`${styles[tipo.type.name]} p-1 rounded-xl w-14 text-center font-bold`}>{tipo.type.name}</small>)}
            </div>
        </div>
    );
}

export default CardPokemon;