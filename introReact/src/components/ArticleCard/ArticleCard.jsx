import { Link } from "react-router-dom";
import "./ArticleCard.css";
import Button from '@mui/material/Button';


export function ArticleCard({ article }) { 
    return (
        <figure className="articleCard">
            <img src={article.imageUrl} alt={"imagen de articulo "} className="card-img-top" />
            <div className="contenido" >
                
                <p style={{color: "green"}}> {Math.random() > 0.5 ? "Envio gratis" : "6 cuotas sin interes" } </p>
                <p className="price">${article.price}</p>
                
            </div>

            <Link 
                key={"ArticleCard-" + article.id}
                to={"/articles/" + article.id}>
                    <Button size="small" color="inherit" variant="contained">Ver detalle</Button>
            </Link>

        </figure>
    );
}
