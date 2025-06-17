import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Banner } from '../../Banner/Banner';

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

  return article ? 
  <>
    <p>{article.description}</p>
    <p>{article.price}</p>

  </>
  
  : <p>Cargando...</p>;
}
export default ArticlePage;