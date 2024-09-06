import React from 'react'

const About = () => {
    return (
        <section className='px-40 mt-48'>
            <h3 className='text-white text-9xl font-black mb-16'>About Us</h3>
            <div className="grid grid-cols-5 gap-10 mb-20 place-items-center">
                <div></div>
                <div className='col-span-2'>
                    <h4 className='text-white text-3xl font-bold mb-3'>Who we are?</h4>
                    <p className='text-gray-300 text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus autem officiis eum quasi dolor ea odio dolore. Numquam, repellat sequi optio laborum dolores eligendi odit non eos, maiores, unde deleniti quibusdam modi dicta a adipisci?</p>
                </div>
                <div className='col-span-2'>
                    <h4 className='text-white text-3xl font-bold mb-3'>Why choose us?</h4>
                    <p className='text-gray-300 text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus autem officiis eum quasi dolor ea odio dolore. Numquam, repellat sequi optio laborum dolores eligendi odit non eos, maiores, unde deleniti quibusdam modi dicta a adipisci?</p>
                </div>
            </div>
            <div className='grid grid-cols-2 mt-44'>
                <div>
                    <h3 className='text-white text-6xl leading-tight font-black capitalize'>frequently asked questions</h3>
                </div>
                <div className='space-y-5'>
                    <div>
                        <button className='text-white text-xl mb-2'> This is the first question</button>
                        <p className='text-gray-400 text-base mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate molestiae non facilis earum esse unde, minima facere delectus laboriosam magnam, repudiandae sapiente. Dolorum tempore, eos molestias enim illo suscipit eligendi alias exercitationem. Illum, nam aspernatur.</p>
                        <hr />
                    </div>
                    <div>
                        <button className='text-white text-xl mb-2'> This is the first question</button>
                        <p className='text-gray-400 text-base mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate molestiae non facilis earum esse unde, minima facere delectus laboriosam magnam, repudiandae sapiente. Dolorum tempore, eos molestias enim illo suscipit eligendi alias exercitationem. Illum, nam aspernatur.</p>
                        <hr />
                    </div>
                    <div>
                        <button className='text-white text-xl mb-2'> This is the first question</button>
                        <p className='text-gray-400 text-base mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate molestiae non facilis earum esse unde, minima facere delectus laboriosam magnam, repudiandae sapiente. Dolorum tempore, eos molestias enim illo suscipit eligendi alias exercitationem. Illum, nam aspernatur.</p>
                        <hr />
                    </div>
                    <div>
                        <button className='text-white text-xl mb-2'> This is the first question</button>
                        <p className='text-gray-400 text-base mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate molestiae non facilis earum esse unde, minima facere delectus laboriosam magnam, repudiandae sapiente. Dolorum tempore, eos molestias enim illo suscipit eligendi alias exercitationem. Illum, nam aspernatur.</p>
                        <hr />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About