const Layout = ({ children }) => {
    return (
        <main className='max-w-[1240px] mx-auto  px-5 md:px-0 w-full flex-1 relative'>
            {children}
        </main>
    )
}

export default Layout