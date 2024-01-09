import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

function Home() {
    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal(".reveal-me", config);
    }, []);
    const config = {
        origin: "left",
        duration: 1000,
        delay: 200,
        distance: "100px",
        scale: 1,
        easing: "ease",
    };
    return (
        <div className='h-screen'>
            <div className='flex flex-col justify-center items-start h-screen'>
                <div className='ml-4 flex flex-col justify-center gap-5 reveal-me'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-6xl text-white font-bold'>Discover a fitter <br /> you at <span className='text-lime-400'>Elite Gym's</span> LP </h1>
                        <p className='text-gray-300'>where fitness meets excellence!</p>
                    </div>
                    <div className='flex gap-10'>
                        <button className='px-4 py-3 font-semibold bg-lime-600'>Get Started</button>
                        <button className='px-4 py-3 border  border-lime-600 text-lime-500 font-semibold'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home