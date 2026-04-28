import './Testimonial.scss';
import TestimonialCard from './components/TestmonialCard/TestimonialCard';
import RychardProfile from '../../assets/profiles/rychard-profile.svg';
import PedroProfile from '../../assets/profiles/pedro-profile.svg';

function Testimonial() {
    const testimonialscardinfo = [
        {
            description: "Recomendo meu colega Edson com grande satisfação. Tivemos a oportunidade de participar juntos de diversos projetos e atividades na universidade, e ele sempre demonstrou comprometimento, proatividade e domínio técnico na área de programação. Sem dúvida, é um excelente profissional, com grande potencial para contribuir em qualquer equipe de desenvolvimento.",
            name: "Rychard",
            occupation: "Colega da universidade",
            profileImage: RychardProfile,
            linkedinUrl: "https://www.linkedin.com/in/rychard-lucena-826880298/",
            highlight: false
        },
        {
            description: "Tive o prazer de trabalhar com Edson em vários projetos durante a universidade, e posso dizer com confiança que ele é um profissional dedicado e talentoso na área de programação. Sempre colaborativo, responsável e com ótimas soluções técnicas, se destacou tanto pelo conhecimento quanto pela disposição em ajudar a equipe. É alguém em quem se pode confiar para entregar um trabalho de qualidade.",
            name: "Pedro Athyrson",
            occupation: "Colega da universidade",
            profileImage: PedroProfile,
            linkedinUrl: "https://www.linkedin.com/in/pedro-athyrson/",
            highlight: true
        }]

    return (
        <section id="testimonial">
            <div className="container">
                <div className="header-section">
                    <h1 className="title">Depoimentos</h1>
                    <h2 className="subtitle">Recomendações sobre meu trabalho</h2>
                </div>
                <div className="info-testimonial">
                    <div className="controls-testimonials">
                        <div className="prev-testimonial"> {'<'} </div>
                        <div className="next-testimonial"> {'>'} </div>
                    </div>
                </div>
                <div className="container-testimonials">
                    {testimonialscardinfo.map((cardinfo) => {
                        return (
                            <TestimonialCard
                                description={cardinfo.description}
                                name={cardinfo.name}
                                occupation={cardinfo.occupation}
                                profileImage={cardinfo.profileImage}
                                linkedinUrl={cardinfo.linkedinUrl}
                                highlight={cardinfo.highlight} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Testimonial;