import CardPokemon from "../CardPokemon/CardPokemon";

const ListaDeCardsPokemon = (props) => {
    return (
        <div className='ml-10 flex flex-wrap'>
            {props.pokemons.map((pokemon, i) => <CardPokemon key={i} pokemon={pokemon} />)}
        </div>
    );
}

export default ListaDeCardsPokemon;