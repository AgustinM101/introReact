import "./Articles.css";
import { useEffect, useState } from "react";
import { ArticleCard } from "../ArticleCard/ArticleCard";

export function Articles() {
    const [articles, setArticles] = useState(undefined);

    async function getArticles() {
        const response = await fetch(
            "http://localhost:9091/articles"
        );
        const data = await response.json();
        console.log(data);
        setArticles(data.articles);
    }

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <section className="articles">
            <div className="container">
                <h2>ARTICULOS</h2>

                <div className="grid">
                    {articles ? (
                        articles.map((article) => (
                            <Link key={"Article-" + article.id} href={`/articles/${article.id}`}>
                                <ArticleCard
                                    name={article.name}
                                    description={article.description}
                                    price={article.price}
                                    stock={article.stock}
                                    imageUrl={article.imageUrl}
                                />
                            </Link>
                        ))
                    ) : (
                        <p>Cargando...</p>
                    )}
                </div>
            </div>
        </section>
    );
}
