import PropTypes from 'prop-types'
import { deleteOneEmployee, displayEmployeesList } from '../utils/fetchApiData';
import Modal from './Modal';

function TableData({ userData, setUserData, filteredList, isFilter }) {
    const handleDelete = (id) => {
        deleteOneEmployee(id)
        displayEmployeesList(setUserData)
    }
    return (
        <tbody >
            {isFilter ?
                filteredList && filteredList.map((data) =>
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
                                    <Modal
                                        action={handleDelete(data._id)}
                                    />
                                }
                                }
                            >{'Delete'}</button>
                        </td>
                    </tr>
                ) :
                userData && userData.map((data) =>
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
                                    <Modal
                                        action={handleDelete(data._id)}
                                    />
                                }
                                }
                            >{'Delete'}</button>
                        </td>
                    </tr>
                )
            }
        </tbody>


    )
}
TableData.propTypes = {
    userData: PropTypes.array,
    filteredList: PropTypes.array,
    setUserData: PropTypes.func,
    isFilter: PropTypes.bool,
}
export default TableData