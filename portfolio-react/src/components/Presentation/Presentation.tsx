import './Presentation.scss';
import profilePhoto from '../../assets/perfil.png';

function Presentation() {
    return (
        <section id="apresentation">
            <div className="container">
                <div className="info-apresentation">
                    <h1>
                        Olá!<br />
                        Meu nome é Edson<br />
                        e eu sou<br />
                        <span>Desenvolvedor Web</span>
                    </h1>
                    <div className="profile-photo">
                        <img src={profilePhoto} alt="Edson perfil" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presentation;