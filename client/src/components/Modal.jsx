import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'


function Modal({ success, action }) {
    return (
        success ?
            <div id="confirmation" className="modal-content">
                {success}
                <FontAwesomeIcon onClick={action} icon={faClose} className='faClose' />
            </div> : ''
    )
}
Modal.propTypes = {
    success: PropTypes.string,
    action: PropTypes.func,
}
export default Modal