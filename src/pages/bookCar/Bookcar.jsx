import { Col, Container, Row } from "react-bootstrap"
import BookingTab from "../../components/bookingTabs/BookingTab"
import ChooseArea from "../../components/choosearea/ChooseArea"
import ChooseDate from "../../components/datePicker/DatePicker"

const BookCar = ()=>{
    return (
        <>
            <h2>Book Car</h2>
            <Container>
                <Row>
                    {/* <Col>
                        <ChooseArea/>
                    </Col>
                    <Col>
                        <ChooseDate/>
                    </Col> */}
                 
                    <BookingTab chooseData={<ChooseDate />} />
                    
                </Row>
            </Container>
        </>
    )
}
export default BookCar