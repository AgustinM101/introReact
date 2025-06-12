import "./Header.css";

export function Header() {
    return (
        <header>
            <div className="container">
                <a href="">
                    <img src="images/Logo.png" alt="Logo CUCH" />
                </a>

                <nav>
                    <a href="">CARRERAS</a>
                    <a href="">UNIVERSIDADES</a>
                    <a href="">INSTITUCIONAL</a>
                    <a href="">NOTICIAS</a>
                </nav>
            </div>
        </header>
    );
}
