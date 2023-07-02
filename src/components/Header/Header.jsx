import { Link } from "react-router-dom";
import SvgPokebola from "../SvgPokebola/SvgPokebola";
import styles from "./Header.module.css";
import { BiTime } from "react-icons/bi";
// import { FaMoon, FaRegMoon } from "react-icons/fa";

const Header = () => {
    return (
        <div className="bg-zinc-800 p-6 flex justify-between border-b border-zinc-600">
            <Link to="/" className="flex justify-center gap-2 cursor-pointer">
                <SvgPokebola altura="24" largura="24" classe="normal" />
                <h1 className="text-base font-medium">PokéDex</h1>
            </Link>

            <div className="flex flex-row">
                <div className="flex gap-10">
                    <Link to="/" className="flex gap-2 justify-center cursor-pointer">
                        <SvgPokebola altura="24" largura="24" />
                        <p>Pokemons</p>
                    </Link>
                    <Link to="/geracao" className="flex gap-2 justify-center cursor-pointer">
                        <BiTime className={styles.geracao}></BiTime>
                        <p>Geração</p>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Header;