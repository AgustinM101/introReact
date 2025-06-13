import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../Banner/Banner.jsx';

function UniversityPage() {
    const params = useParams();
    const id = params.id;

    const [university, setUniversity] = useState(undefined);

    async function getUniversity(id) {
        const res= await fetch(
            `https://programacioniii.vercel.app/api/v1/universidades/${id}`
        );
        const data = await res.json();
        setUniversity(data);
    }

    useEffect(() => {
        getUniversity(id);
    }, [id])

  return university ? 
  <>
    <Banner image={university.banner} title={university.nombreCompleto}/>
    <img src={university.logo} alt="logo universidad" />
    <p>{university.descripcion}</p>
    <a href={university.web}>Ir a la web</a>

  </>
  
  : <p>Cargando...</p>;
}
export default UniversityPage;