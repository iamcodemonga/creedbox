import React from 'react'

const Contact = () => {
    return (
        <footer className='px-40 mt-48'>
            <h3 className='text-white text-9xl font-black mb-16'>Let's work together</h3>
            <div className="grid grid-cols-5 gap-10 mb-20 place-items-center">
                <div></div>
                <div></div>
                <div className='col-span-3'>
                    <p className='text-gray-300 text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus autem officiis eum quasi dolor ea odio dolore. Numquam, repellat sequi optio laborum dolores eligendi odit non eos, maiores, unde deleniti quibusdam modi dicta a adipisci?</p>
                    <button type="button" className='bg-white rounded-full  px-7 py-4 font-bold mt-10 text-xl'>Send us a mail</button>
                </div>
            </div>
        </footer>
    )
}

export default Contact