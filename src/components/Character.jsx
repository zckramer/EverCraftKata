import { useState, useEffect } from "react";

function Character(characterData) {
    const [characterName, setCharacterName] = useState('');
    const [hitPoints, setHitPoints] = useState('');
    const [armorClass, setArmorClass] = useState('');

    useEffect(() => {
        setCharacterName(characterData.characterName);
        setHitPoints(characterData.hitPoints);
        setArmorClass(characterData.armorClass);
    }, [characterData])

    return(
        <>
            <h1>{characterName}</h1>
            <p>{hitPoints}</p>
            <p>{armorClass}</p>
        </>
        
    )
}

export default Character;