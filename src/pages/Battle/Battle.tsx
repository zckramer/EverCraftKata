import { useEffect, useState } from 'react';
import { httpGetBattle, httpGet } from '../../service/http';
import { characterPlaceholder } from '../../placeholders/characterPlaceholder';
import Character from '../../components/Character';
import styled from "styled-components";
import { CharacterSheetType } from '../../types';

function Battle() {
    
    const BattleField = styled.div`
        display: flex;
        gap: 25px;
        justify-content: space-evenly;
    `;

    const [player, setPlayer] = useState<CharacterSheetType>(characterPlaceholder);
    const [opponent, setOpponent] = useState<CharacterSheetType>(characterPlaceholder);
    const [isBattleLoaded, setIsBattleLoaded] = useState<Boolean>(false);
    
    useEffect(():void => {
        if(!isBattleLoaded) {
            async function battleData() {
                const battleResponse = await httpGet("neeerrrrrrd");
                // setPlayer(battleResponse[0]);
                // setOpponent(battleResponse[1]);
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