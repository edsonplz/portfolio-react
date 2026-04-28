import './Testimonial.scss';
import TestimonialCard from './components/TestmonialCard/TestimonialCard';
import RychardProfile from '../../assets/profiles/rychard-profile.svg';

function Testimonial() {
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
                <TestimonialCard description="Recomendo meu colega Edson com grande satisfação. Tivemos a oportunidade de participar juntos de diversos projetos e atividades na universidade, e ele sempre demonstrou comprometimento, proatividade e domínio técnico na área de programação. Sem dúvida, é um excelente profissional, com grande potencial para contribuir em qualquer equipe de desenvolvimento." name="Rychard" occupation="Colega da universidade" profileImage={RychardProfile} linkedinUrl="https://www.linkedin.com/in/rychard-lucena-826880298/" highlight={false} />
            </div>
        </section>
    )
}

export default Testimonial;