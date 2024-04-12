import ImageSlider from "../../components/common/carousel";
import { useLocation, useNavigate } from "react-router-dom";
import "./selectedCar.css";
import { useState } from "react";
import DataModel from "../../components/common/model";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCarSide } from "react-icons/fa";
import { BsCash, BsFuelPump } from "react-icons/bs";
import { GiCarKey } from "react-icons/gi";
import {useSelector} from "react-redux"
import { usercarselector } from "../../redux/slice/userslice";

export const ImageGallery = ({ imageData, onChange }) => {
  return (
    <div className="image-gallery">
      {imageData.map((image, index) => (
        <img
          key={index}
          src={image}
          onClick={() => onChange(index)}
          // alt={image.alt}
          className="image-with-border"
        />
      ))}
    </div>
  );
};

const SelectedCar = () => {
  const [showmodel, setShowmodel] = useState(false);
  const [imgdata, setImgdata] = useState("");
  const {cardetails}  = useSelector(usercarselector)
   const location = useLocation();
  const navigate = useNavigate();
  let { name, rate, type,image } = cardetails;
  let img = location.state?.img;

  const handlegetcar = () => {
    setShowmodel(true);
  };

  useEffect(() => {
    setImgdata(img[0]);
  }, [location.state]);

  const changeImage = (val) => {
    setImgdata(img[val]);
  };

  const handleMode = (mode) => {
    if (mode === "pick") {
      navigate("/bookcar",{state:{defaultTab:"date"}});
    } else {
      navigate("/bookcar",{state:{defaultTab:"map"}});
    }
  };
  console.log("cardetails",cardetails);
  return (
    <Container>
      <Row>
        {/* <ImageSlider /> */}
        <Col xl="6" sm="12" md="12" xs="12" className="img-info-selected">
          <div className="imgcontainer-selected">
            <img
              src={image}
              style={{
                maxWidth: "100%",
                width: "400px",
                height: "200px",
                objectFit: "contain",
              }}
            ></img>
          </div>
          <ImageGallery imageData={img} onChange={changeImage} />
        </Col>
        <Col xl="6" sm="12" md="12" xs="12" className="selectedinfocontainer">
          <Row>

          
          <div className="infochild">
            <div>
              <FaCarSide />
            </div>
            <span>Name:</span>
            <p>{name}</p>
          </div>
          <div className="infochild">
            <div>
              <BsFuelPump />
            </div>

            <span>Type:</span>
            <p>{type}</p>
          </div>
          <div className="infochild">
            <div>
              <BsCash />
            </div>
            <span>Rate:</span>
            <p>{rate}/hour</p>
          </div>
          <div className="infochild">
            <div>
              <GiCarKey />
            </div>
            <span>Model:</span>
            <p>{rate}</p>
          </div>
          <div className="infochild">
            <div>
              <FaCarSide />
            </div>
            <span>Seater count: </span>
            <p>5</p>
          </div>
          </Row>
          <button className="infogetbtn" onClick={handlegetcar}>
            Continue Reseving Car
          </button>
          <DataModel
            show={showmodel}
            onChoose={handleMode}
            onHide={() => setShowmodel(false)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SelectedCar;
