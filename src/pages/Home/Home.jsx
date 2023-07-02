import styles from "./Home.module.css";
import BarraPesquisa from "../../components/BarraPesquisa/BarraPesquisa";
import ListaDeCardsPokemon from "../../components/ListaDeCardsPokemon/ListaDeCardsPokemon";
import { AiOutlineCaretDown, AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const [valorBarraPesquisa, setValorBarraPesquisa] = useState("");
    const navegar = useNavigate();



    return (
        <div className='flex-col gap-6'>
            <div className="flex justify-between mx-12 flex-wrap">
                <h1 className={styles.titulo}>Pokemons</h1>
                <div className="flex justify-center self-center gap-2">
                    <BarraPesquisa placeholder="Pesquisar com nome" valorBarraPesquisa={(valorDigitado) => setValorBarraPesquisa(valorDigitado)} valorPesquisa={valorBarraPesquisa} />
                    <button onClick={() => navegar(`/pokemon/${valorBarraPesquisa.toLowerCase()}`)} className="bg-zinc-800 w-10 max-h-10 align-center flex justify-center p-2 rounded-xl hover:bg-zinc-600">
                        <AiOutlineSearch className={styles.lupa} />
                    </button>
                </div>
            </div>
            <div className="flex-col justify-items-center">
                <ListaDeCardsPokemon pokemons={props.pokemons} />
                <div className="">
                    <button onClick={props.carregar} className={`${styles.botao} p-2 bg-zinc-800 rounded flex hover:bg-zinc-600`}>CARREGAR MAIS <AiOutlineCaretDown className="text-2xl" /></button>
                </div>
            </div>
        </div>
    )
}

export default Home;