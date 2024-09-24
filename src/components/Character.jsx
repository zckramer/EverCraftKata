import { useState, useEffect } from "react";

function Character({ characterData }) {
    const [characterName, setCharacterName] = useState('');
    const [alignment, setAlignment] = useState('');
    const [hitPoints, setHitPoints] = useState('');
    const [armorClass, setArmorClass] = useState('');
    const [isAlive, setIsAlive] = useState(true)

    useEffect(() => {
        setCharacterName(characterData.name);
        setAlignment(characterData.alignment);
        setHitPoints(characterData.hitPoints);
        setArmorClass(characterData.armorClass);
        setIsAlive(characterData.isAlive);
    }, [characterData])

    return(
        <>
            <h1>{characterName}</h1>
            <h3>Alignment: {alignment}</h3>
            <h3>Hit Points: {hitPoints}</h3>
            <h3>Armor Class: {armorClass}</h3>
            <h3>Is {characterName} alive? {isAlive ? "Yes!" : "No..."} </h3>
        </>
        
    )
}

export default Character;