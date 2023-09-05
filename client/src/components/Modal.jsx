/* eslint-disable react/display-name */
import PropTypes from 'prop-types'
import { memo } from 'react'

const Modal = memo(({ success, action }) => {
    return (
        success ?
            <div id="confirmation" className="modal-content">
                {success}
                <button
                    onClick={action}
                    className='faClose'>
                    {'Close'}
                </button>
            </div> : ''
    )
})
Modal.propTypes = {
    success: PropTypes.string,
    action: PropTypes.func,
}
export default Modal