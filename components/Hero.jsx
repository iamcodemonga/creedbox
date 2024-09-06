import React from 'react'

const Hero = () => {
    return (
        <div className='w-full flex items-center justify-center my-32'>
            <div className='w-2/4 space-y-10'>
                <h1 className='text-6xl text-white font-black text-center leading-tight'>Transform your ideas into digital products with our expert team.</h1>
                <div className='flex justify-center'>
                    <p className='text-base text-gray-300 text-center w-2/3 leading-6'>We specialize in the development, branding, and management of your digital products, including websites and mobile applications, allowing you to concentrate on the core aspects of your business</p>
                </div>
                {/* <img src="https://codemonga.netlify.app/kitcheen-preview.svg" alt="" /> */}
            </div>
        </div>
    )
}

export default Hero