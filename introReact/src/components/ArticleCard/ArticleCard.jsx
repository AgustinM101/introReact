import "./ArticleCard.css";

export function ArticleCard({ name, description, price }) {
    return (
        <figure className="articleCard">
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Precio: {price}</p>
        </figure>
    );
}
