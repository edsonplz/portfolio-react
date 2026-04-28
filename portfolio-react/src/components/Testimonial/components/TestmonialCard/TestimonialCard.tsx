import './TestimonialCard.scss';
import RychardProfile from '../../assets/profiles/rychard-profile.svg';
import PedroProfile from '../../assets/profiles/pedro-profile.svg';
import AdaiasProfile from '../../assets/profiles/adaias-profile.svg';
import LuluProfile from '../../assets/profiles/lulu-profile.svg';
import SabrinaProfile from '../../assets/profiles/sabrina-profile.svg';

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