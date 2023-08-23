import PropTypes from 'prop-types'
import { deleteOneEmployee, displayEmployeesList } from '../utils/fetchApiData';


function TableData({ userData, setUserData, filteredList }) {
    const handleDelete = (id) => {
        deleteOneEmployee(id)
        displayEmployeesList(setUserData)
    }

    return (
        <tbody >
            {filteredList.length > 0 ?
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
                                onClick={() => handleDelete(data._id)}
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
                                onClick={() => handleDelete(data._id)}
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
}
export default TableData