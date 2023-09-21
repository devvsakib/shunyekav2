import { Helmet } from "react-helmet"

const MetaContainer = ({title, seo}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="title" content={seo.title} />
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
        </Helmet>
    )
}

export default MetaContainer