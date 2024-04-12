import moment from "moment/moment";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./DatePicker.css";
import { CalendarData } from "../../utils/cardata";
import { CalendarComp } from "../common/calendarcomp";
const ChooseDate = () => {
  const [selectedDate, setSelectedDate] = useState({
    startDate: "",
    endDate: "",
  });
  const changedate = (event) => {
    const { name, value } = event.target;
    console.log("nameee", name);
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
     
       
      {CalendarData.map((data)=>{
        return <CalendarComp data={data} compdata={selectedDate} onChange={changedate}/>
      })}
    </>
  );
};

export default ChooseDate;
