import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import c1 from "../assets/p11.png";
import c2 from "../assets/p2.png";
import c3 from "../assets/p3.png";
import Cards from "./common/card";

const Manage = () => {
  return (
    <>
      {/* <Navbar/> */}
      {/* <Sidebar/> */}
      <div className='manage-container'>

     <div className='manage-box'>

      <div className='manage'>
      <img src={c1} alt='skoda superb' className='mc1'/>
        <p className='manage-head'>Skoda Superb</p>
        <p className='manage-content1'>Hybrid</p>
        <p className='manage-content2'> <strong className='rs'>Rs 499</strong>/Hour</p>
        <p className='manage-content3'><RiVerifiedBadgeFill /><span className='verified'>Verified</span> </p>
      </div>
   
      <div className='manage'>
      <img src={c2} alt='Suziki Swift' className='mc1'/>
        <p className='manage-head'>Suziki Swift</p>
        <p className='manage-content1'>Hybrid</p>
        <p className='manage-content2'> <strong className='rs'>Rs 299</strong>/Hour</p>
        <p className='manage-content3'><RiVerifiedBadgeFill /><span className='verified'>Verified</span> </p>
      </div>

      <div className='manage'>
      <img src={c3} alt='Tata Punch' className='mc1'/>
        <p className='manage-head'>Tata Punch</p>
        <p className='manage-content1'>Hybrid</p>
        <p className='manage-content2'> <strong className='rs'>Rs 399</strong>/Hour</p>
        <p className='manage-content3'><RiVerifiedBadgeFill /><span className='verified'>Verified</span> </p>
      </div>
      

      <div className='manage'>
      <img src={c1} alt='skoda superb' className='mc1'/>
        <p className='manage-head'>Skoda Superb</p>
        <p className='manage-content1'>Hybrid</p>
        <p className='manage-content2'> <strong className='rs'>Rs 499</strong>/Hour</p>
        <p className='manage-content3'><RiVerifiedBadgeFill /><span className='verified'>Verified</span> </p>
      </div>
   
      <div className='manage'>
      <img src={c2} alt='Suziki Swift' className='mc1'/>
        <p className='manage-head'>Suziki Swift</p>
        <p className='manage-content1'>Hybrid</p>
        <p className='manage-content2'> <strong className='rs'>Rs 299</strong>/Hour</p>
        <p className='manage-content3'><RiVerifiedBadgeFill /><span className='verified'>Verified</span> </p>
      </div>

      <div className='manage'>
      <img src={c3} alt='Tata Punch' className='mc1'/>
        <p className='manage-head'>Tata Punch</p>
        <p className='manage-content1'>Hybrid</p>
        <p className='manage-content2'> <strong className='rs'>Rs 399</strong>/Hour</p>
        <p className='manage-content3'><RiVerifiedBadgeFill /><span className='verified'>Verified</span> </p>
      </div>
      </div>

    </div>
    <div className='addcar'>ADD</div>
      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "15px",
        }}
      >
        {Array.from("Rakesh").map(() => {
          return <Cards />;
        })}
      </div> */}
    </>
  );
};

export default Manage;
