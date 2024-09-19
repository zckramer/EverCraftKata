import axios from 'axios'

const BASE_URL = 'http://localhost:8080/'

export async function httpGet(personName) {
    const constructedURL = `${personName ? (BASE_URL + 'person?name=' + personName) : BASE_URL}`
    try {
        const response = await axios.get(constructedURL);
        console.log('ZACK, whats goin onnn', response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}
