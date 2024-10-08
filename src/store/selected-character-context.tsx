import { createContext, useState } from 'react';
import { CharacterSheetType } from '../types';

type SelectedPlayerContextObj = {
    selectedPlayer: CharacterSheetType,
    changeSelectedPlayer: (selection: CharacterSheetType) => void
}

export const SelectedPlayerContext = createContext<SelectedPlayerContextObj>({
    selectedPlayer: {},
    changeSelectedPlayer: (selection: CharacterSheetType) => {},
});

const SelectedPlayerContextProvider = (props:any): React.ReactElement => {
    const [selectedPlayer, setSelectedPlayer] = useState<CharacterSheetType>({});
    
    const handleSelectPlayer = (selection: CharacterSheetType): void => {
        setSelectedPlayer(selection);
    }

    const contextValue: SelectedPlayerContextObj = {
        selectedPlayer,
        changeSelectedPlayer: handleSelectPlayer
    }

    return <SelectedPlayerContext.Provider value={contextValue}>{props.children}</SelectedPlayerContext.Provider>
}

export default SelectedPlayerContextProvider