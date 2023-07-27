import '../css/employeesList.css';
import Table from "../components/Table";
import { Link } from 'react-router-dom'
import { LayoutAdmin } from '../components/LayoutAdmin';


function EmployeeList() {
    return (
        <LayoutAdmin>
            <section id="employee-div" className="container-employeesList">
                <div className="employeesList-content">
                    <h1>Current Employees</h1>
                    <Table />
                    <Link to='/'>
                        <p className='homepage'>Return</p>
                    </Link>
                </div>
            </section>
        </LayoutAdmin>
    )
}

export default EmployeeList