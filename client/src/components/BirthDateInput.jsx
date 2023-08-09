import PropTypes from 'prop-types'
import '../css/input.css';
import CustomError from './CustomError';
import DayPicker from 'date-selector-react/src/components/DayPicker'
import { Fragment, useState } from 'react';
import calendarIcon from '../assets/calendar-309.svg'

function BirthDateInput({
    setClickedDate,
    clickedDate,
    redBorder,
    className,
    id,
    text,
    type,
    value,
    action,
    errorMessage
}) {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className={className}>
            <label htmlFor={id}>{text}</label>
            <Fragment>
                <input
                    value={value}
                    className={redBorder}
                    onChange={action}
                    onClick={() => setIsClicked(!isClicked)}
                    type={type}
                    id={id}
                />
                <img
                    src={calendarIcon}
                    onClick={() =>
                        setIsClicked(!isClicked)}
                    className='calendar-icon'
                    alt='calendar icon'
                />
                {isClicked &&
                    <DayPicker
                        locale={'en-us'}
                        setClickedDate={setClickedDate}
                        clickedDate={clickedDate}
                    />
                }
            </Fragment>
            <CustomError errorMessage={errorMessage} />
        </div>
    )
}
BirthDateInput.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    action: PropTypes.func,
    errorMessage: PropTypes.string,
    redBorder: PropTypes.string,
    setClickedDate: PropTypes.func,
    clickedDate: PropTypes.object
}
export default BirthDateInput