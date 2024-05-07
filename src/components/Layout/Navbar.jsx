// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../../index";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const { isAuthorized, setIsAuthorized, user } = useContext(Context);
//   const navigateTo = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:4000/api/v1/user/logout",
//         {
//           withCredentials: true,
//         }
//       );
//       toast.success(response.data.message);
//       setIsAuthorized(false);
//       navigateTo("/login");
//     } catch (error) {
//       toast.error(error.response.data.message), setIsAuthorized(true);
//     }
//   };

//   return (
//     <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
//       <div className="container">
//         <div className="logo">
//           <img src="/JobZee-logos__white.png" alt="logo" />
//         </div>
//         <ul className={!show ? "menu" : "show-menu menu"}>
//           <li>
//             <Link to={"/"} onClick={() => setShow(false)}>
//               HOME
//             </Link>
//           </li>
//           <li>
//             <Link to={"/job/getall"} onClick={() => setShow(false)}>
//               ALL JOBS
//             </Link>
//           </li>
//           <li>
//             <Link to={"/applications/me"} onClick={() => setShow(false)}>
//               {user && user.role === "Employer"
//                 ? "APPLICANT'S APPLICATIONS"
//                 : "MY APPLICATIONS"}
//             </Link>
//           </li>
//           {user && user.role === "Employer" ? (
//             <>
//               <li>
//                 <Link to={"/job/post"} onClick={() => setShow(false)}>
//                   POST NEW JOB
//                 </Link>
//               </li>
//               <li>
//                 <Link to={"/job/me"} onClick={() => setShow(false)}>
//                   VIEW YOUR JOBS
//                 </Link>
//               </li>
//             </>
//           ) : (
//             <></>
//           )}

//           <button onClick={handleLogout}>LOGOUT</button>
//         </ul>
//         <div className="hamburger">
//           <GiHamburgerMenu onClick={() => setShow(!show)} />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useContext, useState } from "react";
import { Context } from "../../index";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
      // setIsAuthorized(true); // Uncomment this line if you need to set isAuthorized to true upon error
    }
  };

  const handlePayment=async()=>{
    navigateTo("/payment")
  };

  return (
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
      <div className="container mt-2">
         <div className="mt-3">
         <h6 style={{fontFamily:"Grand Hotel",color:"white"}}>College Search <i class="fa-solid fa-magnifying-glass"></i></h6>
         </div>
         <ul className={!show ? "menu" : "show-menu menu"}>
           <li>
             <Link to={"/home"} onClick={() => setShow(false)}>
               HOME
             </Link>           </li>
           <li>
             <Link to={"/courses"} onClick={() => setShow(false)}>
               ALL COURSES
        </Link>           </li>
          <li>             <Link to={"/my-applications"} onClick={() => setShow(false)}>
               {user && user.role === "College"
                ? "APPLICANT'S APPLICATIONS"
                : "MY APPLICATIONS"}
            </Link>
          </li>
          {user && user.role === "College" ? (
            <>
              <li>
                <Link to={"/courses/post"} onClick={() => setShow(false)}>
                  POST NEW COURSE
                </Link>
              </li>
              <li>
                <Link to={"/my-courses"} onClick={() => setShow(false)}>
                  VIEW YOUR COURSES
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}
          {/* <button className="m-2" onClick={handlePayment}>Payment</button> */}

          <button className="mt-2" onClick={handleLogout}>LOGOUT</button>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
