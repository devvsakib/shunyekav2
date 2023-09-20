import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import FeatureSection from "../components/Common/FeatureSection";
import { seo } from "../meta/aboutSEO";
import { data } from '../data/data'
import HeadingSubheading from "../components/Common/HeadingSubheading"
import SEButton from "../components/Common/SEButton";
import Testimonials from "../components/Testimonials";
import Client from "../components/Carousel/Client";
const list = [
    "Visibility: Experience the power of cloud orchestration for data monitoring and real-time analytics",
    "Strength: Enhance decision-making potential through advanced AI, Machine Learning, and IOT frameworks",
    "Security: Integrate and automate security checks seamlessly into development cycle for increased functional efficiency"
]

const Home = () => {
    return (
        <>
            <section className="about-hero relative py-32">
                <Layout>
                        <div className="absolute right-10 top-10 md:-top-[1.2rem]">
                            <img className="w-10/12 ml-auto" src="/img/icons/shunyeka-lg.svg" alt="" />
                        </div>
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* left content*/}
                        <div className="relative">
                            <h3 className="text-4xl md:text-6xl font-circularBol leading-snug text-black"> Your Automation Partner in the Brave New World of Cloud </h3>
                            <div className="text-gray">
                                <p> The age of ZeroTech solutions is at hand, zero wastage, complete sustainability, zero frailty, complete stability. ShunyEka’s unique service offerings help you follow a zero compromise path towards business growth in the digital world.</p>
                                {/* <p> Your way in the new cloud environment, managing the various intricacies and complexities within it, and scaling up processes like data monitoring and application deployment can be daunting without the right support. Our team of DevXOps experts help you at each step of the way, from cloud architecture design for serverless applications to integration of new technological frontiers such as IOT.</p> */}
                            </div>
                            <SEButton text="Get In Touch" path="/contact-us" />
                        </div>
                        {/* right content */}
                        <div className="grid md:grid-cols-2 gap-5 md:gap-10 moving text-lg md:text-3xl">
                            <div className="bg-white shadow-lg rounded-lg grid place-items-center text-center p-5 mt-10">
                                <div className="service-box grid justify-center items-center">
                                    <img src="/img/icons/cloud-computing.svg" alt="icons" className="max-w-[100%] mx-auto" />
                                    <h5>
                                        Cloud Automation
                                    </h5>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg grid place-items-center text-center p-5">
                                <div className="service-box grid justify-center items-center">
                                    <img src="/img/icons/cloud-computing2.svg" alt="icons" className="max-w-[100%] mx-auto" />
                                    <h5>
                                        Cloud Security
                                    </h5>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg grid place-items-center text-center p-5">
                                <div className="service-box grid justify-center items-center">
                                    <img style={{width: "130px"}} src="/img/svg/Application Modernization.svg" alt="icons" className="max-w-[100%] mx-auto" />
                                    <h5>
                                        Application Modernization
                                    </h5>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg grid place-items-center text-center p-5 mb-10">
                                <div className="service-box grid justify-center items-center">
                                    <img style={{width: "130px"}} src="/img/svg/Serverless Application.svg" alt="icons" className="max-w-[100%] mx-auto" />
                                    <h5>
                                        Serverless Application
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </section>
            <Layout>
                <FeatureSection list={list} button={true} />
                {/* our services */}
                <div className="my-[10rem]">
                    <HeadingSubheading heading={"Automation in CloudOps, DevOps and SecOps"} subheading={"ShunyEka’s 24/7 AWS Cloud Managed Services allows you to focus on your business. Our highly qualified team of SysOps & DevOps Engineers take care of high availability, scalability and security for your Infrastructure and Applications."} />
                    {/* services */}
                    <div className="grid md:grid-cols-2 gap-5 mt-12">
                        {
                            data.services.map((item, index) => (
                                <Link to={"/services/" + item.path} className="flex flex-col justify-between items-center border border-gray/20 p-5 rounded-2xl shadow-sm hover:shadow-2xl duration-300 ease-linear" key={index}>
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
                {/* testimonial */}
                <div className='mb-10 py-20'>
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
                </div>
            </Layout >
        </>
    )
}

export default Home