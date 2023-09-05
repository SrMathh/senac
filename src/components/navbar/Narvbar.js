import "../navbar/Navbar.css"
import imglogo from "../../img/logo.jpg"
function Navbar(){
    return(
        <nav>
            <li className="Nav">
                <div className="logo">
                    <img src={imglogo} alt=""/>
                </div>
                <ul className="conteudo">
                    Home
                </ul>
                <ul className="conteudo">
                    Sobre
                </ul>
                <ul className="conteudo">
                    Tech Stack
                </ul>
                <ul className="conteudo">
                    Project
                </ul>
                <ul className="conteudo">
                    Contatos
                </ul>
            </li>
        </nav>
    );
}

export default Navbar