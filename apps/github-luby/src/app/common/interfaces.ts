interface UserProps {
    avatar_url: string
    bio: string
    email: string
    followers: number
    followers_url: string
    following: number
    following_url: string
    location: string
    login: string
    name: string
    public_repos: number
    url: string
}

interface ContextProps {
    user: UserProps 
    setUser: () => string
}

export {UserProps, ContextProps}