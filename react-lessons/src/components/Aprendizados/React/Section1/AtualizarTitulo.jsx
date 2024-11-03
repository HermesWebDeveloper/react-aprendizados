import { useEffect, useState } from "react";



function AtualizarTitulo () {

    const [contador, setContador] = useState(0);
    const [titulo, setTitulo] = useState();

    useEffect( () => {
        setTitulo(contador);
    }, [contador]);

    function incrementar() {
        setContador((c) => (c + 1))
    };

    return(
        <>
            <div>
                <div>
                    <button className='border border-gray-600 py-1 px-2 my-2 rounded-lg ml-1 w-10' onClick={() => (setContador((c) => (c + 1)))}>+</button>
                    <button className='border border-gray-600 py-1 px-2 my-2 rounded-lg ml-1 w-10' onClick={() => (setContador((c) => (c - 1)))}>-</button>
                </div>
                <p>
                    <span>Título:</span> {titulo}
                </p>
            </div>
        </>
    )
}

export default AtualizarTitulo;