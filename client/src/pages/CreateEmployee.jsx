import { useEffect, useState } from 'react'
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
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [department, setDepartment] = useState('')

    const submitForm = () => {
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
    };
    const validateForm = () => {
        const regex = "^[0-9]{1,2}\\-[0-9]{1,2}\\-[0-9]{4}$"
        if (firstName.length > 3 &&
            lastName.length > 3 &&
            street.length > 3 &&
            city.length > 3 &&
            zipcode.length > 3 &&
            department &&
            state &&
            startDate.match(regex) &&
            birthDate.match(regex)) {
            submitForm();
            setSuccess('Employee Created !')
        }
        setError('Wrong infos please retry !')
    }
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
                            value={firstName || ''}
                            action={(e) => {
                                console.log(e.target.value);
                                setFirstName(e.target.value)
                            }}
                        />
                        <Input
                            className='last-name'
                            id='last-name'
                            type=''
                            text='Last Name'
                            value={lastName || ''}
                            action={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className='date'>
                        <BirthDateInput
                            className='birth-date'
                            id='date-of-birth'
                            type=''
                            text='Date of Birth'
                            value={birthDate || ''}
                            action={(e) => setBirthDate(e.target.value)}
                            clickedDate={clickedBirthDate}
                            setClickedDate={setClickedBirthDate}
                        />
                        <StartDateInput
                            className='start-date'
                            id='start-date'
                            type='text'
                            text='Start Date'
                            value={startDate || ''}
                            action={(e) => setStartDate(e.target.value)}
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
                            value={street || ''}
                            action={(e) => setStreet(e.target.value)}
                        />
                        <Input
                            className='city'
                            id='city'
                            type='text'
                            text='City'
                            value={city || ''}
                            action={(e) => setCity(e.target.value)}
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
                        />
                        <Input
                            className='zipcode'
                            id='zipcode'
                            type='number'
                            text='Zip Code'
                            value={zipcode || ''}
                            action={(e) => setZipcode(e.target.value)}
                        />
                    </div>
                    <Select
                        className='department'
                        id='department'
                        text='Department'
                        data={departmentsData}
                        action={(e) => setDepartment(e.target.value)}
                    />
                </form>
                <button onClick={validateForm}>Save</button>
                <p className='errorMessage'>{error}</p>
            </div>
            <Modal success={success} action={handlecloseModal} />
        </section>
    )
}
export default CreateEmployee