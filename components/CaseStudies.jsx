import React from 'react'

function CaseStudies() {


    const data = [
        {
            img: '',
            title: 'XYZ Electronics: Boosting Sales by 150% in 3 Months',
            desc: 'Discover how our affiliate program management services helped XYZ Electronics achieve unprecedented growth. '
        },
        {
            img: 'https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg',
            title: 'Fashion Haven: Tripled Affiliate Network Size in 6 Months',
            desc: 'Learn how we transformed Fashion Havens affiliate network by streamlining the recruitment and onboarding process. '
        },
        {
            img: 'https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg',
            title: 'Health Hub: 200% ROI Increase with Analytics Optimization',
            desc: "Explore how our performance analytics and reporting services revolutionized Health Hub's marketing strategies. "
        },
        {
            img: 'https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg',
            title: 'Green Living Co.: Creative Collateral That Converts',
            desc: "Uncover the success story of Green Living Co. as we revamped their marketing collateral. "
        },
    ]







    return (
        <div className=' text-gray-800 py-20'>
            <section className=" max-w-7xl mx-auto px-7 2xl:px-0">
                <h2 className='text-3xl font-semibold text-center pt-14 pb-5 '>
                    Case Studies
                </h2>
                <p className='text-center text-sm'>
                    Explore success stories of our customers who have benefited from our service.
                </p>


                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-20">
                    {
                        data.map((item, index) => (
                            <div key={index} className=" bg-red-500 bg-opacity-10 shadow-xl">
                                <figure><img src={item.img} alt="pic" className='w-[230px] object-cover' /></figure>
                                <div className="">
                                    <h2 className="text-xl text-center font-bold py-3">
                                        {item.title}
                                    </h2>
                                    <p className='text-center
                                    line-clamp-3 
                                '>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>
        </div>
    )
}

export default CaseStudies