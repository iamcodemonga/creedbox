import React from 'react'

const Navbar = () => {
    return (
        <nav className='text-white w-full flex justify-between items-center py-7 px-20'>
            <a href="http://" className='text-2xl flex items-center'><img src='/logo.png' className='w-10 mr-2' /> Creedbox</a>
            <div className='space-x-5'>
                <a href="http://">Projects</a>
                <a href="http://">FAQs</a>
                <a href="http://">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar