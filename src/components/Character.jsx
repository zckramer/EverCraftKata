import { useState, useEffect } from "react";
import styled from "styled-components";

function Character( {characterData, opponent}  ) {

    const CharacterWrapper = styled.div`
        border: ${props => props.$opponent ? "2px solid red" : "2px solid lightyellow"} ;
        border-radius: 10px;
        width: 500px;
        background-color: ${props => props.$opponent ? "red" : "#ffffe0"};
        padding: 20px;
    `;

    const DashedBorder = styled.div`
        border: ${props => props.$opponent ? "2px dashed white" : "2px dashed darkgreen"};
        border-radius: 10px;
    `;

    const CharacterName = styled.h1`
        font-family: cursive;
        color: ${props => props.$opponent ? "white" : "darkgreen"};
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
        color: ${props => props.$opponent ? "white" : "green"};
        font-weight: bold;
    `;

    const [characterName, setCharacterName] = useState('');
    const [alignment, setAlignment] = useState('');
    const [hitPoints, setHitPoints] = useState('');
    const [armorClass, setArmorClass] = useState('');
    const [isAlive, setIsAlive] = useState(true);

    const [isOpponent, setisOpponent] = useState(true);

    useEffect(() => {
        setCharacterName(characterData.name);
        setAlignment(characterData.alignment);
        setHitPoints(characterData.hitPoints);
        setArmorClass(characterData.armorClass);
        setIsAlive(characterData.isAlive);
        setisOpponent(opponent);
    }, [characterData, opponent])

    return(
        <>
            <CharacterWrapper $opponent={opponent}>
                <DashedBorder $opponent={isOpponent}>
                    <CharacterName $opponent={isOpponent}>{characterName}</CharacterName>
                    <CharacterAttributes>
                        <Attribute><strong>Alignment:</strong> {alignment}</Attribute>
                        <Attribute><strong>Hit Points:</strong> <HPColor $opponent={isOpponent}>{hitPoints}</HPColor></Attribute>
                        <Attribute><strong>Armor Class:</strong> {armorClass}</Attribute>
                        <Attribute><strong>Is {characterName} alive?</strong> {isAlive ? "Yes!" : "No..."} </Attribute>
                    </CharacterAttributes>
                </DashedBorder>
            </CharacterWrapper>
        </>
        
    )
}

export default Character;