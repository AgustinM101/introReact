import "./DualBanner.css";

export function DualBanner({ image, title }) {
    return (
        <section className="dualBanner">
            <h1>{title}</h1>
            <img src={image} alt="Imagen del banner" />
        </section>
    );
}
