import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./style.css"

const DevOpsSlider = () => {
    const options = {
        loop: true,
        center: true,
        items: 1,
        margin: 30,
        autoplay: true,
        dots: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
    };
    return (
        <section className="w-full">
            <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>

                <div className="item">
                    <div className="grid md:grid-cols-2 gap-6 border-gray-200 rounded-2xl p-6">
                        <div className="shadow-sm bg-white rounded-2xl p-6">
                            <p className="text-gray-800">Graph</p>
                        </div>
                        <div
                            className="shadow-sm bg-red-100 rounded-2xl p-6 space-y-3"
                            style={{ height: "400px", overflowY: "scroll" }}
                        >
                            <p className="text-2xl underline font-semibold">
                                Challenge
                            </p>
                            <p className="text-gray-800">
                                The cost was sky rocketing in the cloud infra.
                            </p>
                            <p className="text-gray-800">
                                No Single process for application build and deployment
                                on AWS infrastructure.
                            </p>
                            <p className="text-gray-800">
                                No Single process for application build and deployment
                                on AWS infrastructure.
                            </p>
                            <p className="text-gray-800">
                                No Single process for application build and deployment
                                on AWS infrastructure.
                            </p>
                            <p className="text-gray-800">
                                Development team was taking large amount of time from
                                operations to make servers available for application
                                deployment
                            </p>
                        </div>
                        <div
                            className="
                    shadow-sm
                    bg-blue-100
                    rounded-2xl
                    h-72
                    p-6
                    space-y-3
                  "
                            style={{ height: "400px", overflowY: "scroll" }}
                        >
                            <p className="text-2xl underline font-semibold">Solution</p>
                            <p className="text-gray-800">
                                Worked with the dev team to understand their current
                                manual deployment process.
                            </p>
                            <p className="text-gray-800">
                                Created automated build pipeline with Jenkins, Aws
                                Code commit and AWS S3 integration.
                            </p>
                            <p className="text-gray-800">
                                Worked with customer to create build pipeline with
                                version control capability and security integration.
                            </p>
                        </div>
                        <div
                            className="shadow-sm bg-green-100 rounded-2xl p-6 space-y-3"
                            style={{ height: "400px", overflowY: "scroll" }}
                        >
                            <p className="text-2xl underline font-semibold">Result</p>
                            <p className="text-gray-800">
                                Stream lined work for OT to identify change management
                                at development side and deploy appropriate application
                                version.
                            </p>
                            <p className="text-gray-800">
                                Regulatory Compliance achieved by reducing human
                                errors.
                            </p>
                            <p className="text-gray-800">
                                Agility and rapid application release capability.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="grid md:grid-cols-2 gap-6 border-gray-200 rounded-2xl p-6">
                        <div className="shadow-sm bg-white rounded-2xl h-56 p-6">
                            <p className="text-gray-800">Graph</p>
                        </div>
                        <div className="shadow-sm bg-red-100 rounded-2xl p-6">
                            <p className="text-2xl underline font-semibold">
                                Challenge
                            </p>
                            <p className="text-gray-800">
                                No Single process for application build and deployment
                                on AWS infrastructure.
                            </p>
                        </div>
                        <div className="shadow-sm bg-blue-100 rounded-2xl p-6">
                            <p className="text-2xl underline font-semibold">Solution</p>
                            <p className="text-gray-800">
                                Created automated build pipeline with Jenkins, Aws
                                Code commit and AWS S3 integration.
                            </p>
                        </div>
                        <div className="shadow-sm bg-green-100 h-56 rounded-2xl p-6">
                            <p className="text-2xl underline font-semibold">Result</p>
                            <p className="text-gray-800">
                                Regulatory Compliance achieved by reducing human
                                errors.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="grid md:rid-cols-2 gap-6 border-gray-200 rounded-2xl p-6">
                        <div className="shadow-sm bg-white rounded-2xl h-56 p-6">
                            <p className="text-gray-800">Graph.</p>
                        </div>
                        <div className="shadow-sm bg-red-100 rounded-2xl p-6">
                            <p className="text-2xl underline font-semibold">
                                Challenge
                            </p>
                            <p className="text-gray-800">
                                Development team was taking large amount of time from
                                operations to make servers available for application
                                deployment
                            </p>
                        </div>
                        <div className="shadow-sm bg-blue-100 rounded-2xl p-6">
                            <p className="text-2xl underline font-semibold">Solution</p>
                            <p className="text-gray-800">
                                Worked with customer to create build pipeline with
                                version control capability and security integration.
                            </p>
                        </div>
                        <div className="shadow-sm bg-green-100 h-56 rounded-2xl p-6">
                            <p className="text-2xl underline font-semibold">Result</p>
                            <p className="text-gray-800"></p>
                            <p>Agility and rapid application release capability.</p>
                        </div>
                    </div>
                </div>

            </OwlCarousel>
        </section>
    )
}

export default DevOpsSlider