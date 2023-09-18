import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import { seo } from '../meta/aboutSEO'
import HeroSection from '../components/Common/HeroSection'
import Testimonials from '../components/Testimonials'

const About = () => {
    return (
        <>
            {/* seo */}
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta name="keywords" content={seo.keywords} />
            </Helmet>
            <HeroSection />
            <Layout>
                <div className='mb-10'>
                    <div className='text-center'>
                        <h3 className="text-3xl font-circularBol">Testimonials</h3>
                        <p className="text-gray mt-2">Few words from our customers.</p>
                    </div>
                    <div className='w-full pb-10'>
                        <Testimonials />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default About