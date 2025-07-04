import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ArticlePage.css';



 function ArticlePage() {
    const params = useParams();
    const id = params.id;

    const [article, setArticle] = useState(undefined);

    async function getArticle(id) {
        const res= await fetch(
            `http://localhost:9091/articles/${id}`
        );
        const data = await res.json();
        setArticle(data);
    }

    useEffect(() => {
        getArticle(id);
    }, [id])

  return article ? (
        <section className="article-detalle">
            <img src={article.imageUrl} alt={"imagen de articulo " + article.name} className="card-img-top" />
            <div className="contenido" >
                <p>{article.description}</p>
                <h3 className="price">${article.price}</h3>
                <p>Stock: {article.stock}</p>
                
            </div>
        </section>
      )
  
  : <p>Cargando...</p>;
}
export default ArticlePage;