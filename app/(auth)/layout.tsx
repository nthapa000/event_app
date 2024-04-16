const Layout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
            {/* Now we can style this div */}
            {children}
        </div>
    )
}

export default Layout