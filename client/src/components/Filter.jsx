import PropTypes from 'prop-types'
import Table from './Table'
import { Fragment, useEffect, useState } from 'react';
import { displayEmployeesList } from '../utils/fetchApiData';
import Input from './Input';

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

    return (
        <Fragment>
            <Input
                className='search-input'
                id='search'
                text='Search'
                redBorder='search'
                value={filterInput || ''}
                action={(e) => setFilterInput(e.target.value.toLowerCase())}
                type='text'

            />
            <Table
                filteredList={filteredList}
                userData={userData}
                setUserData={setUserData}
            />
        </Fragment>
    )
}
Filter.propTypes = {
    userData: PropTypes.array,
    setUserData: PropTypes.func,
}
export default Filter