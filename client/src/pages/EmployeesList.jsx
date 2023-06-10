import { Link } from "react-router-dom"
import '../css/employeesList.css';
import Table from "../components/Table";

function EmployeeList() {
    return (
        <section id="employee-div" className="container-employeesList">
            <div className="employeesList-content">
                <h1>Current Employees</h1>
                <Table />
                <div className='homepage'>
                    <Link to="/">Return to Homepage</Link>
                </div>
            </div>
        </section>
    )
}

export default EmployeeList