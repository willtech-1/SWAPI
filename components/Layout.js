// import Nav compoment
import Nav from './Nav'

// accepting children props to wrap all the pages in a Layout component
const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout;