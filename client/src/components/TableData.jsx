
import { employeesListData } from '../data/employeesListData';

function TableData() {

    console.log(employeesListData)

    return (
        <tbody>
            {
                employeesListData.map((data) =>
                (
                    <tr key={data.id}>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.birthDate}</td>
                        <td>{data.startDate}</td>
                        <td>{data.street}</td>
                        <td>{data.city}</td>
                        <td>{data.state}</td>
                        <td>{data.zipcode}</td>
                        <td>{data.department}</td>
                    </tr>
                ))
            }
        </tbody>
    )
}
export default TableData