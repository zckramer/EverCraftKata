import { useState, useEffect } from "react";
import styled from "styled-components";

function Character( {characterData} ) {

    const CharacterWrapper = styled.div`
        border: ${props => props.$player ? "2px solid lightyellow" : "2px solid red"} ;
        border-radius: 10px;
        width: 500px;
        background-color: ${props => props.$player ? "#ffffe0" : "red"};
        padding: 20px;
    `;

    const DashedBorder = styled.div`
        border: 2px dashed darkgreen;
        border-radius: 10px;
    `;

    const CharacterName = styled.h1`
        font-family: cursive;
        color: darkgreen;
    `;

    const CharacterAttributes = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    `;

    const Attribute = styled.p`
        width: 200px;
        font-size: 22px;
        color: black;
    `;

    const HPColor = styled.span`
        color: green;
        font-weight: bold;
    `;

    const [characterName, setCharacterName] = useState('');
    const [alignment, setAlignment] = useState('');
    const [hitPoints, setHitPoints] = useState('');
    const [armorClass, setArmorClass] = useState('');
    const [isAlive, setIsAlive] = useState(true);

    useEffect(() => {
        setCharacterName(characterData.name);
        setAlignment(characterData.alignment);
        setHitPoints(characterData.hitPoints);
        setArmorClass(characterData.armorClass);
        setIsAlive(characterData.isAlive);
    }, [characterData])

    return(
        <>
            <CharacterWrapper $player>
                <DashedBorder>
                    <CharacterName>{characterName}</CharacterName>
                    <CharacterAttributes>
                        <Attribute><strong>Alignment:</strong> {alignment}</Attribute>
                        <Attribute><strong>Hit Points:</strong> <HPColor>{hitPoints}</HPColor></Attribute>
                        <Attribute><strong>Armor Class:</strong> {armorClass}</Attribute>
                        <Attribute><strong>Is {characterName} alive?</strong> {isAlive ? "Yes!" : "No..."} </Attribute>
                    </CharacterAttributes>
                </DashedBorder>
            </CharacterWrapper>
        </>
        
    )
}

export default Character;