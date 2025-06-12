import "./UniversityCard.css";

export function UniversityCard({ name, fullName }) {
    return (
        <figure className="universityCard">
            <h1>{name}</h1>
            <p>{fullName}</p>
        </figure>
    );
}
