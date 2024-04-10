import moment from "moment/moment";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./DatePicker.css";

import { FaCalendarAlt } from "react-icons/fa";
const ChooseDate = () => {
  const [selectedDate, setSelectedDate] = useState({
    startDate: "",
    endDate: "",
  });
  const changedate = (event) => {
    const { name, value } = event.target;
    if (name !== "startDate") {
      if (!moment(value).isAfter(selectedDate.startDate, "day")) {
        console.log("okkkk");
        setSelectedDate({ startDate: value, endDate: selectedDate.startDate });
      } else {
        setSelectedDate({ ...selectedDate, [name]: value });
      }
    } else {
      setSelectedDate({ ...selectedDate, [name]: value });
    }
  };
  return (
    <>
      {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
      <Container style={{fontFamily:"serif",fontWeight:"bold"}}>
        <Row>
          <Col className="calendar-textbox" >
          <div style={{display:"flex",justifyContent:"space-around"}} >
            <div 
            className="cal-textdiv"
            
            >
              <FaCalendarAlt fontSize="20" />
              PicK-Up :
            </div>
            <input
              type="date"
              className="cal-input"
              value={selectedDate.startDate}
              name="startDate"
              onChange={(e) => changedate(e)}
              placeholder="Select date"
            />
            </div>
          </Col>
          </Row>
          <Row>
          <Col className="calendar-textbox" >
          <div style={{display:"flex",justifyContent:"space-around"}} >
            <div 
            className="cal-textdiv"
            
            >
              <FaCalendarAlt fontSize="20" />
              Drop-of :
            </div>
            <input
              type="date"
              className="cal-input"
              value={selectedDate.endDate}
              name="endDate"
              onChange={(e) => changedate(e)}
              placeholder="Select date"
            />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChooseDate;
