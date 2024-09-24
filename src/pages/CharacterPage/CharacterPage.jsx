import { useEffect, useState } from 'react'
import { httpGet } from '../../service/http'
import Character from '../../components/Character'

function CharacterPage() {

    const [characterData, setCharacterData] = useState('')
    const [isCharacterLoaded, setIsCharacterLoaded] = useState(false);

    useEffect(() => {
        if(!isCharacterLoaded) {
            async function initMessage() {
            let params = new URLSearchParams(document.location.search);
            console.log(params);
            const characterName = params.get("characterName");
            const initResponse = await httpGet(characterName)
            setCharacterData(initResponse);
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
        {characterData && <Character characterData={characterData}></Character>}
    </>
    )
}

export default CharacterPage;