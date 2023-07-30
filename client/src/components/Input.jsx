import PropTypes from 'prop-types'
import '../css/input.css';
import CustomError from './CustomError';
import DayPicker from 'date-selector-react/src/components/DayPicker'
import { useState } from 'react';


function Input({ redBorder, className, id, text, type, value, action, errorMessage }) {
    const [isClicked, setIsClicked] = useState()
    return (
        <div className={className}>
            <label htmlFor={id}>{text}</label>
            {isClicked &&
                type === 'date' ?
                <input className={redBorder} onChange={action} type={type} id={id} value={value}>
                    <DayPicker setIsClicked={setIsClicked} />
                </input> :
                <input className={redBorder} onChange={action} type={type} id={id} value={value}></input>
            }
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
    redBorder: PropTypes.string,
}
export default Input