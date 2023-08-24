import PropTypes from 'prop-types'

function TableData({ userData, filteredList }) {
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