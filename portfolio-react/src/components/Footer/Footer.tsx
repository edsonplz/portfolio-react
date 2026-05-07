import "./Footer.scss";
import GitHubIcon from '../../assets/github.svg';
import LinkedinIcon from '../../assets/linkedin.svg';
import LogoIcon from '../../assets/logo.svg';

function Footer() {
    return (
        <div className="container">
            <div className="first-infos-footer">
                <div className="logo">
                    <img src={LogoIcon} alt="Logo" />
                </div>
                <div className="container-right-footer">
                    <p className="cellphone-footer">+55 83 99371-9980</p>
                    <p className="email-footer">edson.silva@dcx.ufpb.br</p>
                    <div className="icons-menu">
                        <a href="https://github.com/edsonplz" target="_blank"><img src={GitHubIcon} alt="GitHub Edson" /></a>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-edson-b88018333/" target="_blank"><img src={LinkedinIcon} alt="Linkedin Edson" /></a>
                    </div>
                </div>
            </div>
            <div className="second-infos-footer">
                <nav className="menu-footer">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#aboutme">Sobre</a></li>
                        <li><a href="#tecnologies">Tecnologias</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
                <p className="copyright">Todos os direitos reservados Edson</p>
            </div>
        </div>
    )
}

export default Footer;