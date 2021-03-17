import React, { useState, createContext } from 'react'
import { UserProps } from './common/interfaces'

const UserContext = createContext(null)

const UserProvider = ({children}) => {

    const [user, setUser] = useState<UserProps | null>(null)

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}