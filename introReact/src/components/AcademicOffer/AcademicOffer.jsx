import "./AcademicOffer.css";
import { useEffect, useState } from "react";

export function AcademicOffer() {
    const [offers, setOffers] = useState(undefined);

    async function getOffers() {
        const response = await fetch(
            "https://programacioniii.vercel.app/api/v1/oferta-academica"
        );
        const data = await response.json();
        setOffers(data.ofertaAcademica);
    }

    useEffect(() => {
        getOffers();
    }, []);

    return (
        <section className="academicOffer">
            <div className="container">
                <h2>OFERTA ACADÉMICA</h2>

                <div className="grid">
                    {offers ? (
                        offers.map((offer) => (
                            <a key={"AcademicOffer-" + offer.id} href="">
                                {offer.nombre}
                            </a>
                        ))
                    ) : (
                        <p>Cargando...</p>
                    )}
                </div>
            </div>
        </section>
    );
}
