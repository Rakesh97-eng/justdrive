import React from 'react';
import { MdDashboard } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
import { MdFactCheck } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (<>
    <div className='sidebar-container'>

      <div className='sidebar-content'>

        <NavLink className="link" to ="/dashboard">
          <p className='sidebar-content1'>
            <MdDashboard className='icon1' />
            <span>DASHBOARD</span>
          </p>
      </NavLink >
      
      <NavLink className="link"  to ="/approval">
            <p className='sidebar-content2'>
              <ImCheckboxChecked className='icon2' />
              <span>APPROVAL</span>
              </p>
      </NavLink>
      <NavLink className="link" to ="/manage">
      <p className='sidebar-content3'> 
      <MdFactCheck className='icon3'/>
      <span>MANAGE</span>
      </p>
      </NavLink>
      </div>
      
    </div>
    </> )
}

export default Sidebar