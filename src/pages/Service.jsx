import { useParams } from "react-router-dom"

const Service = () => {
    const getLocation = useParams().id
    return (
        <div>{getLocation}</div>
    )
}

export default Service