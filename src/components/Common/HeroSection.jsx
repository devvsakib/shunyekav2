import { IoIosArrowBack } from "react-icons/io"
import Layout from "../Layout"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
const HeroSection = () => {
    const prevLocation = useLocation().pathname || "/"
    const currentPath = useLocation().pathname
    return (
        <section className="bg-primaryBg py-16 w-screen mb-10">
            <div className="mt-10">
                <Layout>
                    <div className="absolute right-10 top-10 md:-top-[1.2rem]">
                        <img className="w-3/5 ml-auto" src="/img/icons/shunyeka-sm.svg" alt="" />
                    </div>
                    <Link to={prevLocation} className="flex items-center text-xl">
                        <IoIosArrowBack className="text-secondary" /> <span className="font-circularMed">Back</span>
                    </Link>
                    <div>
                        <p className="capitalize font-circularBol text-3xl mt-3">
                            {currentPath.slice(1)}
                        </p>
                    </div>
                </Layout>
            </div>
        </section>
    )
}

export default HeroSection