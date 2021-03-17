import React, { useState, createContext } from 'react'

const UserContext = createContext({})

const UserProvider = (props) => {

    const [user, setUser] = useState({})

    const fetchUser = async () => {
        try {
            const fetchUser = fetch(`https://api.github.com/users/tilucast`, {headers: {Accept: 'application/vnd.github.v3+json'}});
        
            const data = (await fetchUser).json()
        
            const actualUserData = await data

            setUser(actualUserData)
        
        } catch (error) {
        console.error(error)
        }
    }

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}