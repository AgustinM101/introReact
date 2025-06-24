import './ClientCard.css'


export function ClientCard({ client }) { 
    return (
        <figure className="clientCard">
            <div>
                
                <img src={"https://res.cloudinary.com/dkv58dvqy/image/upload/v1750719271/user-interface_yblkjo.png"} alt={"User img "} />
            
                <div className="contenidoClientes" >
                    <strong>{client.name} {client.surname}</strong>
                    <strong>{client.dni}</strong>
                </div>

            </div>
        </figure>
    );
}
