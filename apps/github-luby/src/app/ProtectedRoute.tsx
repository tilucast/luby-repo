import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { UserContext } from './UserContext'

const ProtectedRoute = ({component}): React.ReactNode | void => {

    const [user] = useContext(UserContext)
    const history = useHistory()
    const Component = component

    return user ? (
        <Component />
    ) : history.push("/")
}

export default ProtectedRoute