import config from '../config'
import TokenService from '../services/token-service'

const LanguageApiService = {
    getLanguage() {
        return fetch(`${config.API_ENDPOINT}/language/`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    
    getHead(nextId) {
        return fetch(`${config.API_ENDPOINT}/language/head`, {
            method: 'GET',
            headers: {
                'Authorization':   `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    }
}

export default LanguageApiService;