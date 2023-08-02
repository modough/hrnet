import PropTypes from 'prop-types'
import '../css/input.css';


function Select({ className, id, text, data, action, value, state }) {

    return (
        <div className={className}>
            <label htmlFor={id}>{text}</label>
            <select name={id} id={id} onChange={action} >
                <option>{state ? 'Choose a state...' : 'Choose a Department...'}</option>
                {data.map((elmt, i) => {
                    return (
                        <option key={data[i]} value={value}>{elmt}</option>
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
    value: PropTypes.string,
    className: PropTypes.string,
    state: PropTypes.bool,
    data: PropTypes.array,
    action: PropTypes.func,
}
export default Select