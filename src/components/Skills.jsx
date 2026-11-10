import { useState } from 'react'
import skills from '../data/skills'

export default function Skills() {
  const categories = Object.keys(skills)
  const [active, setActive] = useState(categories[0])

  return (
    <section id="habilidades" className="section">
      <h2>Habilidades</h2>
      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === active ? 'tab active' : 'tab'}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <ul className="skills">
        {skills[active].map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}