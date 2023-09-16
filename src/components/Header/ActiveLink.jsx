import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
const ActiveLink = ({ links, k }) => {
    const location = useLocation()
    return (
        <Link key={k} to={links.link}
            className={`hover:text-primary manuHover duration-200 ease-linear ${location.pathname === links.link ? "text-primary" : "text-[#2C3D46]"}`}
        >
            {links.name}
        </Link>
    )
}

export default ActiveLink