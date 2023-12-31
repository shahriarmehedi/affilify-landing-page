import React from 'react'

function Companies() {


    const clients = [
        {
            name: "Microsoft",
            logo: "https://pngimg.com/uploads/microsoft/microsoft_PNG20.png",
        },

        {
            name: "Google Cloud Partner",
            logo: "https://convergetp.com/wp-content/uploads/2022/01/GC-Partner1.png",
        },
        {
            name: "New Relic",
            logo: "https://newrelic.com/themes/custom/erno/assets/mediakit/new_relic_logo_horizontal.png",
        },
        {
            name: "GitHub",
            logo: "https://pngimg.com/d/github_PNG15.png",
        },

        {
            name: "Grafana",
            logo: "https://cdn.icon-icons.com/icons2/2699/PNG/512/grafana_logo_icon_171049.png",
        },
        {
            name: "PagerDuty",
            logo: "https://download.logo.wine/logo/PagerDuty/PagerDuty-Logo.wine.png",
        },
        {
            name: "OpsGenie",
            logo: "https://www.starfishetl.com/sites/default/files/styles/product_logo/public/2022-07/Opsgenie%20logo.png?itok=jWoG2yVc",
        },
        {
            name: "Kubernetes",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Kubernetes_logo.svg/2560px-Kubernetes_logo.svg.png",
        },
    ]

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="bg-gray-100 py-24" >
            <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-10">
                    <div className="text-center">
                        <h1 className='text-gray-800 text-2xl font-semibold text-center pt-5'>Trusted by 50+ high performing teams</h1>

                        {/* <p className="text-gray-400 text-center py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p> */}
                    </div>

                    <div className="flex flex-wrap justify-center gap-10">
                        {
                            clients.map((client) => {
                                return (
                                    <div className="flex flex-col lg:flex-row items-center gap-5">
                                        <picture>
                                            <img
                                                className=" w-36 hover:opacity-100 transition duration-150 opacity-50"
                                                src={client.logo}
                                                alt={client.name}
                                            />
                                        </picture>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Companies