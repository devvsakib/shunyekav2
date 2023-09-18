import { Link } from "react-router-dom"
import HeroSection from "../components/Common/HeroSection"
import Layout from "../components/Layout"
import { data } from '../data/data'
const Services = () => {
    return (
        <>
            <HeroSection />
            <Layout>
                <div className="text-center max-w-[900px] mx-auto">
                    <h3 className="text-4xl font-circularBol">Automation in CloudOps, DevOps and SecOps</h3>
                    <p className="text-gray mt-2">
                        ShunyEka’s 24/7 AWS Cloud Managed Services allows you to focus on your business. Our highly qualified team of SysOps & DevOps Engineers take care of high availability, scalability and security for your Infrastructure and Applications.
                    </p>
                </div>
                {/* services */}
                <div>
                    <div className="grid md:grid-cols-2 gap-5 mt-12">
                        {
                            data.services.map((item, index) => (
                                <Link to={item.path} className="flex flex-col justify-between items-center border border-gray/20 p-5 rounded-2xl shadow-sm hover:shadow-2xl duration-300 ease-linear" key={index}>
                                    <div className="w-full md:w-1/2">
                                        <img src={item.thumbnail} alt={item.title} className="w-full" />
                                    </div>
                                    <div className="">
                                        <h3 className="text-xl md:text-3xl font-circularBol">{item.heading}</h3>
                                        <p className="text-gray mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Services