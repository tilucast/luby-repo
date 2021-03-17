const fetchUserStuff = async (url: string) => {
    try{

        const data = await fetch(url, {headers: {Accept: 'application/vnd.github.v3+json'}})
        const result = await data.json()
    
        return result

    }catch(error){
        throw new Error(error)
    }
}

export {fetchUserStuff}