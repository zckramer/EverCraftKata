import { useEffect, useState } from "react";
import { CharacterSheetType } from "../../types";
import { getAllCharacters} from '../../service/http';

const Home = () => {

    const [characters, setCharacters] = useState<CharacterSheetType[]>();
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterSheetType>();
    

    useEffect(():void  => {
        getAllCharacters()
        .then((res) => setCharacters(res));

    },[])

    function handleCharacterChoice(character: CharacterSheetType) {
        setSelectedCharacter(character);
    }

    function startBattle() {
        
    }

    return (
        <>
            <h1>Welcome to Evercraft!</h1>
            <h2>Select Your Character</h2>
            {characters && characters.map((character) => <button onClick={event => handleCharacterChoice(character)} >{character.name}</button> )}
            <h3>Selected Character: {selectedCharacter?.name}</h3>
            <button onClick={() => startBattle()}>LETS BATTLE</button>
        </>
    );
}

export default Home;