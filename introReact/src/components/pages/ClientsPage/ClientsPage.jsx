import { useEffect, useState } from "react";


import { Banner } from "../../Banner/Banner";
import { ClientCard } from "../../ClientCard/ClientCard";


function ClientsPage() {

    const [clients, setClients] = useState(undefined);
    
        async function getClients() {
            const response = await fetch(
                "http://localhost:9091/clients"
            );
            const data = await response.json();
            console.log(data);
            setClients(data);
        }
    
        useEffect(() => {
            getClients();
        }, []);
    
    return (
        <main>

            <Banner image={"https://blog.atacadao.com.br/wp-content/uploads/2022/02/Como-atender-melhor-os-seus-clientes.jpg"}  />
        
        <div  className="container">
            <h1>Los clientes que más compran</h1>
            {
            clients ? <div className="clientsGrid">
                {
                    clients.map((client) => <ClientCard client={client} />)
                }
            </div> : <p>Cargando...</p>
        }
        </div>
        
        </main>
    );
}

export default ClientsPage;
