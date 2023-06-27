import { useState } from 'react'
import Input from '../components/Input'
import '../css/createEmployee.css'
import { departmentsData } from '../data/departmentsData'
import { statesData } from '../data/statesData'
import { createEmployee } from '../utils/fetchApiData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function CreateEmployee() {
    const [error, setError] = useState('')

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
    const navigate = useNavigate()

    const handleCreate = (e) => {
        e.preventDefault()
        let employeeInfos = {
            firstName,
            lastName,
            birthDate,
            startDate,
            street,
            city,
            state,
            zipcode,
            department
        }
        if (lastName.length < 2) {
            return setError("Enter your lastname");
        }
        if (firstName.length < 2) {
            return setError("Enter your firstname");
        }
        else {
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
            setError('')
        }
    }
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
                            errorMessage={error}
                        />
                        <Input
                            className='last-name'
                            id='last-name'
                            type='text'
                            text='Last Name'
                            value={lastName}
                            action={(e) => setLastName(e.target.value)}
                            errorMessage={error}
                        />
                    </div>
                    <div className='date'>
                        <Input
                            className='birth-date'
                            id='date-of-birth'
                            type='text'
                            text='Date of Birth'
                            value={birthDate}
                            action={(e) => setBirthDate(e.target.value)}
                            errorMessage=''
                        />
                        <Input
                            className='start-date'
                            id='start-date'
                            type='text'
                            text='Start Date'
                            value={startDate}
                            action={(e) => setStartDate(e.target.value)}
                            errorMessage=''
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
                            errorMessage=''
                        />
                        <Input
                            className='city'
                            id='city'
                            type='text'
                            text='City'
                            value={city}
                            action={(e) => setCity(e.target.value)}
                            errorMessage=''
                        />
                    </div>
                    <div className='address-bottom'>
                        <Input
                            className='state'
                            id='state'
                            text='State'
                            select
                            option
                            data={statesData}
                            action={(e) => setState(e.target.value)}
                            errorMessage=''
                        />
                        <Input
                            className='zipcode'
                            id='zipcode'
                            type='number'
                            text='Zip Code'
                            value={zipcode}
                            action={(e) => setZipcode(e.target.value)}
                            errorMessage=''
                        />
                    </div>
                    <Input
                        className='department'
                        id='department'
                        text='Department'
                        select
                        option
                        data={departmentsData}
                        action={(e) => setDepartment(e.target.value)}
                        errorMessage=''
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