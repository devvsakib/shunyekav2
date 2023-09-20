import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import { seo } from '../meta/aboutSEO'
import HeroSection from '../components/Common/HeroSection'
import Testimonials from '../components/Testimonials'
import Client from '../components/Carousel/Client'

const About = () => {
    const list = [
        "ShunyEka takes complexity out of the Cloud. We bring you over an intense experience in cloud native application. Our skills in serverless and micro service architecture application helps you build secure, scalable and highly available application.",
        " ShunyEka provide support round- the-clock, through the year. Our teams leverage our in house built AI tool autobotAI, Cloud Management platforms to deliver efficient services. ShunyEka offers a range of support plans that best meet your needs. ",
        " At ShunyEka, our technology team possesses advanced Cloud architecting and management certifications from AWS, Azure and Google Cloud platform. ",
        " From design to implementation, Service Monitoring and Management, Cloud Automation and Security – our services span the complete Cloud Lifecycle. "
    ]
    return (
        <>
            {/* seo */}
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta name="keywords" content={seo.keywords} />
            </Helmet>
            <HeroSection from="/" />
            <Layout>
                {/* about us */}
                <div className='mb-10 mt-16'>
                    <div className='w-full pb-10'>
                        <div className='grid md:grid-cols-3 items- justify-center '>
                            <div className='w-full md:w-1/2 mb-5 '>
                                <img src='/img/icons/shunyeka-color.svg' alt='about us' className='w-full' />
                            </div>
                            <div className='col-span-2'>
                                <div className=' mb-5'>
                                    <h4 className='text-4xl font-circularBol mb-3'> Automation in CloudOps, DevOps and SecOps </h4>
                                    <p className='text-gray'>ShunyEka offers Cloud Managed Services, Cloud Automation, Cloud Security, Serverless Application Development, Cloud Migration, DevOps and DevSecOps.</p>
                                </div>
                                <div>
                                    <ul className='grid gap-5'>

                                        {
                                            list.map(item => (
                                                <li className='flex gap-5 items-start'>
                                                    <img src="/img/icons/arrow-correct.svg" alt="" />
                                                    <p>
                                                        {item}
                                                    </p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
            {/* testimonial */}
            <div className='mb-10 bg-[#F9F9F9] py-20'>
                <Layout>
                    <div className='text-center'>
                        <h3 className="text-3xl font-circularBol">Testimonials</h3>
                        <p className="text-gray mt-2">Few words from our customers.</p>
                    </div>
                    <div className='pt-20 pb-5'>
                        <Client />
                    </div>
                    <div className='w-full pb-10'>
                        <Testimonials />
                    </div>
                </Layout>
            </div>
        </>
    )
}

export default About