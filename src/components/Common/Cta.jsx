import { Link } from "react-router-dom"
import Layout from "../Layout"

const Cta = () => {
    return (
        <section className="py-28 bg-primaryBg my-20">
            <Layout>
                <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
                    <div>
                        <h3 className="text-4xl text-black font-circularBol">For support or any questions</h3>
                        <p className="text-lg mt-2">Related to your business needs submit your requests and queries here.</p>
                    </div>
                    <div className="text-xl">
                        <Link to="/contact-us" className="bg-secondary text-white rounded-md px-10 py-5">Contact Us</Link>
                    </div>
                </div>
            </Layout>
        </section>
    )
}

export default Cta