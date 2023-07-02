import { useNavigate } from "react-router-dom";
import SvgPokebola from "../../components/SvgPokebola/SvgPokebola";

const Geracao = (props) => {
    const navegar = useNavigate();
    return (
        <div className="flex">
            {props.geracoes.map((geracao) =>
                <button onClick={() => navegar(`/pokemons-geracao/${geracao.id}`)} className="flex text-12 gap-4 bg-zinc-800 p-3 rounded-lg m-2 hover:bg-zinc-600" key={geracao.id}><SvgPokebola altura="24" largura="24" />{`${geracao.id}ª Geração`}
                </button>
            )}
        </div>
    )
}

export default Geracao;