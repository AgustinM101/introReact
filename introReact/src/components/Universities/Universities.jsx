import "./Universities.css";
import { useEffect, useState } from "react";
import { UniversityCard } from "../UniversityCard/UniversityCard";

export function Universities() {
    const [universities, setUniversities] = useState(undefined);

    async function getUniversities() {
        const response = await fetch(
            "https://programacioniii.vercel.app/api/v1/universidades"
        );
        const data = await response.json();
        setUniversities(data.universidades);
    }

    useEffect(() => {
        getUniversities();
    }, []);

    return (
        <section className="universities">
            <div className="container">
                <h2>UNIVERSIDADES</h2>

                <div className="grid">
                    {universities ? (
                        universities.map((university) => (
                            <Link key={"University-" + university.id} href={`/universidades/${university.id}`}>
                                <UniversityCard
                                    name={university.nombre}
                                    fullName={university.nombreCompleto}
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
