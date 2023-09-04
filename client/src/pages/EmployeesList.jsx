import '../css/employeesList.css';
import { Link } from 'react-router-dom'
import Table from '../components/Table';

function EmployeeList() {
    return (
        <section id="employee-div" className="container-employeesList">
            <div className="employeesList-content">
                <h1>Current Employees</h1>
                <Table />
                <p className='homepage'>
                    <Link to='/'>Return</Link>
                </p>
            </div>
        </section>
    )
}
export default EmployeeList