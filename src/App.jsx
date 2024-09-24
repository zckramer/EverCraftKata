import './App.css'
import { useEffect, useState } from 'react'
import { httpGet } from './service/http'
// import { useContext } from 'react'
import Character from './components/Character'

function App() {
  const [characterData, setCharacterData] = useState('')
  const [isCharacterLoaded, setIsCharacterLoaded] = useState(false);
  // const [inputText, setInputText] = useState('')
  // useContext(CharacterContext);

  // function handleInputText(newText) {
  //   setInputText(newText)
  // }

  // async function handleSubmit() {
  //   const response = await httpGet(inputText)
  //   setWelcomeMessage(response)
  // }

  useEffect(() => {
    if(!isCharacterLoaded) {
      async function initMessage() {
        let params = new URLSearchParams(document.location.search);
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

export default App
