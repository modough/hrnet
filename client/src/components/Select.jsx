import PropTypes from 'prop-types'
import '../css/input.css';

function Select({ className, id, text, data, action }) {

    return (
        <div className={className}>
            <label htmlFor={id}>{text}</label>
            <select name={id} id={id} onChange={action}>
                {data.map((elmt, i) => {
                    return (
                        <option key={data[i]} >{elmt}</option>
                    )
                })
                }
            </select>


        </div>
    )
}
Select.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    data: PropTypes.array,
    action: PropTypes.func,
}
export default Select