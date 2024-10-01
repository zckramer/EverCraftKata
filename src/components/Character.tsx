import { useState } from "react";
import styled from "styled-components";
import { CharacterSheetType } from "../types";

const CharacterWrapper = styled.div<{ $opponent?: boolean; }>`
    border: ${props => props.$opponent ? "2px solid red" : "2px solid lightyellow"} ;
    border-radius: 10px;
    width: 500px;
    background-color: ${props => props.$opponent ? "red" : "#ffffe0"};
    padding: 20px;
`;

const DashedBorder = styled.div<{ $opponent?: boolean; }>`
    border: ${props => props.$opponent ? "2px dashed white" : "2px dashed darkgreen"};
    border-radius: 10px;
`;

const CharacterName = styled.h1<{ $opponent?: boolean; }>`
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

const HPColor = styled.span<{ $opponent?: boolean; }>`
    color: ${props => props.$opponent ? "white" : "green"};
    font-weight: bold;
`;

const Character: React.FC<CharacterSheetType> = (
    {id, name, armorClass, hitPoints, alignment, isAlive = true, opponent}
) => {


    const [character, setCharacter] = useState<CharacterSheetType>(
        {
            id,
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
            <CharacterWrapper $opponent={opponent}>
                <DashedBorder $opponent={opponent}>
                    <CharacterName $opponent={opponent}>{name}</CharacterName>
                    <CharacterAttributes>
                        <Attribute><strong>Alignment:</strong> {alignment}</Attribute>
                        <Attribute><strong>Hit Points:</strong> <HPColor $opponent={opponent}>{hitPoints}</HPColor></Attribute>
                        <Attribute><strong>Armor Class:</strong> {armorClass}</Attribute>
                        <Attribute><strong>Is {name} alive?</strong> {isAlive ? "Yes!" : "No..."} </Attribute>
                    </CharacterAttributes>
                </DashedBorder>
            </CharacterWrapper>
        </>
        
    )
}

export default Character;