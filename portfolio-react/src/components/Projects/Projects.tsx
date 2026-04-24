import './Projects.scss';
import DevStudyProject from '../../assets/devstudy-project.svg';
import AlugarteProject from '../../assets/alugarte-project.svg';
import InformaticaProject from '../../assets/informatica.svg';
import AgendaDeClientesProject from '../../assets/agenda-de-clientes.png';
import RefloraAeProject from '../../assets/reflora-ae.png';
import LinkIcon from '../../assets/link-icon.svg';
import GithubIcon from '../../assets/github-icon.svg';

function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <div className="header-section">
                    <h1 className="title">Projetos</h1>
                    <h2 className="subtitle">Esses são os projetos que eu desenvolvi</h2>
                </div>
                <div className="info-projects">
                    <div className="card-project">
                        <img src={DevStudyProject} alt="Projeto DevStudy Edson" className="image-project" />
                        <div className="info-card-project">
                            <h3>Dev Study</h3>
                            <p>Esse jogo quiz foi desenvolvido para auxiliar alunos da disciplina de Projeto de Software a fixarem os conhecimentos adquiridos em sala de aula. Através de perguntas interativas e desafios, o sistema proporciona uma forma dinâmica e divertida de revisar os principais conceitos da matéria.</p>
                            <div className="legend-project">
                                <p><span>Stack:</span> HTML, CSS, JavaScript e React</p>
                            </div>
                            <div className="footer-project">
                                <div className="url-project">
                                    <img src={LinkIcon} alt="Link projeto Alugarte Edson" />
                                    <a href="#" target="_blank">Site do projeto</a>
                                </div>
                                <div className="code-project">
                                    <img src={GithubIcon} alt="Link do codigo do projeto DevStudy Edson" />
                                    <a href="https://github.com/projeto-dev-study/dev-study-application.git" target="_blank">Código fonte</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-project">
                        <img src={AlugarteProject} alt="Projeto Alugarte Edson" />
                        <div className="info-card-project">
                            <h3>Alugarte</h3>
                            <p>Esse sistema foi desenvolvido para conectar artistas e contratantes de forma simples e eficiente. Nele, é possível buscar, contratar e gerenciar apresentações artísticas, facilitando a comunicação, negociação e organização de eventos.</p>
                            <div className="legend-project">
                                <p><span>Stack:</span> Kodular (Low Code)</p>
                            </div>
                            <div className="footer-project">
                                <div className="url-project">
                                    <img src={LinkIcon} alt="Link projeto Alugarte Edson" />
                                    <a href="#" target="_blank">Site do projeto</a>
                                </div>
                                <div className="code-project">
                                    <img src={GithubIcon} alt="Link do codigo do projeto Alugarte Edson" />
                                    <a href="#">Código fonte</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-project">
                        <img src={InformaticaProject} alt="Projeto Loja de Informática Edson" />
                        <div className="info-card-project">
                            <h3>Loja</h3>
                            <p>Loja de Informática desenvolvida como projeto pessoal em formato SPA,
                                O sistema permite visualizar produtos, adicionar itens ao carrinho, calcular frete e valores totais, focando em interatividade, lógica de negócio e experiência do usuário.</p>
                            <div className="legend-project">
                                <p><span>Stack:</span> HTML, CSS, JavaScript</p>
                            </div>
                            <div className="footer-project">
                                <div className="url-project">
                                    <img src={LinkIcon} alt="Link projeto Loja de Informática Edson" />
                                    <a href="https://loja-informatica-eight.vercel.app/" target="_blank">Site do projeto</a>
                                </div>
                                <div className="code-project">
                                    <img src={GithubIcon} alt="Link do codigo do projeto Loja de Informática Edson" />
                                    <a href="https://github.com/edsonplz/loja-informatica.git">Código fonte</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-project">
                        <img src={AgendaDeClientesProject} alt="Projeto Agenda de Clientes" />
                        <div className="info-card-project">
                            <h3>Agenda de Clientes</h3>
                            <p>Agenda de Clientes desenvolvida como projeto pessoal em formato SPA,
                                O sistema permite visualizar clientes, adicionar novos clientes, editar informações e excluir registros, focando em interatividade, lógica de negócio e experiência do usuário.</p>
                            <div className="legend-project">
                                <p><span>Stack:</span> HTML, CSS, JavaScript</p>
                            </div>
                            <div className="footer-project">
                                <div className="url-project">
                                    <img src={LinkIcon} alt="Link projeto Agenda de Clientes" />
                                    <a href="https://agenda-de-clientes-pwo57o197-edsons-projects-91823d22.vercel.app/" target="_blank">Site do projeto</a>
                                </div>
                                <div className="code-project">
                                    <img src={GithubIcon} alt="Link do codigo do projeto Agenda de Clientes" />
                                    <a href="https://github.com/edsonplz/Agenda-de-Clientes.git">Código fonte</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-project">
                        <img src={RefloraAeProject} alt="Projeto Reflora Aê" />
                        <div className="info-card-project">
                            <h3>Reflora Aê</h3>
                            <p>Projeto de extensão universitária que visa promover a conservação e o uso sustentável da biodiversidade em ambientes agrícolas.</p>
                            <div className="legend-project">
                                <p><span>Stack:</span> Spring Boot, React JS e PostgreSQL</p>
                            </div>
                            <div className="footer-project">
                                <div className="url-project">
                                    <img src={LinkIcon} alt="Link projeto Reflora Aê" />
                                    <a href="#" target="_blank">Site do projeto</a>
                                </div>
                                <div className="code-project">
                                    <img src={GithubIcon} alt="Link do codigo do projeto Reflora Aê" />
                                    <a href="#">Código fonte</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-projects">
                </div>
            </div>
        </section>
    )
}

export default Projects;