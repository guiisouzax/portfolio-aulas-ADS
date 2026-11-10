import { useState } from 'react'

export default function ProjectCard({ title, description, tech, details, link }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="tech">{tech.join(' · ')}</p>
      <button className="link-btn" onClick={() => setOpen(!open)}>
        {open ? 'Ocultar detalhes' : 'Ver detalhes'}
      </button>
      {open && (
        <div className="details">
          <p>{details}</p>
          <a href={link} target="_blank" rel="noreferrer">Ver código →</a>
        </div>
      )}
    </article>
  )
}