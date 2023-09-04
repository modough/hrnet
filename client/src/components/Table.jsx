import PropTypes from 'prop-types';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Fragment, useEffect, useState } from 'react';
import { displayEmployeesList } from '../utils/fetchApiData';
import '../css/table.css';

function Filter() {
    const [userData, setUserData] = useState([])
    const [filterInput, setFilterInput] = useState({
        global: {
            value: null,
            matchMode: FilterMatchMode.CONTAINS
        }
    })

    useEffect(() => {
        displayEmployeesList(setUserData)
    }, []);

    return (
        <Fragment>
            <div className='filter-wrapper'>
                <InputText
                    placeholder='SEARCH'
                    className='redBorder'
                    onInput={(e) => setFilterInput(
                        {
                            global: {
                                value: e.target.value,
                                matchMode: FilterMatchMode.CONTAINS
                            }
                        }
                    )}
                />
            </div>
            <DataTable
                value={userData}
                filters={filterInput}
                showGridlines
                paginator
                rows={4}
                rowsPerPageOptions={[10, 25, 50, 100]}
            >
                <Column field='firstName' header='Firstname' sortable />
                <Column field='lastName' header='Lastname' sortable />
                <Column field='birthDate' header='Date of Birth' sortable />
                <Column field='startDate' header='Start Date' sortable />
                <Column field='street' header='Street' sortable />
                <Column field='city' header='City' sortable />
                <Column field='state' header='State' sortable />
                <Column field='zipcode' header='Zipcode' sortable />
                <Column field='department' header='Department' sortable />
            </DataTable>
        </Fragment>
    )
}
Filter.propTypes = {
    userData: PropTypes.array,
    setUserData: PropTypes.func,
}
export default Filter