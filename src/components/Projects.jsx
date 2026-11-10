import projects from '../data/projects'

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <h2>Projetos</h2>
      <div className="cards">
        {projects.map((p) => (
          <article key={p.id} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p className="tech">{p.tech.join(' · ')}</p>
            <a href={p.link} target="_blank" rel="noreferrer">Ver projeto →</a>
          </article>
        ))}
      </div>
    </section>
  )
}