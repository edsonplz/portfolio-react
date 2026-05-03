import './Projects.scss';
import DevStudyProject from '../../assets/devstudy-project.svg';
import AlugarteProject from '../../assets/alugarte-project.svg';
import InformaticaProject from '../../assets/informatica.svg';
import AgendaDeClientesProject from '../../assets/agenda-de-clientes.png';
import RefloraAeProject from '../../assets/reflora-ae.png';
import LinkIcon from '../../assets/link-icon.svg';
import GithubIcon from '../../assets/github-icon.svg';
import ProjectCard from './components/ProjectCard';

const projectsInfo = [
    {
        title: "Dev Study",
        description: "Esse jogo quiz foi desenvolvido para auxiliar alunos da disciplina de Projeto de Software a fixarem os conhecimentos adquiridos em sala de aula. Através de perguntas interativas e desafios, o sistema proporciona uma forma dinâmica e divertida de revisar os principais conceitos da matéria.",
        stack: "HTML, CSS, JavaScript e React",
        projectUrl: "#",
        codeUrl: "https://github.com/projeto-dev-study/dev-study-application.git",
        imageSrc: DevStudyProject,
        imageAlt: "Projeto DevStudy Edson"
    },
    {
        title: "Alugarte",
        description: "Esse sistema foi desenvolvido para conectar artistas e contratantes de forma simples e eficiente. Nele, é possível buscar, contratar e gerenciar apresentações artísticas, facilitando a comunicação, negociação e organização de eventos.",
        stack: "Kodular (Low Code)",
        projectUrl: "#",
        codeUrl: "#",
        imageSrc: AlugarteProject,
        imageAlt: "Projeto Alugarte Edson"
    },
    {
        title: "Loja",
        description: "Loja de Informática desenvolvida como projeto pessoal em formato SPA, O sistema permite visualizar produtos, adicionar itens ao carrinho, calcular frete e valores totais, focando em interatividade, lógica de negócio e experiência do usuário.",
        stack: "HTML, CSS e JavaScript",
        projectUrl: "https://loja-informatica-eight.vercel.app/",
        codeUrl: "https://github.com/edsonplz/loja-informatica.git",
        imageSrc: InformaticaProject,
        imageAlt: "Projeto Loja de Informática Edson"
    },
    {
        title: "Agenda de Clientes",
        description: "Agenda de Clientes desenvolvida como projeto pessoal em formato SPA, O sistema permite visualizar clientes, adicionar novos clientes, editar informações e excluir registros, focando em interatividade, lógica de negócio e experiência do usuário.",
        stack: "HTML, CSS e JavaScript",
        projectUrl: "https://agenda-de-clientes-pwo57o197-edsons-projects-91823d22.vercel.app/",
        codeUrl: "https://github.com/edsonplz/Agenda-de-Clientes.git",
        imageSrc: AgendaDeClientesProject,
        imageAlt: "Projeto Agenda de Clientes Edson"
    }, 
    {
        title: "Reflora Ae",
        description: "Projeto de extensão universitária que visa promover a conservação e o uso sustentável da biodiversidade em ambientes agrícolas. Através de atividades de pesquisa, educação ambiental e ações de conservação, o Reflora Ae busca integrar a biodiversidade à agricultura, contribuindo para a sustentabilidade e a preservação dos ecossistemas.",
        stack: "Spring Boot, React Js e PostgreSQL",
        projectUrl: "#",
        codeUrl: "#",
        imageSrc: RefloraAeProject,
        imageAlt: "Projeto Reflora Ae Edson"
    }
];

function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <div className="header-section">
                    <h1 className="title">Projetos</h1>
                    <h2 className="subtitle">Esses são os projetos que eu desenvolvi</h2>
                </div>
                <div className="info-projects">
                    {projectsInfo.map((project) => {
                        return (
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                stack={project.stack}
                                projectUrl={project.projectUrl}
                                codeUrl={project.codeUrl}
                                imageSrc={project.imageSrc}
                                imageAlt={project.imageAlt}
                            />
                        )
                    }
                    )}
                </div>
            </div>
        </section>
    )
}

export default Projects;