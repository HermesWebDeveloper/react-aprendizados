import { useEffect, useState } from "react";



function Temporizador() {

    const [tempo, setTempo] = useState(0);

    useEffect(() => {

        // Atualiza o valor do tempo com + 1 a cada 1000 ms
        const intervalID = setInterval(() => (
            setTempo(prevTempo => prevTempo + 1)
        ), 1000);

        //Função de limpeza ao componente ser desmontado
        return () => clearInterval(intervalID);
        
    }, []);

    return(
        <>
            <div>
                <p>
                    <span>Contagem do tempo: </span>
                    {tempo}
                </p>
            </div>
        </>
    )
}

export default Temporizador;