

// import axios from "axios";
// import React, { useContext, useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate, useParams } from "react-router-dom";
// import { Context } from "../../index";


// const Application = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [marklist, setMarklist] = useState(null);
//   const { isAuthorized, user } = useContext(Context);
//   const navigateTo = useNavigate();


//   const handleFileChange = (event) => {
//     const marklist = event.target.files[0];
//     setMarklist(marklist);
//   };
//   const { id } = useParams();
//   const handleApplication = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("email", email);
//       formData.append("phone", phone);
//       formData.append("address", address);
//       formData.append("marklist", marklist);
//       formData.append("courseId", id);

//       const { data } = await axios.post(
//         "http://localhost:4000/api/v1/application/post",
//         formData,
//         {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setName("");
//       setEmail("");
//       setPhone("");
//       setAddress("");
//       setMarklist("");

//       toast.success(data.message);
//       navigateTo("/application/getall");
//     } catch (error) {
//       toast.error(error.response.data.message );
//     }
//   };

//   if (!isAuthorized || (user && user.role === "College")) {
//     navigateTo("/");
//     return null; // Return null to prevent rendering anything if redirecting
//   }

//   return (
//     <section className="application">
//       <div className="container">
//         <h3>Application Form</h3>
//         <form onSubmit={handleApplication}>
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Your Phone Number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Your Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//           <div>
//             <label>Select Marklist</label>
//             <input
//               type="file"
//               accept=".pdf, .jpg, .png"
//               onChange={handleFileChange}
//             />
//           </div>
//           <button type="submit">Send Application</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Application;

import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Context } from "../../index";
import axios from "axios";

const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [qualification, setQualification] = useState("");
  const [percentage, setPercentage] = useState("");
  const [marklist, setMarklist] = useState(null);
  const { isAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  // const { courseName, collegeName } = state || {};
  const { courseName, collegeName } = useParams();


console.log("collegeName",collegeName);
// console.log("name,",name);
  const handleFileChange = (event) => {
    const marklist = event.target.files[0];
    setMarklist(marklist);
  };

  const handleApplication = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("location", location);
      formData.append("collegeName",collegeName);
      formData.append("courseName",courseName);
      formData.append("qualification",qualification);
      formData.append("percentage",percentage);
      formData.append("marklist", marklist);
      formData.append("courseId", id);


      const { data } = await axios.post(
        "http://localhost:4000/api/v1/application/post",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setName("");
      setEmail("");
      setPhone("");
      setLocation("");
      setMarklist("");
      setQualification("");
      setPercentage("");

      toast.success(data.message);
      navigateTo("/my-applications");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthorized || (user && user.role === "College")) {
    navigateTo("/");
    return null; // Return null to prevent rendering anything if redirecting
  }

  return (
    <section className="application">
      <div className="container">
        <h3>Application Form</h3>
        <p>Course: {courseName}</p>
        <p>College: {collegeName}</p>
        <form onSubmit={handleApplication}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          /><input
          type="text"
          placeholder="Percentage"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />
          <div>
            <label>Select Marklist</label>
            <input
              type="file"
              accept=".pdf, .jpg, .png"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit">Send Application</button>
        </form>
      </div>
    </section>
  );
};

export default Application;
