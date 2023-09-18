import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import { seo } from '../meta/aboutSEO'
import Testimonial from '../components/Testimonials'
import HeroSection from '../components/Common/HeroSection'

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
                <Testimonial />
            </Layout>
        </>
    )
}

export default About