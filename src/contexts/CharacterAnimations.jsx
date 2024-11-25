import {createContext, useContext } from 'react';

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {

    return(
        <CharacterAnimationsContext.Provider value={{}}>
            {props.children}
        </CharacterAnimationsContext.Provider>
    );
};

export const useCharacterAnimations
