import { Link } from "react-router-dom"
import '../css/header.css'
import logo from '../assets/hrnetLogo.png'


function Header() {

    return (

        <section className="header">
            <div className="header-left">
                <Link to='/' className="title">
                    <img id='logo' src={logo} alt="logo du site" />
                    <h1>HRnet</h1>
                </Link>
            </div>
            <div className="header-right">
                <Link to='/employees' className='current-employees'>
                    View Current Employees
                </Link>
                <Link to='/' className='current-employees'>
                    Create Employee
                </Link>
            </div>
        </section>
    )
}
export default Header