import "./Header.css";

export function Header() {
    return (
        <header>
            <div className="container">
                <a href="">
                    <img className="logo-crearte" src="https://th.bing.com/th/id/R.981f8b33fd734a335e848783f7e15cca?rik=DAQASHTKUUrGJA&pid=ImgRaw&r=0" alt="Logo Marca Crearte" />
                </a>

                <nav>
                    <a href="/">INICIO</a>

                    <a href="/clients">CLIENTES</a>    

                    <a href="/brands">MARCAS</a>


                </nav>
            </div>
        </header>
    );
}
