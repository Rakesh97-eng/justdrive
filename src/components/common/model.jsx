import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MdNotListedLocation } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import "./commoncomp.css";

const DataModel = (props) => {
  const { onChoose, onHide } = props;
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose Mode
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modaldiv">
          <Button onClick={() => onChoose("pick")} className="modalbtn" style={{background:"white",color:"blue"}}>
            <FaCarAlt style={{ fontSize: "larger" }} />
            <span>Self Pick Up</span>
          </Button>
          <Button onClick={() => onChoose("Deliver")} className="modalbtn">
            <MdNotListedLocation  style={{ fontSize: "larger" }} />
            <span>Deliver To Address</span>
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DataModel;
