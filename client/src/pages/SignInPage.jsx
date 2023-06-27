import Input from '../components/Input';
import '../css/signInPage.css';
import logo from '../assets/logo hrnet.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { adminLogin } from '../utils/fetchApiData';

function SignInPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleSignIn = (e) => {
        e.preventDefault()
        let adminInfos = {
            email,
            password
        }
        adminLogin(adminInfos)
        if (!error) {
            setEmail('');
            setPassword('');
            navigate('/employees')
        } else {
            setError('Access denied !, Invalid Credentials');
        }
    }
    return (
        <section className='signInPage-section'>
            <div className='logo-container'>
                <h2>HRnet</h2>
                <img src={logo} alt="" />
            </div>
            <div className="signInPage-container">
                <h2>Welcome to the Human Resources Intranet</h2>
                <form action="#" id="signInPage-form">
                    <Input
                        className='email'
                        id='email'
                        type='text'
                        text='Email'
                        value={email}
                        action={(e) => setEmail(e.target.value)}
                    />
                    <Input
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