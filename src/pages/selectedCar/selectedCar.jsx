import ImageSlider from "../../components/common/carousel";
import { useLocation,useNavigate } from "react-router-dom";
import "./selectedCar.css";
import { useState } from "react";
import DataModel from "../../components/common/model";
import { useEffect } from "react";


export const ImageGallery = ({ imageData,onChange }) => {
  return (
    <div className="image-gallery">
      {imageData.map((image, index) => (
        <img
          key={index}
          src={image}
          onClick={()=>onChange(index)}
          // alt={image.alt}
          className="image-with-border"
        />
      ))}
    </div>
  );
};

// export const ImageGallery = ({ imageData, onChange }) => {
//   const [visibleImages, setVisibleImages] = useState([]);
//   const observer = useRef(null);

//   useEffect(() => {
//     observer.current = new IntersectionObserver(
//       (entries) => {
//         const images = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target);
//         setVisibleImages(images);
//       },
//       { rootMargin: '0px', threshold: 0.5 } // Adjust the threshold as needed
//     );

//     return () => {
//       if (observer.current) {
//         observer.current.disconnect();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const images = document.querySelectorAll('.image-item');

//     images.forEach((image) => {
//       observer.current.observe(image);
//     });

//     return () => {
//       images.forEach((image) => {
//         observer.current.unobserve(image);
//       });
//     };
//   }, [imageData]);

//   return (
//     <div className="image-gallery">
//       {imageData.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           onClick={() => onChange(index)}
//           className={`image-item ${visibleImages.includes(index) ? 'fade-in' : ''}`}
//           alt={`Image ${index}`}
//         />
//       ))}
//     </div>
//   );
// };

const SelectedCar = () => {
    const [showmodel,setShowmodel] = useState(false);
    const [imgdata,setImgdata] = useState("")
  const location = useLocation();
  const navigate =useNavigate();
  let { name, rate, type } = location.state?.id;
  let img = location.state?.img;
  console.log("locat",location.state?.img);

  const handlegetcar = ()=>{
    setShowmodel(true)
  }
  
  useEffect(()=>{
    setImgdata(img[0])
  },[location.state])

  const changeImage = (val)=>{
    setImgdata(img[val])
  }

  const handleMode = (mode)=>{
    if(mode === "pick"){
        navigate('/bookcar')
    }
    else{
        navigate('/bookcar')
    }

  }
  return (
    <>
    <div style={{display:"flex"}}>
      
      {/* <ImageSlider /> */}
      <div className="img-info-selected" >
        <div className="imgcontainer-selected">
        <img src={imgdata} height="400" width="400 " style={{objectFit:"contain"}}></img>
        </div>
        <ImageGallery imageData={img}  onChange={changeImage}/>
      </div>
      <div className="selectedinfocontainer">
        <div className="infochild">
          <span>Name:</span>
          <p>{name}</p>
        </div>
        <div className="infochild">
          <span>Type:</span>
          <p>{type}</p>
        </div>
        <div className="infochild">
          <span>Rate:</span>
          <p>{rate}/hour</p>
        </div>
        <div className="infochild">
          <span>Model:</span>
          <p>{rate}</p>
        </div>
        <div className="infochild">
          <span>Seater count: </span>
          <p>5</p>
        </div>
      </div>
    </div>
      <button className="infogetbtn" onClick={handlegetcar}>Get Car</button>
      <DataModel
        show={showmodel}
        onChoose={handleMode}
        onHide={() => setShowmodel(false)}
      />
    </>
  );
};

export default SelectedCar;
