import items from './data';
const _URL = 'https://course-api.com/react-tabs-project'


type data = { 
    id: string,
    order: number,
    title: string,
    dates: string,
    duties: object,
    company?: string
}

export const getService = async () => { 
    const result = await fetch(_URL)
    return result.json()
}



