import Header from "../Header";


function AprendizadosPage() {


    return(
        <>
            <Header />
            <div>
                <h1>Lista de conteúdos:</h1>
                <ol>
                    <li>
                        <a href="./aprendizados/react">React</a>
                    </li>
                    <li>
                        <a href="#">HTML</a>
                    </li>
                    <li>
                        <a href="#">CSS</a>
                    </li>
                </ol>
            </div>
        </>
    )
}

export default AprendizadosPage;