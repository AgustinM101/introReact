import "./Footer.css";
export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="top">
                    <div className="column">
                        <section className="beneficios">
                            <h2>Beneficios</h2>
                            <div className="beneficios-list">
                                <div>
                                    <img src="https://res.cloudinary.com/dkv58dvqy/image/upload/v1750798722/dolar-de-saco_xi9dvv.png" alt="signo pesos" />
                                    <strong>
                                        Precio Justo
                                    </strong>
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/dkv58dvqy/image/upload/v1750798721/comprobacion-de-candado_jt36rd.png" alt="candado seguro" />
                                    <strong>
                                        Compra Segura
                                    </strong>
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/dkv58dvqy/image/upload/v1750798847/envio-rapido_ucojnb.png" alt="envio imagen" />
                                    <strong>
                                        Envío Rápido
                                    </strong>
                                </div>
                            </div>
                            
                        </section>
                    </div>
                    
                    <div className="column">
                        <h2>Quienes Somos</h2>
                        <div className="quienes-somos">
                            <p>
                            Crearte es un emprendimiento dedicado a la venta de articulos artesanales y manualidades.
                        </p>
                        <p>
                            En Crearte diseñamos y vendemos artículos artesanales hechos con dedicación: vasos, platos y tablas de madera
                            que combinan funcionalidad y calidez. Valoramos el trabajo manual, los materiales nobles y el vínculo con cada cliente. 
                            Apostamos al crecimiento junto a marcas amigas y quienes nos eligen.


                        </p>
                        </div>
                        
                    </div>
                    <div className="column">
                        <h2>Contacto</h2>
                        <div className="redes">
                          
                                
                                <p>
                                    <a  className="map-link"
                                        href="https://maps.app.goo.gl/5bLMUB2b7Mj9uJYo8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="https://res.cloudinary.com/dkv58dvqy/image/upload/v1750627575/ubicaciones_qba6vm.png" alt="imagen de google maps" />
                                    </a>
                                </p>
                           
                            
                                
                                <p>
                                    
                                    <a href="mailto:ejemplo@crearte.ar">
                                        <img src="https://res.cloudinary.com/dkv58dvqy/image/upload/v1750629571/sobre_fpxymv.png" alt="gmail logo" />
                                    </a>
                                </p>
                           
                           
                                <p>
                                    
                                    <br />
                                    <a href="tel:+542346432493">
                                        <img src="https://res.cloudinary.com/dkv58dvqy/image/upload/v1750629571/telefono_izhk9x.png" alt="telofono logo" />
                                    </a>
                                </p>
                            
                        </div>
                    </div>
                </div>

                <hr />

                <div className="bottom">
                    <p>© Copyright 2025. Todos los Derechos Reservados</p>

                    <nav className="social">
                        <a
                            href="https://www.instagram.com/creartechivilcoy/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="https://res.cloudinary.com/dkv58dvqy/image/upload/v1750627855/logotipo-de-instagram_pwyzep.png" alt="logo instagram" />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCr5qd1wXSfgPLJRfpXNLZsw?view_as=subscriber"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="https://res.cloudinary.com/dkv58dvqy/image/upload/v1750627855/youtube_1_hqpner.png" alt="logo youtube" />
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
