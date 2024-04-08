import ImageSlider from "../../components/common/carousel";
import { useLocation,useNavigate } from "react-router-dom";
import "./selectedCar.css";
import { useState } from "react";
import DataModel from "../../components/common/model";
const SelectedCar = () => {
    const [showmodel,setShowmodel] = useState(false)
  const location = useLocation();
  const navigate =useNavigate();
  let { name, rate, type } = location.state?.id;

  const handlegetcar = ()=>{
    setShowmodel(true)
  }

  const handleMode = (mode)=>{
    if(mode === "pick"){
        navigate('/')
    }
    else{
        navigate('/')
    }
  }
  return (
    <>
      <ImageSlider />
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
