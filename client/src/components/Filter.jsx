import PropTypes from 'prop-types'
import { Fragment } from 'react'
import Table from './Table'
import { useEffect, useState } from 'react';
import { displayEmployeesList } from '../utils/fetchApiData';
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
    console.log(filteredList)


    return (
        <Fragment>
            <div className='search-input'>
                <label htmlFor='search'>Search</label>
                <input
                    className='search'
                    value={filterInput || ''}
                    onChange={(e) => {
                        setFilterInput(e.target.value.toLowerCase())
                    }}
                    type='text'
                    id='search'
                />
            </div>
            <Table filteredList={filteredList} userData={userData} setUserData={setUserData} />
        </Fragment>
    )
}
Filter.propTypes = {
    userData: PropTypes.array,
    setUserData: PropTypes.func,
}
export default Filter