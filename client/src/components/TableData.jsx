import { useEffect, useState } from 'react';
import { deleteOneEmployee, displayEmployeesList } from '../utils/fetchApiData';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';

function TableData() {
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        displayEmployeesList(setUserData)

    }, []);
    const handleDelete = (id) => {
        deleteOneEmployee(id)
        displayEmployeesList(setUserData)
    }

    return (
        <tbody >
            {userData && userData.map((data) =>
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
                    <td className='delete-edit-icon'>
                        <button
                            onClick={() => {
                                <Modal action={handleDelete(data._id)} />
                            }
                            }
                            icon={faTrash}>{'Delete'}</button>
                    </td>
                </tr>
            )
            }
        </tbody>


    )
}
export default TableData