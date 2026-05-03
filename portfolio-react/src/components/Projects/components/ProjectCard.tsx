import './ProjectCard.scss';
import LinkIcon from '../../../assets/link-icon.svg';
import GithubIcon from '../../../assets/github-icon.svg';

interface ProjectCardProps {
    title: string;
    description: string;
    stack: string;
    projectUrl: string;
    codeUrl: string;
    imageSrc: string;
    imageAlt: string;
}

function ProjectCard({ title, description, stack, projectUrl, codeUrl, imageSrc, imageAlt }: ProjectCardProps) {
    return (
        <div className="card-project">
            <img src={imageSrc} alt={imageAlt} className="image-project" />
            <div className="info-card-project">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="legend-project">
                    <p><span>Stack:</span> {stack}</p>
                </div>
                <div className="footer-project">
                    <div className="url-project">
                        <img src={LinkIcon} alt="Link projeto Alugarte Edson" />
                        <a href={projectUrl} target="_blank">Site do projeto</a>
                    </div>
                    <div className="code-project">
                        <img src={GithubIcon} alt="Link do codigo do projeto DevStudy Edson" />
                        <a href={codeUrl} target="_blank">Código fonte</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;