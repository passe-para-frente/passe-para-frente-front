import React, { Component } from 'react'

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            nome: '',
            texto: '',
        }
        this.handleForm = this.handleForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    handleForm(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }

    submitForm(e){
        e.preventDefault();
        const obj = {
            "email": this.state.email,
            "nome": this.state.nome,
            "mensagem": this.state.texto
        }
        console.log(obj)
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const options = {
            method: "POST",
            cache: "default",
            headers,
            mode: "cors",
            body: JSON.stringify(obj)
        }
        fetch("https://enw49r5si5y5l.x.pipedream.net/", options);
    }

    render() {
        return (
            <section id="contact">
                <div className="contact-box">
                    <h2>Entre em Contato</h2>
                    <p className="message">Nos envie seu email para podermos entrar em contato com você! :)</p>
                </div>
                <div className="contact-form">
                    <form onSubmit={this.submitForm} className="form">
                        <input type="text" value={this.state.email} onChange={this.handleForm}  name="email" className="contact contact__input" placeholder="exemplo@exemplo.com.br" />
                        <input type="text" name="nome" value={this.state.nome} onChange={this.handleForm} className="contact contact__input" placeholder="Nome" />
                        <textarea placeholder="Deixe sua mensagem" className="contact contact__textarea" name="texto" value={this.state.texto} onChange={this.handleForm} ></textarea>
                        <div className="contact-send">
                            <button className="send-button">Enviar Mensagem</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default ContactForm;