import { useState } from "react";
import styled from "styled-components";
import { CharacterSheetType } from "../types";

const Character: React.FC<CharacterSheetType> = (
    {name, armorClass, hitPoints, alignment, isAlive, opponent}
) => {
    const CharacterWrapper = styled.div`
        border: ${opponent ? "2px solid red" : "2px solid lightyellow"} ;
        border-radius: 10px;
        width: 500px;
        background-color: ${opponent ? "red" : "#ffffe0"};
        padding: 20px;
    `;

    const DashedBorder = styled.div`
        border: ${opponent ? "2px dashed white" : "2px dashed darkgreen"};
        border-radius: 10px;
    `;

    const CharacterName = styled.h1`
        font-family: cursive;
        color: ${opponent ? "white" : "darkgreen"};
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
        color: ${opponent ? "white" : "green"};
        font-weight: bold;
    `;

    // const [characterName, setCharacterName] = useState('');
    // const [alignment, setAlignment] = useState('');
    // const [hitPoints, setHitPoints] = useState('');
    // const [armorClass, setArmorClass] = useState('');
    // const [isAlive, setIsAlive] = useState(true);

    const [character, setCharacter] = useState<CharacterSheetType>(
        {
            name,
            armorClass,
            alignment,
            hitPoints,
            isAlive,
            opponent
        }
    );
    
    return(
        <>
            <CharacterWrapper >
                <DashedBorder >
                    <CharacterName >{name}</CharacterName>
                    <CharacterAttributes>
                        <Attribute><strong>Alignment:</strong> {alignment}</Attribute>
                        <Attribute><strong>Hit Points:</strong> <HPColor >{hitPoints}</HPColor></Attribute>
                        <Attribute><strong>Armor Class:</strong> {armorClass}</Attribute>
                        <Attribute><strong>Is {name} alive?</strong> {isAlive ? "Yes!" : "No..."} </Attribute>
                    </CharacterAttributes>
                </DashedBorder>
            </CharacterWrapper>
        </>
        
    )
}

export default Character;