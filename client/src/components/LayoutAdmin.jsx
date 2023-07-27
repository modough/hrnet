
import { useSelector } from "react-redux"
import PropTypes from 'prop-types'
import SignInPage from "../pages/SignInPage"
import { Fragment } from "react"


export const LayoutAdmin = ({ children }) => {
    const { token } = useSelector((state) => state.userReducer)
    if (!token) {
        return (
            <SignInPage />
        )
    } else {
        return (
            <Fragment>{children}</Fragment>
        )
    }

}

LayoutAdmin.propTypes = {
    children: PropTypes.object,
}