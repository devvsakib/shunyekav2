import { Link, useParams } from "react-router-dom"
import { data } from '../data/data'
import { useEffect, useState } from "react"
import HeroSection from "../components/Common/HeroSection"
import Layout from "../components/Layout"

const Service = () => {
    const getLocation = useParams().id
    const [content, setContent] = useState(data.services.find((data) => data.path === getLocation))
    console.log(content);
    const title = content?.heading

    return (
        <>
            <HeroSection title={title} />
            <Layout>
                <div className="text-center max-w-[900px] mx-auto mt-20">
                    <div className="p-5 shadow-xl rounded-xl bg-white w-3/12 mx-auto">
                        <img className="mx-auto" src={content.thumbnail} alt={title} />
                    </div>
                    <p className="text-gray mt-5">{content.description}</p>
                </div>
                {/* services */}
                <section className="my-20">
                    <h2 className="text-center text-3xl font-circularBol">{title}</h2>
                    <div className="grid gap-5 mt-12">
                        {
                            content?.list?.map((item, index) => (
                                <div className="flex flex-col md:flex-row gap-5 border border-gray/20 p-5 rounded-2xl shadow-lg duration-300 ease-linear" key={index}>
                                    <img className="w-[200px] mx-auto"
                                        src={item.img} alt={item.heading} />
                                    <div className="">
                                        <h3 className="text-xl md:text-3xl font-circularBol">{item.heading}</h3>
                                        <p className="text-gray mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
                {/* case studies */}
                <section className="my-20">
                    <h2 className="text-center text-3xl font-circularBol">Case Studies</h2>
                    <p className="text-center text-gray mt-2">
                        {content?.case_studies?.cs_subheading}
                    </p>
                    <div className="grid md:grid-cols-2 gap-10 mt-5">
                        {
                            content?.case_studies?.case_studies_data?.map((item, index) => (
                                <div key={index} className="p-5 h-56 shadow-xl rounded-xl bg-white mx-auto border border-gray/10">
                                    <p className="text-gray mt-2">
                                        {item}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </Layout >
        </>
    )
}

export default Service