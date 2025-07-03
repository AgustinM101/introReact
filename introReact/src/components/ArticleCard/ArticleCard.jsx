import { Link } from "react-router-dom";
import "./ArticleCard.css";


export function ArticleCard({ article }) { 
    return (
        <figure className="articleCard">
            <img src={article.imageUrl} alt={"imagen de articulo " + article.name} className="card-img-top" />
            <div className="contenido" >
                <p>{article.description}</p>
                <p style={{color: "green"}}> {Math.random() > 0.5 ? "Envio gratis" : "6 cuotas sin interes" } </p>
                <p className="price">${article.price}</p>
                <p>Stock: {article.stock}</p>
                
            </div>

            <Link 
                key={"ArticleCard-" + article.id}
                to={"/articles/" + article.id}>
                    <button>Ver detalle</button>
            </Link>

        </figure>
    );
}
