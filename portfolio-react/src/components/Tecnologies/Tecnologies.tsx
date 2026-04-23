import './Tecnologies.scss';
import html from '../../assets/tecnologies/html.svg';
import css from '../../assets/tecnologies/css.svg';
import javascript from '../../assets/tecnologies/javascript.svg';
import react from '../../assets/tecnologies/react.svg';
import bootstrap from '../../assets/tecnologies/bootstrap.svg';
import git from '../../assets/tecnologies/git.svg';
import github from '../../assets/tecnologies/github.svg';
import sql from '../../assets/tecnologies/sql.svg';
import vscode from '../../assets/tecnologies/vscode.svg';
import java from '../../assets/tecnologies/java 1.svg';
import springBoot from '../../assets/tecnologies/spring-boot 1.svg';

function tecnologies() {
    return (
        <section id="tecnologies">
            <div className="container">
                <div className="header-section">
                    <h1 className="title">Tecnologias que eu domino</h1>
                    <h2 className="subtitle">Essas são as Tecnologias que eu tenho conhecimento</h2>
                </div>
                <div className="container-icons">
                    <img src={html} alt="Logo Html Edson" />
                    <img src={css} alt="Logo CSS Edson" />
                    <img src={javascript} alt="Logo JavaScript Edson" />
                    <img src={react} alt="Logo React Edson" />
                    <img src={bootstrap} alt="Bootstrap Edson" />
                </div>
                <div className="container-icons">
                    <img src={git} alt="Git Edson" />
                    <img src={github} alt="Github Edson" />
                    <img src={sql} alt="SQL Edson" />
                    <img src={vscode} alt="VS Code Edson" />
                    <img src={java} alt="Java Edson" />
                    <img src={springBoot} alt="Spring Boot Edson" />
                </div>
            </div>
        </section>
    )
}

export default tecnologies;