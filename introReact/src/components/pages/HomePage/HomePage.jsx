import { useEffect, useState } from "react";
import "./Homepage.css";
import { ArticleCard } from "../../ArticleCard/ArticleCard";


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
        <>

        {
            articles ? articles.map((article) => (
                     <ArticleCard
                        name={article.name}
                        description={article.description}
                        price={article.price}
                        key={"Article-" + article.id}
                    />
                                    ))
            
             : <p>Cargando...</p>
        }
        
        
           
        </>
    );
}

export default HomePage;
