import PropTypes from 'prop-types'
import Table from './Table'
import { Fragment, useEffect, useState } from 'react';
import { displayEmployeesList } from '../utils/fetchApiData';
import Input from './Input';
import '../css/filter.css';

function Filter() {
    const [userData, setUserData] = useState([])
    const [filterInput, setFilterInput] = useState()

    useEffect(() => {
        displayEmployeesList(setUserData)
    }, []);

    const filteredList = userData.filter((item) =>
        item.firstName.toLowerCase().includes(filterInput) ||
        item.lastName.toLowerCase().includes(filterInput) ||
        item.birthDate.toLowerCase().includes(filterInput) ||
        item.startDate.toLowerCase().includes(filterInput) ||
        item.street.toLowerCase().includes(filterInput) ||
        item.city.toLowerCase().includes(filterInput) ||
        item.state.toLowerCase().includes(filterInput) ||
        item.department.toLowerCase().includes(filterInput) ||
        item.zipcode.toString().toLowerCase().includes(filterInput)
    )
    console.log(userData)
    return (
        <Fragment>
            <div className='filter-wrapper'>
                <div className='list-select '>
                    <p>Show</p>
                    <select>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <p>entries</p>
                </div>
                <Input
                    className='search-input'
                    id='search'
                    text='Search'
                    redBorder='search'
                    value={filterInput || ''}
                    action={(e) => setFilterInput(e.target.value.toLowerCase())}
                    type='text'
                />
            </div>
            <Table
                filteredList={filteredList}
                userData={userData}
                setUserData={setUserData}
            />
            <div className='bottom-table'>
                <p>Showing {`${filteredList.length || userData.length} to ${userData.length}`} entries</p>
                <div className='bottom-table-btns'>
                    <button type="button">Previous</button>
                    <button type="button">Next</button>
                </div>
            </div>
        </Fragment>
    )
}
Filter.propTypes = {
    userData: PropTypes.array,
    setUserData: PropTypes.func,
}
export default Filter