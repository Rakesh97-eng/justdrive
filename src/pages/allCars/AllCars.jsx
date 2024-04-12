import { useState } from "react"
import "./allCars.css"
import { CarData } from "../../utils/cardata"
import Cards from "../../components/common/card";
import {useNavigate} from "react-router-dom"
import { Container, Row } from "react-bootstrap";
import p1 from "../../assets/p1.png"
import p2 from "../../assets/p2.png"
import p3 from "../../assets/p3.png"
import {useDispatch} from "react-redux";
import AllCarsHeader from "../../components/allCarHeader/AllCarsHeader";
import { addcardetails } from "../../redux/slice/userslice";
const AllCars = ()=>{
    const [cardata,setCarData] = useState(CarData);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let imgData = [p1,p2,p3]
    const handleCard = (id)=>{
        dispatch(addcardetails({data:id}))
        navigate('/selectedcars',{state:{id:id,img:imgData}})
    }


    return (
        <>
        {/* <div style={{display:'grid',gridTemplateColumns:"1fr 1fr 1fr",gap:"15px" }}> */}
        
        <Container>
            <Row className="equal-height-row">
            {
                cardata.map((data)=>{
                    return <Cards data={data} onSelect={handleCard}/>
                })
            }

            </Row>

        </Container>
        {/* </div> */}
        </>
    )
}

export default AllCars