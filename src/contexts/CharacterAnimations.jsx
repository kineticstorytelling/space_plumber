import {createContext, useContext } from 'react';

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {

    return(
        <CharacterAnimationsContext.Provider value={{}}>
            
        </CharacterAnimationsContext.Provider>
    )
}