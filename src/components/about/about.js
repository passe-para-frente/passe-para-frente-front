import React from 'react'

const About = () => {
    return (
        <section className="pf-about-home">
            <div className="pf-about-home__description">
                <h2 className="pf-about-home-title">O que é ?</h2>
                <p>PASSE PARA FRENTE é um site de doação de material esportivo, livro ou vestuário onde pessoas físicas e
                    jurídicas podem doar a fim de contribuir com instituições, escolas da rede pública de ensino e crianças.
                    Queremos com isso estimular a cultura de doação no país.</p>
                <p>Acreditamos no esporte como meio transformador na sociedade. Esporte é educação, cidadania e fundamental no
                    desenvolvimento psicomotor e social da criança.
                    Ao longo de mais de 11 anos à frente de diversos projetos esportivos em comunidades de alta vulnerabilidade
                    social, nos deparamos com a enorme escassez de material esportivo básico e livros nas escolas da rede
                    pública de ensino.
                </p>
                <p>Doar para escolas é potencializar a formação cidadã, pois é o melhor instrumento de transformação da
            sociedade, direito e responsabilidade de todos.</p>
            </div>
            <button className="pf-show-donate">Etapas de Doação</button>
            <div className="pf-donate-boxes">
                <div className="pf-donate-boxes__steps">
                    <div className="how-border-top"></div>
                    <span>Cadastre seu material</span>
                </div>
                <div className="pf-donate-boxes__steps">
                    <div className="how-border-top"></div>
                    <span>Encontre uma escola</span>
                </div>
                <div className="pf-donate-boxes__steps">
                    <div className="how-border-top"></div>
                    <span>Ajude a mudar a vida de estudantes</span>
                </div>
            </div>
        </section>
    )
}

export default About;