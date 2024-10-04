import { useEffect, useState } from 'react';
import { getCharacterSheetById} from '../../service/http';
import { characterPlaceholder } from '../../placeholders/characterPlaceholder';
import Character from '../../components/Character';
import styled from "styled-components";
import { CharacterSheetType } from '../../types';

const BattleField = styled.div`
    display: flex;
    gap: 25px;
    justify-content: space-evenly;
`;

const Battle = (playerCharacter: CharacterSheetType) => {
    

    const [player, setPlayer] = useState<CharacterSheetType>(characterPlaceholder);
    const [opponent, setOpponent] = useState<CharacterSheetType>(characterPlaceholder);
    const [isBattleLoaded, setIsBattleLoaded] = useState<Boolean>(false);
    
    useEffect(():void => {
        if(!isBattleLoaded) {
            async function battleData() {
                // const getPlayerCharacter = await getCharacterSheetById(2);
                // const getOpponentCharacter = await getCharacterSheetById(3);
                setPlayer(playerCharacter);
                setOpponent(playerCharacter);
                setIsBattleLoaded(true);
            }
            battleData();
        }
    }, [isBattleLoaded]);

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