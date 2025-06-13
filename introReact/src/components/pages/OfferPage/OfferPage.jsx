
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

function OfferPage() {
    const params = useParams()
    const id= params.id

    const [offer, setOffer] = useState(undefined);


    async function getOffer(id) {
        const response = await fetch(
            `https://programacioniii.vercel.app/api/v1/oferta-academica/${id}`
        );
        const data = await response.json();
        console.log(data);
        setOffer(data.universidades);
    }

    useEffect(() => {
        getOffer(id);
    }, [id]);

  return (
    <>
        <h1> Oferta academica </h1>
        {
            offer ? 
            <>
                <Banner title={offer.name} img={offer.banner}/>

                <h2>{offer.universidad}</h2>
                <h1>{offer.nombre}</h1>
            </>
            : <p>Cargando...</p>
        }

      
    </>
  );
}
export default OfferPage;