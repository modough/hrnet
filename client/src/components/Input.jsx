import PropTypes from 'prop-types'

function Input({ className, id, text, type, select, option, data, }) {
    return (
        <div className={className}>
            <label htmlFor={id}>{text}</label>
            {select ?
                <select name={id} id={id} >
                    {option && data.map((elmt, i) => {
                        return (
                            elmt === data[0] ?
                                <option defaultValue={data[0]} hidden key={data[i]}>{elmt}</option> :
                                <option key={data[i]}>{elmt}</option>
                        )
                    })
                    }
                </select> :
                <input type={type} id={id} />
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
    data: PropTypes.array
}
export default Input