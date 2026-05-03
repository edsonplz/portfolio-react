import './TestimonialCard.scss';

interface TestimonialCardProps {
    description: string;
    name: string;
    occupation: string;
    profileImage: string;
    linkedinUrl: string;
    highlight: boolean;
}

function TestimonialCard({ description, name, occupation, profileImage, linkedinUrl, highlight }: TestimonialCardProps) {
    return (
        <div className={highlight ? "fill-in-card-testimonial" : "outline-card-testimonial"}>
            <p>{description}</p>
            <div className="footer-card-testimonial">
                <a href={linkedinUrl} target="_blank"><img src={profileImage} alt={`Imagem depoimento ${name}`} width="40px" height="40px" /></a>
                <div className="info-personal-testimonial">
                    <a href={linkedinUrl} target="_blank"><p className="name-testimonial">{name}</p></a>
                    <p className="ocuppation-testimonial">{occupation}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;