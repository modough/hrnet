import Input from '../components/Input';
import '../css/signInPage.css';
import logo from '../assets/logo hrnet.png'



function SignInPage() {
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
                    />
                    <Input
                        className='password'
                        id='password'
                        type='text'
                        text='Password'
                    />
                </form>
                <button>Sign In</button>
            </div>
        </section>
    )
}

export default SignInPage