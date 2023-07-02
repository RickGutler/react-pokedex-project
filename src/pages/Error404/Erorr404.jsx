import { useNavigate } from "react-router-dom";

const Error404 = () =>{
    const navegacao = useNavigate();

    return(
        <div  className="flex flex-col bg-zinc-700 self-center items-center border p-20 border-zinc-500 rounded-xl">
            <h1 className="mb-10">Error 404</h1>
            <small>Página não encontrada</small>
            <button onClick={() => navegacao(-1)} className="bg-zinc-800 p-2 rounded-xl mt-8 hover:bg-zinc-600">Voltar</button>
        </div>
    );
}

export default Error404;