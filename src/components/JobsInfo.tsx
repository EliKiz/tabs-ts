import { useEffect, useState } from "react"
import { FaAngleDoubleRight } from 'react-icons/fa'
import { getService } from "../service/DataService"
import TabsButton from '../components/TabsButton'
import Loading from '../components/Loading'

type StateData = { 
    title: string,
    company: string,
    dates: string,
    duties: Duty[],
}
type Duty = { 
    dutyItem: string, 
    index:number
}
type PropsType = { 
    setValue: (active: number) => void
    value: number
}
type VievProps = { 
    // data: object[]
    data: StateData[]
    value: number,
    setValue: (active: number) => void
}

const JobsInfo = ({value,setValue}:PropsType) => {

    const [data, setData] = useState<StateData[]>([])
    const [load, setLoad] = useState(true)
    
    useEffect(() =>  {
        getService()
        .then((res) => setData(res))
        .finally(() => setLoad(false))
    }, [])
    const content  = load ? <Loading/> : <Viev data={data} value={value} setValue={setValue}/>
    const loading = load ? <Loading/> : null
    return ( 
        <div className="jobs-center">
            {loading}
            {content}
        </div>
    )
}
function Viev({data, value, setValue}: VievProps) { 
    console.log(data)

    const {title, company, dates, duties} = data[value]
    console.log("data in Viev", data)
    return (    
        <>
            <TabsButton setValue={setValue} value={value}/>
            <article className="job-info">
                <h3>{title}</h3>
                <h4>{company}</h4>
                <p className="job-date">{dates}</p>
                    {duties.map((duty, index) => {
                        // console.log("duty.dutyItem", duty.dutyItem)
                    return (
                        <div key={index} className="job-desc">
                            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                            <>
                                {duty}
                            </>
                        </div>
                    )
                    })}
            </article>
        </>
    )
}

export default JobsInfo