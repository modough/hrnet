import PropTypes from 'prop-types'

function CustomError({ errorMessage }) {
    return (
        <div className='errorMessage'>
            <p>{errorMessage}</p>
        </div>
    )
}
CustomError.propTypes = {
    errorMessage: PropTypes.string,
}
export default CustomError