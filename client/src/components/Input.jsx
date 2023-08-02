import PropTypes from 'prop-types'
import '../css/input.css';
import CustomError from './CustomError';
import DayPicker from 'date-selector-react/src/components/DayPicker'
import { Fragment, useState } from 'react';



function Input({ isDatePlugin, setClickedDate, clickedDate, redBorder, className, id, text, type, value, action, errorMessage }) {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className={className}>
            <label htmlFor={id}>{text}</label>
            {isDatePlugin ?
                <Fragment>
                    <input
                        className={redBorder}
                        onChange={action}
                        onClick={() => setIsClicked(!isClicked)}
                        type={type}
                        id={id}
                        value={value}
                    />
                    {isClicked &&
                        <DayPicker
                            setClickedDate={setClickedDate}
                            clickedDate={clickedDate}
                        />
                    }
                </Fragment> :
                <input
                    className={redBorder}
                    onChange={action}
                    type={type}
                    id={id}
                    value={value}
                />
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
    setClickedDate: PropTypes.func,
    clickedDate: PropTypes.object,
    isDatePlugin: PropTypes.bool,

}
export default Input