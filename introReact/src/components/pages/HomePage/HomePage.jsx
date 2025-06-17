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




    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {articles.map((article) => (
            <a key={article.id} href={} className="group">
              <img
                alt={article.imageAlt}
                src={article.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>


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
