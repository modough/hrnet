/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react'
import Input from '../components/Input'
import '../css/createEmployee.css'
import { departmentsData } from '../data/departmentsData'
import { statesData } from '../data/statesData'
import { createEmployee } from '../utils/fetchApiData'
import { useNavigate } from 'react-router-dom'
import Select from '../components/Select'
import Modal from '../components/Modal'
import BirthDateInput from '../components/BirthDateInput'
import StartDateInput from '../components/StartDateInput'

function CreateEmployee() {
    const [clickedBirthDate, setClickedBirthDate] = useState({ day: 'dd', month: 'mm', year: 'yyyy' })
    const [clickedStartDate, setClickedStartDate] = useState({ day: 'dd', month: 'mm', year: 'yyyy' })
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

    const validateForm = useCallback(() => {
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
        createEmployee(employeeInfos)
        setSuccess('Employee Created !')

    }, []);

    const handleCreate = useCallback((e) => {
        e.preventDefault()
        if (firstName.length < 3)
            setErrorFirst('Please enter a first name (min. 3 characters)');
        else if (lastName.length < 3)
            setErrorLast('Please enter a last name (min. 3 characters)');
        else if (startDate === '')
            setErrorStart('Please select a valid start date.');
        else if (birthDate === '')
            setErrorBirth('Please select a valid date of birth.');
        else if (department === '')
            setErrorDepartment('Please select a valid department.');
        else if (street.length < 5)
            setErrorStreet('Please enter your street (min. 5 characters)');
        else if (city.length < 3)
            setErrorCity('Please enter your city (min. 3 characters)');
        else if (state === '')
            setErrorState('Please select a valid state.');
        else if (zipcode.length <= 0)
            setErrorZipcode('Please enter a valid zip code.');
        else {
            validateForm()
        }
    }, []);

    const navigate = useNavigate()
    const handlecloseModal = () => {
        navigate('/employees')
    }

    useEffect(() => {
        setBirthDate(`${clickedBirthDate.day}-${clickedBirthDate.month}-${clickedBirthDate.year}`)
        setStartDate(`${clickedStartDate.day}-${clickedStartDate.month}-${clickedStartDate.year}`)
    }, [clickedBirthDate, clickedStartDate]);

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
                            type=''
                            text='Last Name'
                            value={lastName}
                            action={(e) => setLastName(e.target.value)}
                            errorMessage={errorLast}
                        />
                    </div>
                    <div className='date'>
                        <BirthDateInput
                            className='birth-date'
                            id='date-of-birth'
                            type=''
                            text='Date of Birth'
                            value={birthDate}
                            action={(e) => setBirthDate(e.target.value)}
                            errorMessage={errorBirth}
                            clickedDate={clickedBirthDate}
                            setClickedDate={setClickedBirthDate}
                        />
                        <StartDateInput
                            className='start-date'
                            id='start-date'
                            type='text'
                            text='Start Date'
                            value={startDate}
                            action={(e) => setStartDate(e.target.value)}
                            errorMessage={errorStart}
                            clickedDate={clickedStartDate}
                            setClickedDate={setClickedStartDate}
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
                            state
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
                        data={departmentsData}
                        action={(e) => setDepartment(e.target.value)}
                        errorMessage={errorDepartment}
                    />
                </form>
                <button onClick={handleCreate}>Save</button>
            </div>
            <Modal success={success} action={handlecloseModal} />
        </section>
    )
}
export default CreateEmployee