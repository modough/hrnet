import '../css/table.css';
import TableData from './TableData';
import TableHeader from './TableHeader';

function Table() {
    return (
        <table id="employee-table" className="display">
            <TableHeader />
            <TableData />
        </table>
    )
}

export default Table