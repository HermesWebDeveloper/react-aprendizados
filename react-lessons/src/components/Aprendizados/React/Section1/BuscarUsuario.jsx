import { useEffect, useState } from "react";
import axios from 'axios'

function BuscarUsuario () {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [filteredUsers, setFilteredUsers] = useState([]); // Estado para armazenar usuários filtrados

    useEffect(() => {
        // Função para buscar dados da API
        const buscarDados = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados: ', error);
            } finally {
                setLoading(false);
            }
        };

        // Chamando a função
        buscarDados(); 
    }, []);

    useEffect(() => {
        if (search.trim() === '') {
            setFilteredUsers([]); // Limpa os resultados se o campo estiver vazio
        } else {
            const results = users.filter(user =>
                user.name.toLowerCase().includes(search.toLowerCase())
            );
                setFilteredUsers(results); // Atualiza o estado de usuários filtrados

        }
    }, [search]);

    function clickName(name) {
        setSearch(name)
    };

    function handleInput(event) {
        setSearch(event.target.value);
    };

    if (loading) {
        return <p>Carregando...</p>
    }

    return(
        <>
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Digite algo..."
                        className='border border-gray-600 rounded-lg my-2 py-1 px-2 w-80'
                        value={search}
                        onChange={handleInput}
                    ></input>
                    {filteredUsers.length > 0 && (
                        <ul className='absolute bg-white border border-gray-300 rounded-lg mt-1 w-80'>
                            {filteredUsers.map(user => (
                                <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer' onClick={() => (clickName(user.name))}>{user.name}</li>
                            ))}
                        </ul>
                        )
                    }
                </form>
            </div>
        </>
    )
}

export default BuscarUsuario;