import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useLocation } from "react-router-dom";
import { BreadCrumbData } from "../../utils/cardata";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




// export const BasicBreadCrumbs = ({crumbdata})=>{
//     const location = useLocation();
//     let currentpath = location.pathname
//     return (
//         <Breadcrumb>
//             {crumbdata.map((data,index)=>{{
//                 const {title,path} = data;
//                 const activepath = path === currentpath;
//                 return  <Breadcrumb.Item href={path}>{title}</Breadcrumb.Item>
//             }})}
//       </Breadcrumb>
//     );
    
// }


export function BasicBreadCrumbs() {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
    console.log("locationon",location);
  useEffect(() => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    let previous = breadcrumbs.filter((val)=>val.name === pathnames[0]);
    if(previous.length === 0) {

        const newBreadcrumbs = pathnames.map((path, index) => ({
          name: path,
          path: `/${pathnames.slice(0, index + 1).join('/')}`,
        }));
        setBreadcrumbs([...breadcrumbs,...newBreadcrumbs]);
    }
  }, [location]);

  return (
    <nav aria-label="Breadcrumb">
      
          <Breadcrumb style={{fontFamily:"serif",fontWeight:"600",color:"#0d7bcf "}}>
        {breadcrumbs.map((breadcrumb, index) => (
            index === breadcrumbs.length - 1 ? (
            //   <span>{breadcrumb.name}</span>
                <Breadcrumb.Item href={breadcrumb.path}>{breadcrumb.name}</Breadcrumb.Item>
            ) : (
                <Breadcrumb.Item href={breadcrumb.path}>{breadcrumb.name}</Breadcrumb.Item>
            )
            ))}
            </Breadcrumb>
      
    </nav>
  );
}




const AllCarsHeader = ()=>{
    return (
        <>
        <Container>
        <Row>
            <Col> 
                <BasicBreadCrumbs crumbdata={BreadCrumbData}/>
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default AllCarsHeader