import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <section className='px-40'>
            <div className='grid grid-cols-2 gap-10'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}

export default Projects