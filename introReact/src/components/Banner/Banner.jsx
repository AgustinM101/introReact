import "./Banner.css";

export function Banner({ image, title }) {
    return (
        <section className="banner">
            <img src={image} alt="Fondo del banner" />

            <div className="container">
                <h1>{title}</h1>
            </div>
        </section>
    );
}
