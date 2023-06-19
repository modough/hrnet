import { Link, useNavigate } from "react-router-dom"
import '../css/header.css'
import logo from '../assets/logo hrnet.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



function Header() {
    const path = window.location.pathname
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate('/signin')
    }
    const handleClickList = () => {
        navigate('/employees')
    }
    const handleClickCreate = () => {
        navigate('/')
    }
    console.log(path)
    return (
        <section className="header">
            <div className="header-left">
                <Link to='/signin' className="title">
                    <img id='logo' src={logo} alt="logo du site" />
                    <h1>HRnet</h1>
                </Link>
            </div>
            <div className="header-right">
                <button onClick={handleClickList} className={`${path === '/signin' ? 'current-employees none' : 'current-employees '}`}>
                    View Current Employees
                </button>
                <button onClick={handleClickCreate} className={`${path === '/signin' ? 'current-employees none' : 'current-employees '}`}>
                    Create Employee
                </button>
                <button onClick={handleLogout} className={`${path === '/signin' ? 'none' : 'logout'}`}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
            </div>
        </section>
    )
}
export default Header