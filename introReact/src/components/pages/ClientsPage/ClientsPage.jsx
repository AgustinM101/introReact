import { useEffect, useState } from "react";
import "./ClientsPage.css";
import { ArticleCard } from "../../ArticleCard/ArticleCard";
import { Banner } from "../../Banner/Banner";


function ClientsPage() {

    const [articles, setArticles] = useState(undefined);
    
        async function getArticles() {
            const response = await fetch(
                "http://localhost:9091/articles"
            );
            const data = await response.json();
            console.log(data);
            setArticles(data);
        }
    
        useEffect(() => {
            getArticles();
        }, []);
    
    return (
        <main>

            <Banner image={"https://blog.atacadao.com.br/wp-content/uploads/2022/02/Como-atender-melhor-os-seus-clientes.jpg"}  />
        
        <div  className="container">
            <h1>Los clientes que más compran</h1>
            {
            articles ? <div className="articlesGrid">
                {
                    articles.map((article) => <ArticleCard article={article} />)
                }
            </div> : <p>Cargando...</p>
        }
        </div>
        
        </main>
    );
}

export default ClientsPage;
