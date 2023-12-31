import Link from 'next/link'
import React from 'react'


function Hero() {
    return (
        <div className='text-white'>
            <div className='max-w-7xl mx-auto pt-20 lg:pt-28 px-7 2xl:-px-0'>
                <div className="flex items-center flex-col lg:flex-row gap-5">
                    <div data-aos="fade-left" data-aos-duration="2500" className="w-full lg:w-2/5">

                        <h1 className='text-3xl lg:text-4xl font-semibold text-white'>
                            Empower Your Growth with Proven Affiliate Networking Solutions
                        </h1>
                        <p className='text-sm text-gray-200 mt-5'>Affilify is an advertising network that offers the best rates and focuses on growing revenue for publishers. Increase your profit with us. </p>
                        <div className='mt-10'>
                            <Link
                                href='#components'>
                                <button className='  bg-white text-gray-800  transition duration-150 px-7 py-3 rounded-md'>Get Started Today</button>
                            </Link>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2500" className=" w-full lg:w-3/5               
                py-20">

                        <div className='w-full lg:w-3/5 mx-auto flex flex-col gap-1 z-20 text-gray-300'>
                            <img src="/undraw_connected_world_wuay.svg" alt="" className='w-full lg:scale-125 ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero