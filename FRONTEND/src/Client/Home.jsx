// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './Home.css';
// const ServicePage = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3003/anotherdata");
//         setServices(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="card-service">
//       {services.map((val, id) => (
//         <div className="card" key={id}>
//           <img className="card-img" src={val.url} alt={val.serviceName} />
//           <h3>{val.serviceName}</h3>
//           <h3>{"₹" + val.servicePrice}</h3>
//           <a className="book-button">Book now</a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ServicePage;
//use state 
// loggedinuser1+
//
import React, { useState, useEffect } from "react";
import axios from "axios";
import './Home.css';

const ServicePage = ({ loggedInUser , customerdetails}) => {
  const [services, setServices] = useState([]);
  const [addData,setAddData]=useState({customerdetails});
  // delete addData._id;
  // for( let a of addData)
  //   console.log(addData[a]);
console.log(customerdetails);
console.log(loggedInUser);
// loggedInUser.email="g@gmail.com"
// loggedInUser.mobile="2222222222"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3003/anotherdata");
        setServices(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // const handleBookService = async (serviceId) => {
  //   // if (!loggedInUser) {
  //   //   alert("Please log in first");
  //   //   return;
  //   // }
  //   try {
  //     const response = await axios.post("http://localhost:3003/bookservice", {
  //       // email: loggedInUser.email,
  //       // mobile: loggedInUser.mobile,
  //       serviceId,
  //     });
  //     console.log("Service booked successfully:", response.data);
  //   } catch (error) {
  //     console.error("Service booking error:", error.response.data);
  //   }
  // };
  // id
  // 669809ad81426e52dc58a1e1
  // vehiclenum"TN01AA1111"
  // vehiclemodel "MAX100"
  // customername"Sudarsun"
  // mobile"2222222222"
  // email "g@gmail.com"
  // status "Pending"
  // __v 0
  // amount "2500"
  // complaint "Tyre Change"
  // date "01/03/2024"
  //------------
  
// vehiclenum"TN28J4144"
// vehiclemodel"Splendor"
// customername"Loki"
// mobile"8526768318"
// email"1@gmail.com"
// status"Pending"
//__v 0
const handleBookService = async (serviceId) => {
  // if (!loggedInUser) {
  //   alert("Please log in first");
  //   return;
  // }

  try {
    const response = await axios.post("http://localhost:3003/bookservice", {
      email: 'edgwhjk@gmail.com',
      mobile: '1234567888',
      serviceId,
    });
    console.log("Service booked successfully:", response.data);
  } catch (error) {
    console.error("Service booking error:", error.response.data);
  }
};
//  const handleBookService=(id)=>{
//    const {serviceName,servicePrice,...an}=id;
//    console.log(serviceName);

//  }
  return (
    <div className="card-service">
      {services.map((val, id) => (
        <div className="card" key={id}>
          <img className="card-img" src={val.url} alt={val.serviceName} />
          <h3>{val.serviceName}</h3>
          <h3>{"₹" + val.servicePrice}</h3>
          <button className="book-button" onClick={() => handleBookService(val)}>Book now</button>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;





