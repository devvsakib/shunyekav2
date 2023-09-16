import { Link } from "react-router-dom"
import { main_menu } from '../../data/menus'
import { IoCall } from 'react-icons/io5'

const Header = () => {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center py-3">
            <div>
                <Link to={"/"}>
                    <img src="/img/icons/logo.svg" alt="logo" className="w-3/5" />
                </Link>
            </div>
            <nav className="flex gap-5 CircularStd-Medium items-center flex-col md:flex-row">
                {/* Render the menu using main_menu */}
                {main_menu.map((item, index) => (
                    <Link to={item.link} key={index}>
                        {item.name}
                    </Link>
                ))}
                <Link to={"tel:+91-927-680-9744"}
                    className="flex gap-2 items-center"
                >
                    <IoCall />
                    <span>
                        +91-927-680-9744
                    </span>
                </Link>

                <Link to={"/contact-us"}
                    className="bg-primary px-5 py-2 rounded-md text-white relative "
                >
                    <p style={{ zIndex: 99}} className="contactBtn">
                        Contact Us
                    </p>
                </Link>
            </nav>
        </header>
    )
}

export default Header