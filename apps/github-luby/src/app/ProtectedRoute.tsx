import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import TabNavigation from './components/tab-navigation/tab-navigation'
import { UserContext } from './UserContext'

interface ProtectedRouteProps {
    component: React.ReactNode | void
    path: string
}

const ProtectedRoute = ({component}: any) => {

    const [user] = useContext(UserContext)
    const Component = component

    return user ? (
        <>
            <Component />
            <TabNavigation />
        </>
    ) : <Redirect to={{pathname: "/"}}/>
}

export default ProtectedRoute