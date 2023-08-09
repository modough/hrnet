import '../css/table.css';
import TableData from './TableData';
import TableHeader from './TableHeader';
import PropTypes from 'prop-types'

function Table({ userData, setUserData, filteredList, isFilter }) {
    return (
        <div className='table-container'>
            <table id="employee-table">
                <TableHeader />
                <TableData
                    userData={userData}
                    setUserData={setUserData}
                    filteredList={filteredList}
                    isFilter={isFilter}

                />
            </table>
        </div>
    )
}
Table.propTypes = {
    userData: PropTypes.array,
    filteredList: PropTypes.array,
    setUserData: PropTypes.func,
    isFilter: PropTypes.bool,
}
export default Table