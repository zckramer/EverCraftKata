import './App.css'
import { useEffect, useState } from 'react'
import { httpGet } from './service/http'

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('')
  const [inputText, setInputText] = useState('')

  function handleInputText(newText) {
    setInputText(newText)
  }

  async function handleSubmit() {
    const response = await httpGet(inputText)
    setWelcomeMessage(response)
  }

  useEffect(() => {
    async function initMessage() {
      let params = new URLSearchParams(document.location.search);
      const characterName = params.get("characterName");
      const initResponse = await httpGet(characterName)
      console.log(initResponse);
    }
    initMessage();
  }, [])

  return (
    <>
      <p>
        Welcome to Evercraft!
      </p>
    </>
  )
}

export default App
