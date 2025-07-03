import './Categories.css'

export function Categories() {
    return (
        <div className="categories">
            <h2>Categorías</h2>
            <div className="categoriesContainers">
                <div>
                    <img src="https://res.cloudinary.com/dkv58dvqy/image/upload/v1750794618/platoscategorias_n4xlzb.jpg" alt="platos fondo blanco" />
                    <strong>Platos</strong>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dkv58dvqy/image/upload/v1750794619/tazacategorias_p3dip8.jpg" alt="Tazas fondo blanco" />
                    <strong>Tazas</strong>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dkv58dvqy/image/upload/v1750795909/tabla-cocina-para-picar-D_NQ_NP_660090-MLM25728906139_072017-F_g3o4o9.jpg" alt="tablas de madera fondo blanco" />
                    
                    <strong>Tablas</strong>
                </div>
            </div>
        </div>
    );


}