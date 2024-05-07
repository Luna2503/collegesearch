// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { Context } from "../../index";
// const PostCourse = () => {
//   const [name, setName] = useState("");
//   const [college, setCollege] = useState("");
//   const [location, setLocation] = useState("");
//   const [university, setUniversity] = useState("");
//   const [duration,setDuration]=useState("");
//   const [eligibility,setEligibility]=useState("");
//   const [feeFrom, setfeeFrom] = useState("");
//   const [feeTo, setfeeTo] = useState("");
//   const [Fixedfee, setFixedfee] = useState("");
//   const [feeType, setFeeType] = useState("default");

//   const { isAuthorized, user } = useContext(Context);

//   const handleCoursePost = async (e) => {
//     e.preventDefault();
//     if (feeType === "Fixed Fee") {
//       setfeeFrom("");
//       setfeeFrom("");
//     } else if (feeType === "Ranged Salary") {
//       setFixedfee("");
//     } else {
//       setfeeFrom("");
//       setfeeTo("");
//       setFixedfee("");
//     }
//     await axios
//       .post(
//         "http://localhost:4000/api/v1/job/post",
//         Fixedfee.length >= 4
//           ? {
//               name,
//               college,
//               location,
//               university,
//               duration,
//               eligibility,
//               Fixedfee,
//             }
//           : {
//             name,
//             college,
//             location,
//             university,
//             duration,
//             eligibility,
//             Fixedfee,
//               feeFrom,
//               feeTo,
//             },
//         {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((res) => {
//         toast.success(res.data.message);
//       })
//       .catch((err) => {
//         toast.error(err.response.data.message);
//       });
//   };

//   const navigateTo = useNavigate();
//   if (!isAuthorized || (user && user.role !== "College")) {
//     navigateTo("/");
//   }

//   return (
//     <>
//       <div className="course_post page">
//         <div className="container">
//           <h3>POST NEW COURSE</h3>
//           <form onSubmit={handleCoursePost}>
//             <div className="wrapper">
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="COURSE NAME"
//               />
//               <select
//                 value={college}
//                 onChange={(e) => setCollege(e.target.value)}
//               >
//                 <option value="">Select Category</option>
//                 <option value="Graphics & Design">Graphics & Design</option>
//                 <option value="Mobile App Development">
//                   Mobile App Development
//                 </option>
//                 <option value="Frontend Web Development">
//                   Frontend Web Development
//                 </option>
//                 <option value="MERN Stack Development">
//                   MERN STACK Development
//                 </option>
//                 <option value="Account & Finance">Account & Finance</option>
//                 <option value="Artificial Intelligence">
//                   Artificial Intelligence
//                 </option>
//                 <option value="Video Animation">Video Animation</option>
              
//               </select>
//             </div>
//             <div className="wrapper">
//               <input
//                 type="text"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 placeholder="Location"
//               />
//               <input
//                 type="text"
//                 value={university}
//                 onChange={(e) => setUniversity(e.target.value)}
//                 placeholder="University"
//               />
//             </div>
//             <input
//               type="text"
//               value={duration}
//               onChange={(e) => setDuration(e.target.value)}
//               placeholder="Duration"
//             />
//             <input
//               type="text"
//               value={eligibility}
//               onChange={(e) => setEligibility(e.target.value)}
//               placeholder="Eligibility"
//             />
//             <div className="fee_wrapper">
//               <select
//                 value={feeType}
//                 onChange={(e) => setFeeType(e.target.value)}
//               >
//                 <option value="default">Select Salary Type</option>
//                 <option value="Fixed Fee">Fixed Salary</option>
//                 <option value="Ranged Fee">Ranged Salary</option>
//               </select>
//               <div>
//                 {feeType === "default" ? (
//                   <p>Please provide Salary Type *</p>
//                 ) : feeType === "Fixed Salary" ? (
//                   <input
//                     type="text"
//                     placeholder="Enter Fixed Salary"
//                     value={Fixedfee}
//                     onChange={(e) => setFixedfee(e.target.value)}
//                   />
//                 ) : (
//                   <div className="ranged_fee">
//                     <input
//                       type="text"
//                       placeholder="Fee From"
//                       value={feeFrom}
//                       onChange={(e) => setfeeFrom(e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Fee To"
//                       value={feeTo}
//                       onChange={(e) => setfeeTo(e.target.value)}
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
            
//             <button type="submit">Create Course</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };


// export default PostCourse

import React, { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../index";

const PostCourse = () => {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [location, setLocation] = useState("");
  const [university, setUniversity] = useState("");
  const [duration, setDuration] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [feeFrom, setFeeFrom] = useState("");
  const [feeTo, setFeeTo] = useState("");
  const [fixedFee, setFixedFee] = useState("");
  const [feeType, setFeeType] = useState("default");
  const { isAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleCoursePost = async (e) => {
    e.preventDefault();
    
    try {
      let postData = {
        name,
        college,
        location,
        university,
        duration,
        eligibility,
      };

      if (feeType === "Fixed Fee") {
        postData.fixedFee = fixedFee;
      } else if (feeType === "Ranged Fee") {
        postData.feeFrom = feeFrom;
        postData.feeTo = feeTo;
      }

      await axios.post(
        "http://localhost:4000/api/v1/clg/post",
        postData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Course posted successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to post course");
    }
  };

  if (!isAuthorized || (user && user.role !== "College")) {
    navigateTo("/");
  }

  return (
    <div className="job_post page">
      <div className="container">
        <h3>POST NEW COURSE</h3>
        <form onSubmit={handleCoursePost}>
         
          <div className="wrapper">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Course"
            />
                    
          </div>
          <div className="wrapper">
            <input
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              placeholder="College"
            />
           
          </div>
          <div className="wrapper">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />
            <input
              type="text"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              placeholder="University"
            />
 </div>
          <div className="wrapper">          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration"
          />
          <input
            type="text"
            value={eligibility}
            onChange={(e) => setEligibility(e.target.value)}
            placeholder="Eligibility"
          />
          </div>
          <div className="fee_wrapper">
            <select
              value={feeType}
              onChange={(e) => setFeeType(e.target.value)}
            >
              <option value="default">Select Fee Type</option>
              <option value="Fixed Fee">Fixed Fee</option>
              <option value="Ranged Fee">Ranged Fee</option>
            </select>
            { feeType === "Fixed Fee" ? (
              <input
                type="text"
                placeholder="Enter Fixed Fee"
                value={fixedFee}
                onChange={(e) => setFixedFee(e.target.value)}
              />
            ) : feeType === "Ranged Fee" ? (
              <div className="ranged_fee">
                <input
                  type="text"
                  placeholder="Fee From"
                  value={feeFrom}
                  onChange={(e) => setFeeFrom(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Fee To"
                  value={feeTo}
                  onChange={(e) => setFeeTo(e.target.value)}
                />
              </div>
            ) : null}
          </div>
          <button  type="submit">Create Course</button>
        </form>
      </div>
    </div>
  );
};

export default PostCourse;
