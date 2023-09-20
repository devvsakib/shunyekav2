import { IoIosArrowBack } from "react-icons/io"
import Layout from "../Layout"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
const HeroSection = ({ title, from }) => {
    const prevLocation = useLocation().pathname.split("/").slice(0, -1).join("/")
    const currentPath = useLocation().pathname.split("-").join(" ")
    return (
        <section className="bg-primaryBg py-16 w-screen mb-10">
            <div className="mt-10">
                <Layout>
                    <div className="absolute right-10 top-10 md:-top-[1.2rem]">
                        <img className="w-3/5 ml-auto" src="/img/icons/shunyeka-sm.svg" alt="" />
                    </div>
                    <div className="w-fit">
                        <Link to={from ?? prevLocation} className="flex items-center text-xl">
                            <IoIosArrowBack className="text-secondary" /> <span className="font-circularMed">Back</span>
                        </Link>
                    </div>
                    <div>
                        <p className="capitalize font-circularBol text-3xl mt-3">
                            {
                                title || currentPath.slice(1)
                            }
                        </p>
                    </div>
                </Layout>
            </div>
        </section>
    )
}

export default HeroSection