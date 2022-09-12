// import items from '../service/data'
import { useState, useEffect } from "react"
import {getService} from "../service/DataService"
import Loading from '../components/Loading'

type itemsData = { 
    id: string,
    order: number,
    title: string,
    dates: string,
    duties: object,
    company: string
}
type propsState = { 
    setValue: (active: number) => void
    value : number
}

const TabsButton = ({setValue, value}:propsState) =>  {
    const [button, setButton] = useState<itemsData[]>([])
    const [load, setLoad] = useState(true)
    

    useEffect(() => { 
        getService()
            .then((res) => setButton(res))
            .finally(() => setLoad(false))
    }, [])

    const content = button.map((item, index) => 
        <button 
            key={item.id}
            className={`job-btn ${index === value && 'active-btn'}`}
            onClick={() => setValue(index)}>{item.company}</button>)
    return ( 
        <div className="btn-container">
            {!load ? content : <Loading/>}
        </div>
    )
}


export default TabsButton