import { useEffect, useState } from 'react'
import { httpGet } from '../../service/http'
// import { useContext } from 'react'
import Character from '../../components/Character'

function CharacterPage({ characterData }) {

    const [characterInfo, setCharacterInfo] = useState('')
    const [isCharacterLoaded, setIsCharacterLoaded] = useState(false);

    useEffect(() => {
        if(!isCharacterLoaded) {
            async function initMessage() {
            let params = new URLSearchParams(document.location.search);
            const characterName = params.get("characterName");
            const initResponse = await httpGet(characterName)
            setCharacterInfo(initResponse);
            setIsCharacterLoaded(true);
            }
            initMessage();
        }
        }, [characterData, isCharacterLoaded])
    
        return (
        <>
            <h1>
            Welcome to Evercraft!
            </h1>
            {characterData && <Character characterData={characterInfo}></Character>}
        </>
        )
}

export default CharacterPage;