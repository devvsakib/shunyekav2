import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { main_menu } from "../../data/menus";
import { IoCall, IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import ActiveLink from "./ActiveLink";
import useWindowSize from "../../hooks/useWindowSize";
import { motion } from "framer-motion"

const Header = () => {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navbarRef = useRef();
    const { width } = useWindowSize();
    useEffect(() => {
        const handleScroll = () => {
            const pageYOffset = window.scrollY > 45;

            if (pageYOffset) setIsNavbarFixed(true);
            else setIsNavbarFixed(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <header
            ref={navbarRef}
            className={` ${isNavbarFixed ? "bg-white shadow-lg" : (isMenuOpen && width <= 768) ? "bg-white" : "bg-opacity-80 backdrop-blur-lg"}
                } duration-300 ease-linear fixed top-0 left-0  px-5 right-0 z-50`}
        >
            <div className="flex flex-row justify-between items-center py-3 max-w-[1240px] mx-auto">
                <div>
                    <Link to={"/"}>
                        <img src="/img/icons/logo.svg" alt="logo" className="w-3/5" />
                    </Link>
                </div>
                {
                    width <= 768 && <div>
                        {
                            isMenuOpen ?
                                <IoClose onClick={e => setIsMenuOpen(!isMenuOpen)} className="text-3xl cursor-pointer text-primary" />
                                :
                                <HiMenuAlt3 onClick={e => setIsMenuOpen(!isMenuOpen)} className="text-3xl cursor-pointer" />
                        }
                    </div>
                }
                <nav className="hidden md:flex gap-5 font-circularMed items-center flex-col md:flex-row">
                    {main_menu.map((item, index) => (
                        <ActiveLink links={item} key={index} />
                    ))}
                    <Link to={"tel:+91-927-680-9744"} className="flex gap-1 items-center">
                        <IoCall className="text-primary" />
                        <span>+91-927-680-9744</span>
                    </Link>

                    <Link
                        to={"/contact-us"}
                        className="bg-primary hover:bg-secondary duration-200 ease-linear px-5 py-2 rounded-md text-white relative"
                    >
                        <p>Contact Us</p>
                    </Link>
                </nav>
                {
                    width <= 768 && 

                    <motion.nav
                        variants={{
                            hidden: { opacity: 0, height: 0, width: "100vw" },
                            visible: { opacity: 1, height: "100vh", }
                        }}
                        initial="hidden"
                        animate= {isMenuOpen ? "visible" : "hidden"}
                        transition={{ duration: 0.3 }}
                        className={`flex absolute top-12 w-full h-screen bg-white left-0 gap-5 
                                    font-circularMed pt-10 items-start px-10 flex-col md:flex-row`}
                    >
                        {main_menu.map((item, index) => (
                            <span key={index} onClick={e => setIsMenuOpen(!isMenuOpen)}>
                                <ActiveLink links={item} key={index} />
                            </span>
                        ))}
                        <Link to={"tel:+91-927-680-9744"} className="flex gap-1 items-center">
                            <IoCall className="text-primary" />
                            <span>+91-927-680-9744</span>
                        </Link>

                        <Link
                            to={"/contact-us"}
                            className="bg-primary hover:bg-secondary duration-200 ease-linear px-5 py-2 rounded-md text-white relative"
                            onClick={e => setIsMenuOpen(!isMenuOpen)}
                        >
                            <p>Contact Us</p>
                        </Link>
                    </motion.nav>
                }
            </div>

        </header>
    );
};

export default Header;