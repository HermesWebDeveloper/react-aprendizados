import { useEffect, useState } from "react";
import axios from 'axios';


function FetchDados() {

    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setDados(response.data);
            } catch (error) {
            console.error("Erro: ", error);
            } finally {
                setLoading(false);
            };
        };

        fetchPosts();
    }, [])

    if (loading) {
        return <p>Carregando...</p>
    }

    return(
        <>
            <div>
                <p className="text-2xl">Resultado:</p>
                <ul>
                    {dados.slice(0, 5).map ( (post) => (
                        <li className="my-2">
                            <p>
                                <span className="font-bold">ID Usuário:</span> {post.userId}
                            </p>
                            <p>
                                <span className="font-bold">ID:</span> {post.id}
                            </p>
                            <p>
                                <span className="font-bold">Título:</span> {post.title}
                            </p>
                            <p>
                                <span className="font-bold">Corpo:</span> {post.body}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default FetchDados;