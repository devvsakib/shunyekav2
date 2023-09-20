import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import FeatureSection from "../components/Common/FeatureSection";
import { seo } from "../meta/aboutSEO";
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
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* left content*/}
                        <div className="relative">
                            <h3 className="text-6xl font-circularBol leading-snug text-black"> Your Automation Partner in the Brave New World of Cloud </h3>
                            <div className="text-gray">
                                <p> The age of ZeroTech solutions is at hand, zero wastage, complete sustainability, zero frailty, complete stability. ShunyEka’s unique service offerings help you follow a zero compromise path towards business growth in the digital world.</p>
                                {/* <p> Your way in the new cloud environment, managing the various intricacies and complexities within it, and scaling up processes like data monitoring and application deployment can be daunting without the right support. Our team of DevXOps experts help you at each step of the way, from cloud architecture design for serverless applications to integration of new technological frontiers such as IOT.</p> */}
                            </div>
                            <div className=" mt-10">
                                <Link to="/contact-us" className="bg-primary text-white rounded-md px-10 py-5">Get In Touch</Link>
                            </div>

                        </div>
                        {/* right content */}
                        <div className="grid md:grid-cols-2 gap-5 md:gap-10 moving text-3xl min-h-[500px]">
                            <div className="bg-white rounded-lg grid place-items-center text-center p-5 mt-10">
                                <div className="service-box grid justify-center items-center">
                                    <img src="/img/icons/cloud-computing.svg" alt="icons" className="max-w-[100%] mx-auto" />
                                    <h5>
                                        Cloud Automation
                                    </h5>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg grid place-items-center text-center p-5">
                                <div className="service-box grid justify-center items-center">
                                    <img src="/img/icons/cloud-computing2.svg" alt="icons" className="max-w-[100%] mx-auto" />
                                    <h5>
                                        Cloud Security
                                    </h5>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg grid place-items-center text-center p-5">
                                <div className="service-box grid justify-center items-center">
                                    <img src="/img/svg/Application Modernization.svg" alt="icons" className="max-w-[100%] mx-auto" />
                                    <h5>
                                        Application Modernization
                                    </h5>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg grid place-items-center text-center p-5 mb-10">
                                <div className="service-box grid justify-center items-center">
                                    <img src="/img/svg/Serverless Application.svg" alt="icons" className="max-w-[100%] mx-auto" />
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
                <FeatureSection list={list} />
                <section className="h-screen bg-orange-500">
                </section>
            </Layout >
        </>
    )
}

export default Home