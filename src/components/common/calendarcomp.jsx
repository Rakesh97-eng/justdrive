import { Col, Container, Row } from "react-bootstrap"
import "./commoncomp.css";
export  const CalendarComp = (props)=>{
    const {data,onChange,compdata} = props;
    return (

    <Container style={{fontFamily:"serif",fontWeight:"bold"}}>
    <Row>

    <Col lg="6" sm="12" xs="12" md="6" className="calendar-textbox" >
    <div style={{display:"flex",justifyContent:"space-around"}} >
      <div 
      className="cal-textdiv"
      
      >
        <div style={{margin:"2px"}}>
        {data.icon}
            </div>
        {data.label}
      </div>
      <input
        type="date"
        className="cal-input"
        value={compdata[data.id]}
        name={data.id}
        onChange={(e) => onChange(e)}
        placeholder="Select date"
        />
      </div>
    </Col>
        </Row>
        </Container>
    )
}