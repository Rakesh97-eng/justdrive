// import "./commoncomp.css";
// import c3 from "../../assets/p1.png"
// import img from "../../assets/bmw.png";
// import Card from "react-bootstrap/Card";
// import { RiVerifiedBadgeFill } from "react-icons/ri";

// const Cards = (props) => {
//     const {data} = props
//   return (
//     <>
//       <div className="card-container">
//           <img src={data.image} alt="Tata Punch" className="mc1"  />
//           <p className="">{data.name}</p>
//           <p className="">{data.type}</p> 
//           <div className="details-card" >
//             <span>
//             Details <br></br>
//             <strong >{data.rate}</strong>
//           </span>
//           <p style={{color:data.isAvailable?"blue":"red"}}>
            
//             <span >Available</span>{" "}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cards;

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./commoncomp.css"
function Cards({data,onSelect}) {
    const {image,name,rate,isAvailable,type} = data;

    const handleClick = (details)=>{
      onSelect(details)
    }
  return (
    <Card  className='card-container' onClick={()=>handleClick(data)}>
      <Card.Img variant="top" src={image} className='card-image' />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <p>{type}</p>
        <div className='details-card'>
            <p  >Details:<span style={{fontWeight:'bold',margin:0,}}>{rate}</span>/hour</p>
            <p className='availableText' style={{color:isAvailable?"blue":"red"}}>Available</p>
        </div>
       
      </Card.Body>
    </Card>
  );
}

export default Cards;