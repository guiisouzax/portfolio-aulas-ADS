import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <h2>Projetos e experiências</h2>
      <div className="cards">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  )
}