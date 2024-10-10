import { useContext, useEffect, useState } from "react";
import { CharacterSheetType } from "../../types";
import { getAllCharacters} from '../../service/http';
import { SelectedPlayerContext } from "../../store/selected-character-context";
import { Link } from "react-router-dom";

const Home = () => {

    const [characters, setCharacters] = useState<CharacterSheetType[]>();
    const selectedCharacterContext = useContext(SelectedPlayerContext)

    useEffect(():void  => {
        getAllCharacters()
        .then((res) => setCharacters(res));

    },[])

    function handleCharacterChoice(player?: CharacterSheetType, opponent?: CharacterSheetType) {

        player && selectedCharacterContext.changeSelectedPlayer(player);
        opponent && selectedCharacterContext.changeOpponentPlayer(opponent);
    }

    return (
        <div>
            <h1>Welcome to Evercraft!</h1>
            <h2>Select Your Character</h2>
            {characters && characters.map((character) => 
                <button onClick={() => handleCharacterChoice(character, undefined)} >{character.name}</button> )}
            <h3>Selected Character: {selectedCharacterContext?.selectedPlayer.name}</h3>

            {/* reorginize this to not repeat */}

            <h2>Select Your Opponent</h2>
            {characters && characters.map((character) => 
                <button onClick={() => handleCharacterChoice(undefined, character)} >{character.name}</button> )}
            <h3>Selected Opponent: {selectedCharacterContext?.selectedOpponent.name}</h3>

            <Link to={`/battle`}><button>LETS BATTLE</button></Link>
        </div>
    );
}

export default Home;