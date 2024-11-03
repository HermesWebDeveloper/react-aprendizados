import { useEffect, useState } from "react";

function Redimensionamento() {

    const [largura, setLargura] = useState();
    const [altura, setAltura] = useState();

    useEffect(() => {

        function handleResize () {
            setAltura(window.innerHeight);
            setLargura(window.innerWidth);
        };
        
        // Executando sempre que o evento ocorrer
        window.addEventListener('resize', handleResize);

        // Função de limpeza
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return(
        <>
            <div className="my-2">
                <p>
                    <span>Largura: </span>
                    {largura}         
                </p>
                <p>
                    <span>Altura: </span>
                    {altura}
                </p>
            </div>
        </>
    )
}

export default Redimensionamento;