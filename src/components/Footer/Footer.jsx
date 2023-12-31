import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { social_links } from '../../data/menus'
import { footer_menu } from '../../data/menus'
import { Link } from "react-router-dom";
import { IoCall, IoMail } from 'react-icons/io5'
import ActiveLink from "../Header/ActiveLink";
import Layout from "../Layout";

const Footer = () => {
    return (
        <Layout>
            <footer className='text-center px-5 md:px-0 mt-10 md:5'>
                <div className="grid sm:grid-cols-3 gap-8">
                    {/* footer top */}
                    <div className="flex flex-col gap-2">
                        <div>
                            <img className="md:w-3/5" src="/img/icons/logo.svg" alt="ShunyEka" />
                        </div>
                        <div>
                            <div
                                className="flex gap-3 items-center">
                                {
                                    social_links.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.link}
                                            target="_blank"
                                            className="hover:border-secondary hover:text-secondary duration-200 ease-linear border border-black w-7 h-7 flex items-center justify-center rounded-full"
                                        >{item.name == "Facebook" ? <FaFacebookF /> : <FaLinkedinIn />}</a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* footer middle */}
                    <div className="col-span-2 flex flex-col sm:flex-row gap-5 md:gap-10 justify-end">
                        {/* footer links */}
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10  items-start justify-start text-left">
                            {
                                footer_menu.map((item, index) => (
                                    <div key={index} className={"grid gap-2"}>
                                        <h3 className="font-semibold text-lg">{item.title}</h3>
                                        <ul className="flex flex-col gap-1">
                                            {
                                                item.links.map((sub_item, index) => (
                                                    <li key={index} className="hover:text-secondary">
                                                        <Link to={"/services/" +sub_item.link}>{sub_item.name}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                        {/* footer contact */}
                        <div>
                            <div className="text-left">
                                <h3 className="font-semibold text-lg">For Support and questions</h3>
                                <div className="flex gap-2">
                                    <IoCall className="mt-[5px] text-secondary" />
                                    <div>
                                        <p className="text-muted">Contact Sales Support:</p>
                                        <h4><a href="tel:+91879921208">+91-879-912-1208</a></h4>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <IoMail className="mt-[5px] text-secondary" />
                                    <div>
                                        <p className="text-muted">Email Support: </p>
                                        <h4><a href="mailto:hello@shunyeka.com"><u>hello@shunyeka.com</u></a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer bottom */}
                <div className="border-t font-semibold mt-10 md:flex items-center justify-between border-b_gray">
                    <div>
                        <p className="py-5 m-0 text-gray">Copyright © ShunyEka Systems Private Limited {new Date().getFullYear()}. All Rights Reserved</p>
                    </div>
                    <div>
                        <ul className="flex items-center justify-center md:justify-normal gap-2">
                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                            <li className="border-l-[2px] pl-2 border-b_gray"><Link to={"/contact-us"}>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </Layout>
    )
}

export default Footer