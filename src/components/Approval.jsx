import React from 'react';
import {useState} from "react"
import './style.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoIosInformationCircle } from "react-icons/io";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { TfiAngleDoubleLeft } from "react-icons/tfi";
// import image1 from "../approvecars/maruthi/m1.png";
// import image2 from "../approvecars/maruthi/m2.png";
// import image3 from "../approvecars/maruthi/m3.png";
// import image4 from "../approvecars/maruthi/m4.png";



const Approval = ({Acars}) => {

  // const [imageIndex, setImageIndex] = useState(0);

  // // const images = [image1,image2,image3,image4];

  // const handlePrevClick = () => {
  //   setImageIndex(prevIndex => (prevIndex === 0 ? Acar.length - 1 : prevIndex - 1));
  // };

  // const handleNextClick = () => {
  //   setImageIndex(prevIndex => (prevIndex === Acar.length - 1 ? 0 : prevIndex + 1));
  // };
  console.log(Acars)

  return (<>
    {/* <Navbar/>
    <Sidebar/> */}
    
    <div className='approve-container'>


     <div className='approve-box'>

     {Acars?.map(car => (

          <div key={car.id} className='approve'>
                  
                {/* <div className='image-box'>
                  <img className="image"src={car.image}  />
                </div> */}

                {/* <div className='buttons'>
                <TfiAngleDoubleLeft className="button1" onClick={handlePrevClick}/>
                <TfiAngleDoubleRight   className="button2" onClick={handleNextClick}/>
                </div> */}

                <p className='approve-head'>{car.name}</p>

                <p className='approve-hybrid'>{car.type}</p>

                <p className='approve-cost'> 
                <strong className='rs'>{car.cost}</strong> /{car.time}</p>

                <p className='approve-verified'>
                <span className='doc'>{car.document}</span> 
                <RiVerifiedBadgeFill  className="docverify" />
                </p>
                
                <div className='approve-payment'>
                <p >{car.payment}</p>
                <IoIosInformationCircle className='verify1' />
                </div>

                <div className='approve-aadhar'>
                <p >{car.aadhar}</p>
                <IoIosInformationCircle className='verify2' />
                </div>
                <p className='approve-button'>{car.approval}</p>
            </div>
     ))}



{/* 
            
          <div className='approve'>
                  
                  <div className='image-box'>
                    <img className="image"src={images[imageIndex]} alt={`Image ${imageIndex + 1}`} />
                  </div>
  
                  <div className='buttons'>
                  <TfiAngleDoubleLeft className="button1" onClick={handlePrevClick}/>
                  <TfiAngleDoubleRight   className="button2" onClick={handleNextClick}/>
                  </div>
  
                  <p className='approve-head'>Skoda Superb</p>
  
                  <p className='approve-hybrid'>Hybrid</p>
  
                  <p className='approve-cost'> 
                  <strong className='rs'>Rs 499</strong> /hour</p>
  
                  <p className='approve-verified'>
                  <span className='doc'>Automotive Documents Verified</span> 
                  <RiVerifiedBadgeFill  className="docverify" />
                  </p>
                  
                  <div className='approve-payment'>
                  <p >Payment Completed</p>
                  <IoIosInformationCircle className='verify1' />
                  </div>
  
                  <div className='approve-aadhar'>
                  <p >Addhar Verified </p>
                  <IoIosInformationCircle className='verify2' />
                  </div>
                  <p className='approve-button'>Approved</p>
              </div> */}


      </div>
      </div>

   
    </>)
}

export default Approval;