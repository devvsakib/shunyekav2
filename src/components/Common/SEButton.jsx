import { Link } from 'react-router-dom'

const SEButton = ({text, path}) => {
    return (
        <div className="mt-10">
            <Link to={path} className="bg-primary text-white rounded-md px-10 py-5">{text}</Link>
        </div>
    )
}

export default SEButton