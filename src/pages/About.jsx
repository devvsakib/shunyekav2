import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import { seo } from '../meta/aboutSEO'

const About = () => {
    return (
        <>
            {/* seo */}
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta name="keywords" content={seo.keywords} />
            </Helmet>
            <Layout>
                About
            </Layout>
        </>
    )
}

export default About