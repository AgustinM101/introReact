import "./Header.css";

export function Header() {
    return (
        <header>
            <div className="container">
                <a href="">
                    <img src="images/Logo.png" alt="Logo CUCH" />
                </a>

                <nav>
                    <a href="/">INICIO</a>

                    <a href="/category">CATEGORIAS</a>    

                    <a href="">MARCAS</a>


                </nav>
            </div>
        </header>
    );
}
