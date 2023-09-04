/* eslint-disable react/display-name */
import PropTypes from 'prop-types'
import '../css/input.css';
import DayPicker from 'date-selector-react/src/components/DayPicker'
import { useState } from 'react';
import calendarIcon from '../assets/calendar-309.svg'

const BirthDateInput = ({
    setClickedDate,
    clickedDate,
    redBorder,
    className,
    id,
    text,
    type,
    value,
    action,
}) => {
    const [isClicked, setIsClicked] = useState(false)
    return (

        <div className={className}>
            <label htmlFor={id}>{text}</label>
            <input
                value={value}
                className={redBorder}
                onChange={action}
                onClick={() => setIsClicked(!isClicked)}
                type={type}
                id={id}
                required
            />
            <img
                src={calendarIcon}
                onClick={() => setIsClicked(!isClicked)}
                className='calendar-icon birth'
                alt='calendar icon'
            />
            {isClicked &&
                <DayPicker
                    todayBackground='green'
                    color='#5a6f08'
                    locale='en-US'
                    setClickedDate={setClickedDate}
                    clickedDate={clickedDate}
                />}
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
    redBorder: PropTypes.string,
    setClickedDate: PropTypes.func,
    clickedDate: PropTypes.object
}
export default BirthDateInput