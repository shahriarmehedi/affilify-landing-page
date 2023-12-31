import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function CaseStudies() {


    const data = [
        {
            img: 'undraw_photo_session_re_c0cp.svg',
            title: 'XYZ Electronics: Boosting Sales by 150% in 3 Months',
            desc: 'Discover how our affiliate program management services helped XYZ Electronics achieve unprecedented growth. '
        },
        {
            img: 'undraw_photo_session_re_c0cp.svg',
            title: 'Fashion Haven: Tripled Affiliate Network Size in 6 Months',
            desc: 'Learn how we transformed Fashion Havens affiliate network by streamlining the recruitment and onboarding process. '
        },
        {
            img: 'undraw_photo_session_re_c0cp.svg',
            title: 'Health Hub: 200% ROI Increase with Analytics Optimization',
            desc: "Explore how our performance analytics and reporting services revolutionized Health Hub's marketing strategies. "
        }
    ]


    const items = [
        <div className='flex flex-col items-center justify-center gap-5 mt-10 px-5'>
            <div className=''>
                <img src="https://d2908q01vomqb2.cloudfront.net/77de68daecd823babbb58edb1c8e14d7106e83bb/2023/12/27/Top-APN-Blogs-2023-featured-1024x512.png" alt="" className=' rounded-lg h-[500px]' />
            </div>
            <h2 className='text-xl font-semibold text-center'>XYZ Electronics: Boosting Sales by 150% in 3 Months</h2>
            <p className='text-center text-base'>Discover how our affiliate program management services helped XYZ Electronics achieve unprecedented growth. By strategically recruiting top-performing affiliates and implementing data-driven strategies, we significantly increased sales, positioning XYZ Electronics as a market leader.
            </p>
        </div>,
        <div className='flex flex-col items-center justify-center gap-5 mt-10 px-5'>
            <img src="https://d2908q01vomqb2.cloudfront.net/77de68daecd823babbb58edb1c8e14d7106e83bb/2023/10/10/Partners-Modernize-Microsoft-Workloads-featured-1024x512.png" alt="" className=' rounded-lg h-[500px]' />
            <h2 className='text-xl font-semibold text-center'>Fashion Haven: Tripled Affiliate Network Size in 6 Months</h2>
            <p className='text-center text-base'>
                Learn how we transformed Fashion Haven's affiliate network by streamlining the recruitment and onboarding process. Through targeted outreach and personalized onboarding experiences, we tripled the network size, expanding the brand's reach and driving a surge in sales.
            </p>
        </div>,
        <div className='flex flex-col items-center justify-center gap-5 mt-10 px-5'>
            <img src="https://d2908q01vomqb2.cloudfront.net/77de68daecd823babbb58edb1c8e14d7106e83bb/2023/12/27/Top-APN-Blogs-2023-featured-1024x512.png" alt="" className=' rounded-lg h-[500px]' />
            <h2 className='text-xl font-semibold text-center'>Health Hub: 200% ROI Increase with Analytics Optimization</h2>
            <p className='text-center text-base'>
                Explore how our performance analytics and reporting services revolutionized Health Hub's marketing strategies. By harnessing the power of data, we identified high-converting channels, optimized campaigns, and achieved a remarkable 200% increase in return on investment.
            </p>
        </div>,

    ]




    return (
        <div data-aos="fade-up" data-aos-duration="2000"
            className=' text-gray-800 pt-20 pb-36'>
            <section className=" max-w-7xl mx-auto px-7 2xl:px-0">
                <h2 className='text-3xl font-semibold text-center pt-14 pb-5 '>
                    Case Studies
                </h2>
                <p className='text-center text-sm'>
                    Explore success stories of our customers who have benefited from our service.
                </p>


                {/* SLIDER */}
                <AliceCarousel
                    mouseTracking
                    items={items}
                    autoPlayInterval={2000}
                    autoPlayDirection="ltr"
                    autoPlay={true}
                    infinite={true}
                    disableButtonsControls={true}

                />

            </section>
        </div>
    )
}

export default CaseStudies