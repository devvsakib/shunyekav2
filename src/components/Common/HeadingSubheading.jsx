const HeadingSubheading = ({heading, subheading}) => {
    return (
        <div className="text-center max-w-[900px] mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-circularBol">{heading}</h2>
            <p className="text-gray mt-2">{subheading}</p>
        </div>
    )
}

export default HeadingSubheading;