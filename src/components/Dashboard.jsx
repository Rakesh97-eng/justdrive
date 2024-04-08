import React from 'react';
import './style.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


const Dashboard = () => {
  return (<>
    {/* <Navbar/>
    <Sidebar/> */}
    <div className='dash-container'>
      <div className="dash-box">
      <div className='total'>
        <p className='head'>Total cars</p>
        <p className='count'><strong className='count11'>20</strong> cars</p>
      </div>
      <div className='available'>
      <p className='head2'>Available</p>
        <p className='count2'><strong className='count12'>18</strong><span className='car1'>cars</span> </p>
      </div>
      <div className='transit'>
      <p className='head3'>On Transit</p>
        <p className='count3'><strong className='count13'>2</strong><span className='car2'>cars</span></p>
      </div>
      </div>
    </div>
    </>)
}

export default Dashboard