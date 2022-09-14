import items from './data';
const _URL = 'https://course-api.com/react-tabs-project'


export const getService = async () => { 
    const result = await fetch(_URL)
    return result.json()
}



