/* eslint-disable react/display-name */
import PropTypes from 'prop-types'
import '../css/input.css';

import DayPicker from 'date-selector-react/src/components/DayPicker'
import { useState } from 'react';
import calendarIcon from '../assets/calendar-309.svg'

const StartDateInput = ({
    setClickedDate,
    clickedDate,
    className,
    id,
    text,
    type,
    value,
    action
}) => {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className={className}>
            <label htmlFor={id}>{text}</label>
            <input
                value={value}
                onChange={action}
                onClick={(e) => {
                    console.log(e.target.value);
                    setIsClicked(!isClicked)
                }
                }
                type={type}
                id={id}
            />
            <img
                src={calendarIcon}
                onClick={() => setIsClicked(!isClicked)}
                className='calendar-icon start'
                alt='calendar icon'
            />
            {isClicked &&
                <DayPicker
                    todayBackground='green'
                    color='#5a6f08'
                    locale='en-US'
                    setClickedDate={setClickedDate}
                    clickedDate={clickedDate}
                />
            }
        </div>
    )
}
StartDateInput.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    action: PropTypes.func,
    errorMessage: PropTypes.string,
    setClickedDate: PropTypes.func,
    clickedDate: PropTypes.object
}
export default StartDateInput