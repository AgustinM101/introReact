import "./Footer.css";
export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="top">
                    <div className="column">
                        <h2>CUCH</h2>
                        <p>
                            El Centro Universitario de Chivilcoy es una
                            institución municipal que permite cursar estudios
                            superiores y cursos de extensión universitaria de
                            manera gratuita bajo el respaldo de las
                            universidades más prestigiosas del país.
                        </p>
                    </div>

                    <div className="column">
                        <h2>Links</h2>
                        <nav>
                            <a href="">Inscripción</a>
                            <a href="">Universidades</a>
                            <a href="">El CUCH</a>
                            <a href="">Consultas</a>
                        </nav>
                    </div>

                    <div className="column">
                        <h2>Contacto</h2>

                        <p>
                            <strong>Dirección:</strong>
                            <br />
                            Av. C. Calderón 424
                            <br />
                            Chivilcoy, Buenos Aires
                            <br />
                            <a
                                href="https://maps.app.goo.gl/5bLMUB2b7Mj9uJYo8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ver en el mapa
                            </a>
                        </p>

                        <p>
                            <strong>Correo electrónico:</strong>
                            <br />
                            <a href="mailto:ejemplo@cuch.gob.ar">
                                ejemplo@cuch.gob.ar
                            </a>
                        </p>

                        <p>
                            <strong>Teléfono:</strong>
                            <br />
                            <a href="tel:+542346432493">+54 (2346) 43 2493</a>
                        </p>
                    </div>
                </div>

                <hr />

                <div className="bottom">
                    <p>© Copyright 2025. Todos los Derechos Reservados</p>

                    <nav>
                        <a
                            href="https://www.instagram.com/cuchchivilcoy/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCr5qd1wXSfgPLJRfpXNLZsw?view_as=subscriber"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            YouTube
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
