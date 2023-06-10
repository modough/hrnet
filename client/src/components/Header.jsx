import { Link } from "react-router-dom"
import '../css/header.css'
import logo from '../assets/logo hrnet.png'

function Header() {
    return (
        <section className="header">
            <Link to='/' className="title">
                <img id='logo' src={logo} alt="logo du site" />
                <h1>HRnet</h1>
            </Link>
            <Link to="/employees" className="current-employees">View Current Employees</Link>
        </section>
    )
}
export default Header