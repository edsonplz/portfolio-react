import "./Contact.scss";
import SendIcon from '../../assets/send-icon.svg';

function Contact() {
    return (
        <div className="container">
            <div className="header-section">
                <h1 className="title">Vamos Conversar ?</h1>
                <h2 className="subtitle">Entre em contato comigo!</h2>
            </div>
            <div className="info-contact">
                <form>
                    <input type="text" id="nome" placeholder="Nome" />
                    <input type="email" id="email" placeholder="Email" />
                    <input type="text" id="assunto" placeholder="Assunto" />
                    <textarea id="mensagem" placeholder="Mensagem"></textarea>

                    <div className="submit-form">
                        <input type="submit" value="Enviar" />
                        <img src={SendIcon} alt="Formulário de contato portfolio Edson" />
                    </div>
                </form>
                <p id="loading" className="response-forms" style={{ display: 'none' }}>Carregando...</p>
                <p id="success-message" className="response-forms" style={{ display: 'none' }}>Mensagem enviada com sucesso!</p>
                <p id="error-message" className="response-forms" style={{ display: 'none' }}>Erro ao enviar mensagem, mande um email para: crafte170@gmail.com</p>
            </div>
        </div>
    )
}

export default Contact;