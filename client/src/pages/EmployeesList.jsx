import '../css/employeesList.css';

import { Link } from 'react-router-dom'
import { LayoutAdmin } from '../components/LayoutAdmin';
import Filter from '../components/Filter';



function EmployeeList() {

    return (
        <LayoutAdmin>
            <section id="employee-div" className="container-employeesList">
                <div className="employeesList-content">
                    <h1>Current Employees</h1>
                    <Filter />
                    <Link to='/'>
                        <p className='homepage'>Return</p>
                    </Link>
                </div>
            </section>
        </LayoutAdmin>
    )
}
export default EmployeeList