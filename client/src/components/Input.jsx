/* eslint-disable react/display-name */
import PropTypes from 'prop-types'
import '../css/input.css';
import { memo } from 'react';

const Input = memo(({
    redBorder,
    className,
    id,
    text,
    type,
    value,
    action,
}) => {

    return (
        <div className={className}>
            <label htmlFor={id}>{text}</label>
            <input
                className={redBorder}
                onChange={action}
                type={type}
                id={id}
                value={value}
                required
            />
        </div>
    )
})
Input.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    action: PropTypes.func,
    onInput: PropTypes.func,
    errorMessage: PropTypes.string,
    redBorder: PropTypes.string
}
export default Input