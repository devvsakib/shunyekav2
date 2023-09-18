import Layout from "../components/Layout";
import { seo } from "../meta/aboutSEO";
const Home = () => {
    return (
        <>
            <meta name="title" content={seo.title} />

            <Layout>
                <section className="h-screen bg-orange-300">
                </section>
                <section className="h-screen bg-orange-400">
                </section>
                <section className="h-screen bg-orange-500">
                </section>
            </Layout>
        </>
    )
}

export default Home