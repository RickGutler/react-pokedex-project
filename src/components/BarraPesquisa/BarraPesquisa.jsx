const BarraPesquisa = (props) =>{
    const digitando = (evento)=>{
        props.valorBarraPesquisa(evento.target.value);
    }

    return <input className="bg-zinc-600 p-2 w-80 rounded-xl" type="text" placeholder={props.placeholder} onChange={digitando} value={props.valorPesquisa}/>
}

export default BarraPesquisa;