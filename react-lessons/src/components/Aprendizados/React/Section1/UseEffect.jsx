import AtualizarTitulo from "./AtualizarTitulo";
import BuscarUsuario from "./BuscarUsuario";
import FetchDados from "./FetchDados";
import Redimensionamento from "./Redimensionamento";
import Temporizador from "./Temporizados";


function UseEffect() {

    return(
        <>
            <div>
                <div>
                    <h3 className="text-2xl font-bold">Exercício 1: Fetch de Dados ao Carregar o Componente</h3>
                    <p>Crie um componente que busque dados de uma API pública quando o componente for montado e exiba esses dados. Use o useEffect para fazer a chamada à API quando o componente carregar pela primeira vez.</p>
                    <FetchDados />
                </div>
                <hr className="border-t-2 border-gray-400"></hr>
                <div>
                    <h3 className="text-2xl font-bold">Exercício 2: Atualização com Dependência</h3>
                    <p>Crie um contador que começa em zero e possui dois botões: um para aumentar e outro para diminuir o valor. Use o useEffect para atualizar o título da página (document.title) com o valor atual do contador sempre que ele for alterado.</p>
                </div>
                <AtualizarTitulo />
                <hr className="border-t-2 border-gray-400"></hr>
                <div>
                    <h3 className="text-2xl font-bold">Exercício 3: Temporizador com Limpeza</h3>
                    <p>Crie um componente que inicie um temporizador ao ser montado e exiba o tempo em segundos que o componente ficou montado. Utilize useEffect com uma função de limpeza para limpar o temporizador quando o componente for desmontado.</p>
                    <Temporizador />
                </div>
                <hr className="border-t-2 border-gray-400"></hr>
                <div>
                    <h3 className="text-2xl font-bold">Exercício 4: Escutando o Redimensionamento da Janela</h3>
                    <p>Crie um componente que exibe a largura atual da janela. Use useEffect para adicionar um event listener que escuta o evento de redimensionamento (resize). Sempre que a janela for redimensionada, atualize a largura exibida. Lembre-se de limpar o event listener ao desmontar o componente.</p>
                    <Redimensionamento />
                </div>
                <hr className="border-t-2 border-gray-400"></hr>
                <div>
                    <h3 className="text-2xl font-bold">Exercício 5: Buscador de Usuários com useEffect e useState</h3>
                    <p>Crie um componente que contém um campo de texto de busca. Use o useEffect para fazer uma nova requisição a uma API de usuários (por exemplo, https://jsonplaceholder.typicode.com/users) sempre que o valor do campo de busca for alterado. Exiba os resultados que correspondem ao nome digitado no campo.</p>
                    <BuscarUsuario />
                </div>
                <hr className="border-t-2 border-gray-400"></hr>
                <div>
                    <h3 className="text-2xl font-bold">Exercício 6: Controle de Tema com Local Storage</h3>
                    <p>Crie um componente que permite alternar entre temas claro e escuro com um botão. Use useEffect para salvar o tema atual no localStorage sempre que ele for alterado. Quando o componente for montado, verifique o localStorage e aplique o tema salvo.</p>
                </div>
            </div>
        </>
    )
};

export default UseEffect;