import { useEffect, useState } from "react";
import "./Homepage.css";
import { ArticleCard } from "../../ArticleCard/ArticleCard";
import { Banner } from "../../Banner/Banner";
import { Categories } from "../../Categories/Categories";


function HomePage() {

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
            
            <Banner image={"https://i.pinimg.com/originals/76/9d/a3/769da3a75062dd7891fd3a7541f2596e.jpg"}  />
            <Categories />
        <div  className="container">
            <h1>Nuestros Productos</h1>
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

export default HomePage;
