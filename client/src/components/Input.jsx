import PropTypes from 'prop-types'
import '../css/input.css';


function Input({ className, id, text, type, select, option, data, value, action, errorMessage }) {
    return (
        <div className={className}>
            <label htmlFor={id}>{text}</label>
            {select ?
                <select name={id} id={id} onChange={action}>
                    {option && data.map((elmt, i) => {
                        return (
                            <option key={data[i]} >{elmt}</option>
                        )
                    })
                    }
                </select> :
                <input onChange={action} type={type} id={id} value={value} />
            }
            {errorMessage ?
                <p className='errorMessage'>{errorMessage}</p> :
                ''
            }
        </div>
    )
}
Input.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    select: PropTypes.bool,
    option: PropTypes.bool,
    data: PropTypes.array,
    value: PropTypes.string,
    action: PropTypes.func,
    errorMessage: PropTypes.string,
}
export default Input