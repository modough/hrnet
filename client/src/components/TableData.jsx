
import { useEffect, useState } from 'react';


function TableData() {
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        fetch('http://localhost:3001/api/employeesList')
            .then(res => res.json())
            .then((data) => {
                setUserData(data);
            })
            .catch((err) => {
                console.error('An error has occured : ', err);
            });

    }, []);
    return (
        <tbody>
            {
                userData && userData.map((data) =>
                (
                    <tr key={data._id}>
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