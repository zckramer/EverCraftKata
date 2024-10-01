import axios from 'axios'
import { CharacterSheetType } from '../types';
import { characterPlaceholder } from '../placeholders/characterPlaceholder';

const BASE_URL = 'http://localhost:8080/'

export async function httpGet(personName: string): Promise<string> {
    const constructedURL = `${personName ? (BASE_URL + "character?characterName=" + personName) : BASE_URL}`
    let playerName: string = '';
    try {
        const response = await axios.get(constructedURL);
        playerName = response.data;
    } catch (error) {
        console.error(error);
    }
    console.log('ZACK! ', "this is the response data...", playerName);
    return playerName;
};

export async function httpGetBattle() {
    const constructedURL = `${BASE_URL + "battle"}`
    try {
        const response = await axios.get(constructedURL);
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export async function getCharacterSheet(characterName:string): Promise<CharacterSheetType> {
    const characterQuery = `${characterName ? (BASE_URL + "character?characterName=" + characterName) : BASE_URL}`
    let characterSheetResponse: CharacterSheetType = characterPlaceholder;
    try {
        const response = await axios.get(characterQuery);
        characterSheetResponse = response.data
    } catch (error) {
        console.error(error)
    }
    return characterSheetResponse;
}