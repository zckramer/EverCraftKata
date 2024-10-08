import { useContext, useEffect, useState } from "react";
import { CharacterSheetType } from "../../types";
import { getAllCharacters} from '../../service/http';
import { SelectedPlayerContext } from "../../store/selected-character-context";

const Home = () => {

    const [characters, setCharacters] = useState<CharacterSheetType[]>();
    const selectedCharacterContext = useContext(SelectedPlayerContext)

    useEffect(():void  => {
        getAllCharacters()
        .then((res) => setCharacters(res));

    },[])

    function handleCharacterChoice(character: CharacterSheetType) {
        selectedCharacterContext.changeSelectedPlayer(character);
    }

    // function startBattle() {
    //
    // }

    return (
        <div>
            <h1>Welcome to Evercraft!</h1>
            <h2>Select Your Character</h2>
            {characters && characters.map((character) => 
                <button onClick={() => handleCharacterChoice(character)} >{character.name}</button> )}
            <h3>Selected Character: {selectedCharacterContext?.selectedPlayer.name}</h3>
            <button onClick={() => {}}>LETS BATTLE</button>
        </div>
    );
}

export default Home;