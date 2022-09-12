import { useEffect, useState } from "react"
import { FaAngleDoubleRight } from 'react-icons/fa'
import { getService } from "../service/DataService"
import TabsButton from '../components/TabsButton'

type stateData = { 
    title: string,
    company: string,
    dates: string,
    duties: object[],
}
type propsType = { 
    setValue: (active: number) => void
    value: number
}
type viev = { 
    data: object[]
    value: number,
    setValue: (active: number) => void
}

const JobsInfo = ({value,setValue}:propsType) => {

    const [data, setData] = useState<stateData[]>([])
    const [load, setLoad] = useState(true)
    
    useEffect(() =>  {
        getService()
        .then((res) => setData(res))
        .finally(() => setLoad(false))
    }, [])

    const content  = !load ? <Viev data={data} value={value} setValue={setValue}/> : null
    
    return ( 
        <div className="jobs-center">
            {content}
        </div>
    )
}
function Viev({data, value, setValue}: viev) { 
    console.log(data)

    const {title, company, dates, duties}:any = data[value]

    return (    
        <>
            <TabsButton setValue={setValue} value={value}/>
            <article className="job-info">
                <h3>{title}</h3>
                <h4>{company}</h4>
                <p className="job-date">{dates}</p>
                    {duties.map((duty:string, index:number) => {
                    return (
                        <div key={index} className="job-desc">
                        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                        <p>{duty}</p>
                        </div>
                    )
                    })}
            </article>
        </>
    )
}

export default JobsInfo