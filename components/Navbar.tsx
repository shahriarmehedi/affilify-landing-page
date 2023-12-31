import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from 'next/link';



function Navbar() {
    return (
        <div className='bg-white text-gray-800'>
            <div className='max-w-7xl mx-auto px-7 2xl:px-0'>
                <div className='flex justify-between items-center py-5'>
                    <div className='flex items-center'>
                        <img src='https://i.ibb.co/k646d45/LogoNoBg.png' alt='logo' className=' w-[60px]' />
                        <div className=''>
                            <h1 className='text-gray-800 text-2xl font-semibold'>A F F I L I F Y</h1>
                        </div>
                    </div>


                    {/* ------MOBILE MENU------ */}
                    <Sheet>
                        <SheetTrigger className='text-gray-800'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 lg:hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </SheetTrigger>

                        <SheetContent
                            className='bg-white text-gray-800'
                            side={'right'}
                        >
                            {/* close */}
                            <SheetHeader>
                                <SheetTitle>
                                    <div className='flex justify-start ml-5'>
                                        <SheetTrigger>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-12 h-12 border-gray-800 border rounded-lg p-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </SheetTrigger>
                                    </div>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col text-gray-800 pt-10">
                                <div className='flex flex-col ml-5'>
                                    <div className='flex flex-col gap-7 justify-start'>
                                        <a href='https://regionx.gitbook.io/wiki' target='_blank' className=' font-medium hover:text-red-500 transition duration-200 cursor-pointer'>Home</a>
                                        <a href='https://github.com/w3f/Grants-Program/pull/2080' target='_blank' className=' font-medium hover:text-red-500 transition duration-200 cursor-pointer'>Services</a>
                                        <a href='https://github.com/RegionX-Labs' target='_blank' className=' font-medium hover:text-red-500 transition duration-200 cursor-pointer'>About Us</a>
                                        <button className='border-2 border-red-500 hover:bg-red-500 hover:text-white transition duration-300  px-5 py-2 rounded-md'>Contact Us</button>
                                    </div>
                                </div>

                            </div>
                        </SheetContent>
                    </Sheet>




                    {/* --DESKTOP MENU-- */}
                    <div className='lg:flex items-center gap-7 text-sm text-zinc-800 hidden '>
                        <div className='flex items-center'>
                            <div className='flex items-center gap-7'>
                                <a href='https://regionx.gitbook.io/wiki' target='_blank' className=' font-medium hover:text-red-500 transition duration-200 cursor-pointer'>Home</a>
                                <a href='https://github.com/w3f/Grants-Program/pull/2080' target='_blank' className=' font-medium hover:text-red-500 transition duration-200 cursor-pointer'>Services</a>
                                <a href='https://github.com/RegionX-Labs' target='_blank' className=' font-medium hover:text-red-500 transition duration-200 cursor-pointer'>About Us</a>

                            </div>
                        </div>
                        <button className='border-2 border-red-500 hover:bg-red-500 hover:text-white transition duration-300  px-5 py-2 rounded-md ml-5'>Contact Us</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar