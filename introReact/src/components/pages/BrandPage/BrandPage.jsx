import { useEffect, useState } from "react";

import { Banner } from "../../Banner/Banner";
import { BrandCard } from "../../BrandCard/BrandCard";


function BrandPage() {

    const [brand, setBrands] = useState(undefined);
    
        async function getBrands() {
            const response = await fetch(
                "http://localhost:9091/brands"
            );
            const data = await response.json();
            console.log(data);
            setBrands(data);
        }
    
        useEffect(() => {
            getBrands();
        }, []);
    
    return (
        <main>

            <Banner image={"https://th.bing.com/th/id/R.adc4a47c3d5349b1a5b702fcdea1b19e?rik=DoKTtVNHZlp2Kw&riu=http%3a%2f%2fprfmpackagingservices.co.uk%2fassets%2fimg%2fre-branding-hero.webp%3fh%3d6d7cfb98610f2a704a9df1de15547159&ehk=x%2fHx5AnN%2fHfuGprJnE1yLKW8eFUuxGGgpl26flqjXWU%3d&risl=&pid=ImgRaw&r=0"}  />
        
        <div  className="container">
            <h1>Marcas participes de Crearte</h1>
            {
            brand ? <div className="brandsGrid">
                {
                    brand.map((brands) => <BrandCard brands={brands} />)
                }
            </div> : <p>Cargando...</p>
        }
        </div>
        
        </main>
    );
}

export default BrandPage;
