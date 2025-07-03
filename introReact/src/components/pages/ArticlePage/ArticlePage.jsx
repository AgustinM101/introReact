import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



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
        <section >
            <img src={article.imageUrl} alt={"imagen de articulo " + article.name} className="card-img-top" />
            <div className="contenido" >
                <p>{article.description}</p>
                <p style={{color: "green"}}> {Math.random() > 0.5 ? "Envio gratis" : "6 cuotas sin interes" } </p>
                <p className="price">${article.price}</p>
                <p>Stock: {article.stock}</p>
                
            </div>
        </section>
      )
  
  : <p>Cargando...</p>;
}
export default ArticlePage;