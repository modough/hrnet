import { Link, useNavigate } from "react-router-dom"
import '../css/header.css'
import logo from '../assets/hrnetLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { useState } from "react";




function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const { token } = useSelector((state) => state.userReducer);
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate('/signin')
        setIsLoggedIn(false)
    }
    const handleClickList = () => {
        navigate('/employees')
    }
    const handleClickCreate = () => {
        navigate('/')
    }
    return (
        token ?
            <section className="header">
                <div className="header-left">
                    <Link to='/signin' className="title">
                        <img id='logo' src={logo} alt="logo du site" />
                        <h1>HRnet</h1>
                    </Link>
                </div>
                {isLoggedIn &&
                    <div className="header-right">
                        <p onClick={handleClickList} className='current-employees '>
                            View Current Employees
                        </p>
                        <p onClick={handleClickCreate} className='current-employees '>
                            Create Employee
                        </p>
                        <button onClick={handleLogout} className='logout'>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                        </button>
                    </div>}
            </section> :
            <section className="header">
                <div className="header-left">
                    <Link to='/signin' className="title">
                        <img id='logo' src={logo} alt="logo du site" />
                        <h1>HRnet</h1>
                    </Link>
                </div>
            </section>
    )
}
export default Header