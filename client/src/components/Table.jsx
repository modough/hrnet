import '../css/table.css';
import TableData from './TableData';
import TableHeader from './TableHeader';

function Table() {
    return (
        <div className='table-container'>
            <table id="employee-table">
                <TableHeader />
                <TableData />
            </table>
        </div>
    )
}

export default Table