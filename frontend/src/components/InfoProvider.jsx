import React, { createContext, useState} from 'react';

export const UserContext = createContext()


function InfoProvider(props) {
    const [isLog, setIsLog]= useState(false)
    return (
    <UserContext.Provider value={[isLog, setIsLog]}>
        {props.children}
    </UserContext.Provider>

    )
}

export default InfoProvider





// rfce -> 