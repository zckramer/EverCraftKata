import { useEffect, useState } from 'react'
import { httpGetBattle } from '../../service/http'
import Character from '../../components/Character'

function Battle() {
    
    const [player, setPlayer] = useState('');
    const [opponent, setOpponent] = useState('');
    const [isBattleLoaded, setIsBattleLoaded] = useState(false);
    
    useEffect(() => {
        if(!isBattleLoaded) {
            async function battleData() {
                const battleResponse = await httpGetBattle();
                setPlayer(battleResponse[0]);
                setOpponent(battleResponse[1]);
                setIsBattleLoaded(true);
            }
            battleData();
        }
    }, [isBattleLoaded])

    // Log battleCharacters after it updates
    // useEffect(() => {
    //     console.log("Player: ", player);
    //     console.log("Opponent: ", opponent);
    // }, [player, opponent]);

    return(
        <>
            <h1>Battle</h1>
            {player && opponent &&
            <>
                <Character characterData={player} opponent={false} />
                <Character characterData={opponent} opponent={true} />
            </>
            }
            
        </>
    )
};

export default Battle;