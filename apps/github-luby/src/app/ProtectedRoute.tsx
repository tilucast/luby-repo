import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import { UserContext } from './UserContext'

interface ProtectedRouteProps {
    component: React.ReactNode | void
    path: string
}

const ProtectedRoute = ({component}) => {

    const [user] = useContext(UserContext)
    const Component = component

    return user ? (
        <Component />
    ) : <Redirect to={{pathname: "/"}}/>
}

export default ProtectedRoute