import React from 'react'

const ProjectCard = () => {
    return (
        <div className='w-full mb-10'>
            <a href="">
                <img src="https://codemonga.netlify.app/kitcheen-preview.svg" alt="" className='w-full h-full object-contain' />
                <div className='space-y-1'>
                    <h3 className='text-xl text-white font-bold'>Kisheen</h3>
                    <p className='text-sm text-gray-300 font-light'>A food delivery website</p>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard