import { useState } from "react"
import "./allCars.css"
import { CarData } from "../../utils/cardata"
import Cards from "../../components/common/card";
import {useNavigate} from "react-router-dom"
const AllCars = ()=>{
    const [cardata,setCarData] = useState(CarData);
    const navigate = useNavigate()

    const handleCard = (id)=>{
        navigate('/selectedcars',{state:{id:id}})
    }

    return (
        <>
        <div style={{display:'flex',flexWrap:"wrap",justifyContent:"space-around"}}>
            {
                cardata.map((data)=>{
                    return <Cards data={data} onSelect={handleCard}/>
                })
            }
        </div>
        </>
    )
}

export default AllCars