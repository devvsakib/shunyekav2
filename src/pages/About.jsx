import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import { seo } from '../meta/seo'
import HeroSection from '../components/Common/HeroSection'
import FeatureSection from '../components/Common/FeatureSection'
import Testimonials from '../components/Testimonials'
import Client from '../components/Carousel/Client'
import MetaContainer from '../meta/MetaContainer'

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
            <MetaContainer title={"About Us"} seo={seo.about} />
            <HeroSection from="/" />
            <Layout>
                {/* about us */}
                <FeatureSection list={list} />

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