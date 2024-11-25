import {createContext, useContext } from 'react';

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
    const [animationIndex, setAnimationIndex] = useState(0);
    return(
        <CharacterAnimationsContext.Provider value={{}}>
            {props.children}
        </CharacterAnimationsContext.Provider>
    );
};

export const useCharacterAnimations = () => {
    return useContext(CharacterAnimationsContext);
}
