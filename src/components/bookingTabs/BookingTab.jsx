import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useLocation } from 'react-router-dom';
import "./BookingTab.css"
function BookingTab({chooseData}) {
    let location = useLocation();
    let {defaultTab} = location?.state;
  return (
    <Tabs
      defaultActiveKey={defaultTab}
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="map" title="Location"  className='bookingtab'>
        Tab content for Map
      </Tab>
      <Tab eventKey="date" title="Date" className='bookingtab'>
       {chooseData}
      </Tab>
      <Tab eventKey="payment" title="Payment" className='bookingtab'>
        Tab content for Payment
      </Tab>
    </Tabs>
  );
}

export default BookingTab;