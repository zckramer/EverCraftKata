import { useEffect, useState } from 'react';
import { getCharacterSheet } from '../../service/http';
import { characterPlaceholder } from '../../placeholders/characterPlaceholder';
import Character from '../../components/Character';
import styled from "styled-components";
import { CharacterSheetType } from '../../types';

const BattleField = styled.div`
    display: flex;
    gap: 25px;
    justify-content: space-evenly;
`;

function Battle() {
    

    const [player, setPlayer] = useState<CharacterSheetType>(characterPlaceholder);
    const [opponent, setOpponent] = useState<CharacterSheetType>(characterPlaceholder);
    const [isBattleLoaded, setIsBattleLoaded] = useState<Boolean>(false);
    
    useEffect(():void => {
        if(!isBattleLoaded) {
            async function battleData() {
                const getPlayerCharacter = await getCharacterSheet("Edgar");
                const getOpponentCharacter = await getCharacterSheet("Kefka");
                setPlayer(getPlayerCharacter);
                setOpponent(getOpponentCharacter);
                setIsBattleLoaded(true);
            }
            battleData();
        }
    }, [isBattleLoaded]);

    // Log battleCharacters after it updates
    // useEffect(() => {
    //     console.log("Player: ", player);
    //     console.log("Opponent: ", opponent);
    // }, [player, opponent]);

    return(
        <>
            <h1>Battle</h1>
            <BattleField>
                {player && opponent &&
                <>
                    <Character {...player}/>
                    <Character {...opponent}/>
                </>
                }
            </BattleField>
            
        </>
    )
};

export default Battle;