import './Header.scss';
import logo from '../assets/logo.svg';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="info-header">
                    <div className="logo">
                        <img src={logo} alt="Logo Edson Silva" />
                    </div>
                    <div className="info-menu">
                        <nav className="menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#aboutme">Sobre</a></li>
                                <li><a href="#tecnologies">Tecnologias</a></li>
                                <li><a href="#projects">Projetos</a></li>
                                <li><a href="#contact">Contato</a></li>
                            </ul>
                        </nav>
                        <div className="icons-menu">
                            <a href="https://github.com/edsonplz" target="_blank"><img src="./assets/github.svg" alt="Github Edson Silva" /></a>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-edson-b88018333/" target="_blank"><img src="./assets/linkedin.svg" alt="Linkedin Edson Silva" /></a>
                        </div>
                    </div>
                    <div className="mobile-menu-icon">&#9776;</div>
                </div>
            </div>
        </header>
    )
}

export default Header;