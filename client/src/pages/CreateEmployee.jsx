import logo from '../assets/logo hrnet.png'
import Input from '../components/Input'
import '../css/createEmployee.css'
import { departmentsData } from '../data/departmentsData'
import { statesData } from '../data/statesData'

function CreateEmployee() {
    return (
        <section className="container-content">
            <div className='logo-container'>
                <h2>HRnet</h2>
                <img src={logo} alt="" />
            </div>
            <div className="container">
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <div className='name'>
                        <Input
                            className='first-name'
                            id='first-name'
                            type='text'
                            text='First Name'
                        />
                        <Input
                            className='last-name'
                            id='last-name'
                            type='text'
                            text='Last Name'
                        />
                    </div>
                    <div className='date'>
                        <Input
                            className='birth-date'
                            id='date-of-birth'
                            type='text'
                            text='Date of Birth'
                        />
                        <Input
                            className='start-date'
                            id='start-date'
                            type='text'
                            text='Start Date'
                        />
                    </div>
                    <div className='address-top'>
                        <Input
                            className='street'
                            id='street'
                            type='text'
                            text='Street'
                        />
                        <Input
                            className='city'
                            id='city'
                            type='text'
                            text='City'

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
                        />
                        <Input
                            className='zipcode'
                            id='zipcode'
                            type='number'
                            text='Zip Code'
                        />
                    </div>
                    <Input
                        className='department'
                        id='department'
                        text='Department'
                        select
                        option
                        data={departmentsData}
                    />
                </form>
                <button onClick="saveEmployee()">Save</button>
                <div id="confirmation" className="modal">Employee Created!</div>
            </div>

        </section>
    )
}
export default CreateEmployee