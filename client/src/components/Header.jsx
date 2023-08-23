import { Link, useNavigate } from "react-router-dom"
import '../css/header.css'
import logo from '../assets/hrnetLogo.png'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../features/authSliceReducer";

function Header() {
    const path = window.location.pathname
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const { token } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate('/signin')
        setIsLoggedIn(false)
        dispatch(logout())
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
                    <Link to='/' className="title">
                        <img id='logo' src={logo} alt="logo du site" />
                        <h1>HRnet</h1>
                    </Link>
                </div>
                {isLoggedIn &&
                    <div className="header-right">
                        <p onClick={handleClickList} className={path === '/' ? 'current-employees' : 'current-employees none'}>
                            View Current Employees
                        </p>
                        <p onClick={handleClickCreate} className={path === '/employees' ? 'current-employees' : 'current-employees none'}>
                            Create Employee
                        </p>
                        <button onClick={handleLogout} className='logout'>
                            Logout
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