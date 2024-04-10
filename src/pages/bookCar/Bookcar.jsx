import { Col, Container, Row } from "react-bootstrap"
// import ChooseArea from "../../components/choosearea/ChooseArea"
import ChooseDate from "../../components/datePicker/DatePicker"

const BookCar = ()=>{
    return (
        <>
            <h2>Book Car</h2>
            <Container>
                <Row>
                    <Col>
                    <div>
                        MAp Part
                    </div>
                        {/* <ChooseArea/> */}
                    </Col>
                    <Col>
                        <ChooseDate/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default BookCar