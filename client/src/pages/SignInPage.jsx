import Input from '../components/Input';
import '../css/signInPage.css';
import logo from '../assets/logo hrnet.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { adminLogin } from '../utils/fetchApiData';
import { useDispatch } from 'react-redux';

function SignInPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorClassName, setErrorClassName] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSignIn = async (e) => {
        e.preventDefault()
        let adminInfos = {
            email, password
        }
        await dispatch(adminLogin(adminInfos)).then((action) => {
            console.log(action)
            if (action.payload) {
                setEmail('');
                setPassword('');
                navigate('/employees')
            } else {
                setError('Access denied !, Invalid Credentials');
                setErrorClassName(true)
            }
        })
    }
    return (
        <section className='signInPage-section'>
            <div className='logo-container'>
                <h2>HRnet</h2>
                <img src={logo} alt="" />
            </div>
            <div className="signInPage-container">
                <h2>Wealth Health</h2>
                <h2>Welcome to the Human Resources Intranet</h2>
                <form action="#" id="signInPage-form">
                    <Input
                        redBorder={errorClassName ? 'border-red' : ''}
                        className='email'
                        id='email'
                        type='text'
                        text='Email'
                        value={email}
                        action={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        redBorder={errorClassName ? 'border-red' : ''}
                        className='password'
                        id='password'
                        type='password'
                        text='Password'
                        value={password}
                        action={(e) => setPassword(e.target.value)}
                    />
                </form>
                <button onClick={handleSignIn}>Sign In</button>
                <div className="error-alert" role='alert'>
                    {error ? <p className="error">{error}</p> : ''}
                </div>
            </div>
        </section>
    )
}

export default SignInPage