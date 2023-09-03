import { Link } from "react-router-dom"
import '../css/header.css'
import { useState, lazy, Suspense } from "react"



function Header() {
    const [display, setDisplay] = useState(false)
    const logo = lazy(() => import('../assets/hrnetLogo.png'))
    const bgMenu = lazy(() => import('../assets/burger-menu.svg'));

    return (

        <section className="header">
            <div className="header-left">
                <Suspense fallback={<div>Loading...</div>}>
                    <Link to='/' className="title">
                        <img id='logo' src={logo} alt="logo du site" />
                        <h1>HRnet</h1>
                    </Link>
                </Suspense>
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
                <Suspense fallback={<div>Loading...</div>}>
                    <img
                        id='menu'
                        src={bgMenu}
                        alt="bouton menu du site"
                        onClick={() => {
                            setDisplay(!display)
                        }}
                    />
                </Suspense>
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