import './BrandCard.css';


export function BrandCard({ brands }) { 
    return (
        <figure className="brandCard">
            <div>
                
                <img src={"https://res.cloudinary.com/dkv58dvqy/image/upload/v1750776834/mi-espacio_xedm6c.png"} alt={"User img "} className="card-img-top" />
            
                <div className="contenidoClientes" >
                    <strong> {brands.name}</strong>
                    <p>{brands.code}</p>
                </div>

            </div>
        </figure>
    );
}
