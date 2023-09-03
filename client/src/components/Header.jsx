
import { Link } from "react-router-dom"
import '../css/header.css'
import logo from '../assets/hrnetLogo.png'
import bgMenu from '../assets/burger-menu.svg'
import { useState } from "react"


function Header() {
    const [display, setDisplay] = useState(false)

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
            <div className="burger-menu">
                <img
                    id='menu'
                    src={bgMenu}
                    alt="bouton menu du site"
                    onClick={() => {
                        setDisplay(!display)
                    }}
                />
                <ul className={display ? 'list display' : 'list'}>
                    <Link
                        to='/employees'
                        onClick={() => {
                            setDisplay(!display)
                        }}
                    >
                        Employees List
                    </Link>
                    <Link
                        to='/'
                        onClick={() => {
                            setDisplay(!display)
                        }}
                    >
                        Create an Employee
                    </Link>
                </ul>
            </div>
        </section>
    )
}
export default Header