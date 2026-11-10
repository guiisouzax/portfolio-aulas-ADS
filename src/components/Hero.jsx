export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-hi">Olá, eu sou</p>
        <h1>Guilherme Souza</h1>
        <p className="hero-role">Suporte de T.I</p>
        <p className="hero-desc">
          Cursando 3° Periodo de Analise e Desenvolvimento de Sistemas
          
        </p>
        <a className="btn" href="#projetos">Ver projetos</a>
      </div>
      <img className="hero-photo" src="public/gui.jpeg" alt="Foto de Guilherme Souza" />
    </section>
  )
}