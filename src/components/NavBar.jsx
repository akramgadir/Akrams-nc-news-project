import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <>
        <nav>
            <ul>
                <Link to={`./Home`}><li>Home</li></Link>
                <Link to={`./Categories`}><li>Categories</li></Link>
                <Link to={`./Articles`}><li>Articles</li></Link>
            </ul>
        </nav>
        </>
    )
}

export default NavBar