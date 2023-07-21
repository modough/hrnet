import PropTypes from 'prop-types'
import '../css/input.css';
import CustomError from './CustomError';

function Input({ className, id, text, type, value, action, errorMessage }) {
    return (
        <div className={className}>
            <label htmlFor={id}>{text}</label>
            <input onChange={action} type={type} id={id} value={value} />
            <CustomError errorMessage={errorMessage} />
        </div>
    )
}
Input.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    action: PropTypes.func,
    errorMessage: PropTypes.string,
}
export default Input