import '../css/table.css';
import TableData from './TableData';
import TableHeader from './TableHeader';
import PropTypes from 'prop-types'

function Table({ userData, setUserData, filteredList }) {
    return (
        <div className='table-container'>
            <table id="employee-table">
                <TableHeader />
                <TableData
                    userData={userData}
                    setUserData={setUserData}
                    filteredList={filteredList}


                />
            </table>
        </div>
    )
}
Table.propTypes = {
    userData: PropTypes.array,
    filteredList: PropTypes.array,
    setUserData: PropTypes.func,

}
export default Table