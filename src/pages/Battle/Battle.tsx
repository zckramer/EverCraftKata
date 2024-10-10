import { useContext, useEffect, useState } from 'react';
import Character from '../../components/Character';
import styled from "styled-components";
import { CharacterSheetType } from '../../types';
import { SelectedPlayerContext } from '../../store/selected-character-context';




const BattleField = styled.div`
    display: flex;
    gap: 25px;
    justify-content: space-evenly;
`;

const Battle = () => {
    

    const [player, setPlayer] = useState<CharacterSheetType>();
    const [opponent, setOpponent] = useState<CharacterSheetType>();
    const [isBattleLoaded, setIsBattleLoaded] = useState<Boolean>(false);

    const playerCharacter = useContext(SelectedPlayerContext);

    
    useEffect(():void => {
        if(!isBattleLoaded) {
            async function battleData() {
                setPlayer(playerCharacter.selectedPlayer);
                setOpponent(playerCharacter.selectedOpponent);
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