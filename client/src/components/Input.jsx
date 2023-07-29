import PropTypes from 'prop-types'
import '../css/input.css';
import CustomError from './CustomError';
import Datepicker from 'date-selector-react'
import { useState } from 'react';


function Input({ redBorder, className, id, text, type, value, action, errorMessage }) {
    const [isClicked, setIsClicked] = useState()
    return (
        <div className={className}>
            <label htmlFor={id}>{text}</label>

            {type === 'date' ?
                isClicked &&
                <Datepicker setIsClicked={setIsClicked}>
                    <input className={redBorder} onChange={action} type={type} id={id} value={value} />
                </Datepicker> :
                <input className={redBorder} onChange={action} type={type} id={id} value={value} />
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