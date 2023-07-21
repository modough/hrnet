import { useState } from 'react'
import Input from '../components/Input'
import '../css/createEmployee.css'
import { departmentsData } from '../data/departmentsData'
import { statesData } from '../data/statesData'
import { createEmployee } from '../utils/fetchApiData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Select from '../components/Select'

function CreateEmployee() {
    const [errorFirst, setErrorFirst] = useState('')
    const [errorLast, setErrorLast] = useState('')
    const [errorBirth, setErrorBirth] = useState('')
    const [errorStart, setErrorStart] = useState('')
    const [errorStreet, setErrorStreet] = useState('')
    const [errorCity, setErrorCity] = useState('')
    const [errorState, setErrorState] = useState('')
    const [errorZipcode, setErrorZipcode] = useState('')
    const [errorDepartment, setErrorDepartment] = useState('')
    const [success, setSuccess] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [department, setDepartment] = useState('')


    const clearForm = () => {
        let employeeInfos = { firstName, lastName, birthDate, startDate, street, city, state, zipcode, department }
        createEmployee(employeeInfos)
        setFirstName('');
        setLastName('');
        setBirthDate('');
        setStartDate('');
        setStreet('');
        setCity('');
        setState('');
        setZipcode('');
        setDepartment('');
        setSuccess('Employee Created!')
    }

    const handleCreate = (e) => {
        e.preventDefault()
        switch (true) {
            case firstName.length < 2:
                setErrorFirst("Enter your firstname");
                break;
            case lastName.length < 2:
                setErrorLast("Enter your lastname");
                break;
            case isNaN(parseFloat(birthDate)):
                setErrorBirth("Enter your Birth Date");
                break;
            case isNaN(parseFloat(startDate)):
                setErrorStart("Enter your Start Date");
                break;
            case street.length < 2:
                setErrorStreet("Enter your street address ");
                break;
            case city.length < 2:
                setErrorCity("Enter your city address");
                break;
            case state === null:
                setErrorState("Enter your state address");
                break;
            case zipcode.length < 2:
                setErrorZipcode("Enter your zipcode");
                break;
            case department === '':
                setErrorDepartment("Enter your department for work");
                break;
            case department !== '' ||
                !zipcode.length < 2 ||
                state !== null ||
                city.length < 2 ||
                !street.length < 2 ||
                !isNaN(parseFloat(startDate)) ||
                !isNaN(parseFloat(birthDate)) ||
                !lastName.length < 2 ||
                !firstName.length < 2:
                clearForm();
        }
    }

    const navigate = useNavigate()
    const handlecloseModal = () => {
        navigate('/employees')
    }

    return (
        <section className="container-content">
            <div
                className={success ?
                    "container success" :
                    "container"
                }
            >
                <h2>Create Employee</h2>
                <form id="create-employee">
                    <div className='name'>
                        <Input
                            className='first-name'
                            id='first-name'
                            type='text'
                            text='First Name'
                            value={firstName}
                            action={(e) => setFirstName(e.target.value)}
                            errorMessage={errorFirst}
                        />
                        <Input
                            className='last-name'
                            id='last-name'
                            type='text'
                            text='Last Name'
                            value={lastName}
                            action={(e) => setLastName(e.target.value)}
                            errorMessage={errorLast}
                        />
                    </div>
                    <div className='date'>
                        <Input
                            className='birth-date'
                            id='date-of-birth'
                            type='date'
                            text='Date of Birth'
                            value={birthDate}
                            action={(e) => setBirthDate(e.target.value)}
                            errorMessage={errorBirth}
                        />
                        <Input
                            className='start-date'
                            id='start-date'
                            type='date'
                            text='Start Date'
                            value={startDate}
                            action={(e) => setStartDate(e.target.value)}
                            errorMessage={errorStart}
                        />
                    </div>
                    <div className='address-top'>
                        <Input
                            className='street'
                            id='street'
                            type='text'
                            text='Street'
                            value={street}
                            action={(e) => setStreet(e.target.value)}
                            errorMessage={errorStreet}
                        />

                        <Input
                            className='city'
                            id='city'
                            type='text'
                            text='City'
                            value={city}
                            action={(e) => setCity(e.target.value)}
                            errorMessage={errorCity}
                        />
                    </div>
                    <div className='address-bottom'>
                        <Select
                            className='state'
                            id='state'
                            text='State'
                            select
                            data={statesData}
                            action={(e) => setState(e.target.value)}
                            errorMessage={errorState}
                        />
                        <Input
                            className='zipcode'
                            id='zipcode'
                            type='number'
                            text='Zip Code'
                            value={zipcode}
                            action={(e) => setZipcode(e.target.value)}
                            errorMessage={errorZipcode}
                        />
                    </div>
                    <Select
                        className='department'
                        id='department'
                        text='Department'
                        select
                        data={departmentsData}
                        action={(e) => setDepartment(e.target.value)}
                        errorMessage={errorDepartment}
                    />
                </form>
                <button onClick={handleCreate}>Save</button>

            </div>
            {success ?
                <div id="confirmation" className="modal-content">
                    {success}
                    <FontAwesomeIcon onClick={handlecloseModal} icon={faClose} className='faClose' />
                </div> :
                ''
            }
        </section>
    )
}
export default CreateEmployee