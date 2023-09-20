import { Link } from "react-router-dom"
import HeroSection from "../components/Common/HeroSection"
import Layout from "../components/Layout"
import { data } from '../data/data'
import HeadingSubheading from "../components/Common/HeadingSubheading"
const Services = () => {
    return (
        <>
            <HeroSection from="/" />
            <Layout>
                <HeadingSubheading heading={"Automation in CloudOps, DevOps and SecOps"} subheading={"ShunyEka’s 24/7 AWS Cloud Managed Services allows you to focus on your business. Our highly qualified team of SysOps & DevOps Engineers take care of high availability, scalability and security for your Infrastructure and Applications."} />
                {/* services */}
                <div>
                    <div className="grid md:grid-cols-2 gap-5 mt-12">
                        {
                            data.services.map((item, index) => (
                                <Link to={item.path} className="flex flex-col justify-between items-center border border-gray/20 p-5 rounded-2xl shadow-sm hover:shadow-2xl duration-300 ease-linear" key={index}>
                                    <div className="w-full mx-auto md:ml-0 md:w-[100px] md:h-[80px]">
                                        <img src={item.thumbnail} alt={item.title} className="" />
                                    </div>
                                    <div className="mt-5">
                                        <h3 className="text-xl md:text-3xl font-circularBol">{item.heading == "Application Development and Modernization" ? "Application Modernization" : item.heading}</h3>
                                        <p className="text-gray mt-2">
                                            {item.description.slice(0, 150) + '... Read More'}
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