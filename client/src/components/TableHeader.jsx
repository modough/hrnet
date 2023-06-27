import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

function TableHeader() {

    return (
        <thead>
            <tr>
                <th>Firstname<FontAwesomeIcon icon={faSort} /></th>
                <th>Lastname<FontAwesomeIcon icon={faSort} /></th>
                <th>Date of Birth<FontAwesomeIcon icon={faSort} /></th>
                <th>Start Date<FontAwesomeIcon icon={faSort} /></th>
                <th>Street<FontAwesomeIcon icon={faSort} /></th>
                <th>City<FontAwesomeIcon icon={faSort} /></th>
                <th>State<FontAwesomeIcon icon={faSort} /></th>
                <th>Zipcode<FontAwesomeIcon icon={faSort} /></th>
                <th>Department<FontAwesomeIcon icon={faSort} /></th>
            </tr>
        </thead>
    )
}

export default TableHeader