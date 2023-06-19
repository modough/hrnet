import { useState } from 'react'
import Input from '../components/Input'
import '../css/createEmployee.css'
import { departmentsData } from '../data/departmentsData'
import { statesData } from '../data/statesData'
import { createEmployee } from '../utils/fetchApiData'

function CreateEmployee() {
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
    return (
        <section className="container-content">
            <div className="container">
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <div className='name'>
                        <Input
                            className='first-name'
                            id='first-name'
                            type='text'
                            text='First Name'
                            value={firstName}
                            action={(e) => setFirstName(e.target.value)}
                        />
                        <Input
                            className='last-name'
                            id='last-name'
                            type='text'
                            text='Last Name'
                            value={lastName}
                            action={(e) => setLastName(e.target.value)}
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
                        />
                        <Input
                            className='start-date'
                            id='start-date'
                            type='text'
                            text='Start Date'
                            value={startDate}
                            action={(e) => setStartDate(e.target.value)}
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
                        />
                        <Input
                            className='city'
                            id='city'
                            type='text'
                            text='City'
                            value={city}
                            action={(e) => setCity(e.target.value)}
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
                        />
                        <Input
                            className='zipcode'
                            id='zipcode'
                            type='number'
                            text='Zip Code'
                            value={zipcode}
                            action={(e) => setZipcode(e.target.value)}
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
                    />
                </form>
                <button onClick={handleCreate}>Save</button>
                <div id="confirmation" className="modal">{success}</div>
            </div>

        </section>
    )
}
export default CreateEmployee