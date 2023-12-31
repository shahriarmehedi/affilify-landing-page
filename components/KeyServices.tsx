import React from 'react'



function KeyServices() {


    const services = [
        {
            name: 'Affiliate Program Management',
            description: 'Maximize your revenue potential with our comprehensive affiliate program management services. We handle everything from recruitment to performance tracking, ensuring a seamless experience for both affiliates and merchants.',
            image: '/undraw_photo_session_re_c0cp.svg'
        },
        {
            name: 'Performance Analytics and Reporting',
            description: 'Unlock the power of data with our advanced analytics and reporting services. Gain valuable insights into affiliate performance, customer behavior, and campaign effectiveness.',
            image: '/undraw_photo_session_re_c0cp.svg'
        },
        {
            name: 'Affiliate Recruitment and Onboarding',
            description: 'Building a successful affiliate network starts with the right partners. Let us handle the recruitment and onboarding process for you. We identify and engage high-performing affiliates, ensuring they align with your brand values.',
            image: '/undraw_photo_session_re_c0cp.svg'
        },
        {
            name: 'Creative Marketing Collateral',
            description: 'Stand out in a crowded market with compelling marketing collateral. Our team of creative experts develops eye-catching banners, engaging social media content, and persuasive email campaigns.',
            image: '/undraw_photo_session_re_c0cp.svg'
        },
    ]






    return (
        <div data-aos="fade-up" data-aos-duration="2000" id='components' className=' pt-14 pb-36'>
            <div className='max-w-7xl mx-auto px-7 2xl:px-0'>
                <h1 className='text-gray-800 text-2xl font-semibold text-center pt-20'>Key Services</h1>

                <div data-aos="fade-up"
                    data-aos-duration="2000"
                    className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-20'>
                    {
                        services.map((component, index) => (
                            <div key={index} className='flex flex-col gap-5 p-7 border-red-500 hover:bg-red-500 hover:bg-opacity-5 border-opacity-20 border rounded-xl hover:translate-y-[-10px] transition duration-500'>
                                <div className='flex flex-col items-center gap-5'>
                                    <img src={component.image} alt="" className='h-[100px]' />
                                    <div className='text-center'>
                                        <h1 className='text-red-600 text-xl font-semibold'>
                                            {component.name}
                                        </h1>
                                        <p className='text-gray-500 text-sm pt-3'>
                                            {component.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default KeyServices