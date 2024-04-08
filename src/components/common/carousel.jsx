import { useEffect, useState } from "react";
import a1 from "../../assets/p1.png"
import a2 from "../../assets/p2.png"

const slideStyles = {
  width: "100%",
  height: "150px",
  borderRadius: "10px",
  backgroundSize: "contain",
  backgroundPosition: "center",
  objectFit:"cover",
  backgroundRepeat:"no-repeat",

};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides=[a1,a2,a1,a1] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    let interval = setInterval(()=>{
            if(currentIndex >= slides.length-1){
                setCurrentIndex(0)  
            }
            else{
                setCurrentIndex(prev=>prev+1)
            }
        },2000)

        return ()=>{
            clearInterval(interval)
        }

  },[currentIndex])
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex]})`,
  };

  return (
    <div  style={sliderStyles}>
      <div style={{width:"50%"}}>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;