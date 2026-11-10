const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'PHP', 'MySQL', 'Python']

export default function About() {
  return (
    <section id="sobre" className="section">
      <h2>Sobre mim</h2>
      <div className="about-content">
        <img className="about-photo" src="/gui.jpeg" alt="foto do perfil" />
      </div>
      <p>Tenho 25 anos e sou estudante do 3° período de Analise e desenvolvimento de sistemas.</p>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}