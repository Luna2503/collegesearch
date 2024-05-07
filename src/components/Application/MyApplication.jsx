// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../../index";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import Marklist from "./Marklist";

// const MyApplications = () => {
//   const { user } = useContext(Context);
//   const [applications, setApplications] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [marklistImageUrl, setMarklistImageUrl] = useState("");

//   const { isAuthorized } = useContext(Context);
//   const navigateTo = useNavigate();

//   useEffect(() => {
//     try {
//       if (user && user.role === "College") {
//         axios
//           .get("http://localhost:4000/api/v1/application/college/getall", {
//             withCredentials: true,
//           })
//           .then((res) => {
//             setApplications(res.data.applications);
//             console.log(applications);
//           });
//       } else {
//         axios
//           .get("http://localhost:4000/api/v1/application/student/getall", {
//             withCredentials: true,
         
//           })
//           .then((res) => {
//             setApplications(res.data.applications);
//           });
          
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   }, [isAuthorized]);

//   if (!isAuthorized) {
//     navigateTo("/");
//   }


  


//   const deleteApplication = (id) => {
//     try {
//       axios
//         .delete(`http://localhost:4000/api/v1/application/delete/${id}`, {
//           withCredentials: true,
//         })
//         .then((res) => {
//           toast.success(res.data.message);
//           setApplications((prevApplication) =>
//             prevApplication.filter((application) => application._id !== id)
//           );
//         });
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   const openModal = (imageUrl) => {
//     setMarklistImageUrl(imageUrl);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <section className="my_applications page ">

      
//       {user && user.role === "Student" ? (
//         <div className="container">
//           <h1 className="text-center m-3">My Applications</h1>
//           {applications.length <= 0 ? (
//             <>
//               {" "}
//               <h4>No Applications Found</h4>{" "}
//             </>
//           ) : (
//             applications.map((element) => {
//               return (
//                 <StudentCard
//                   element={element}
//                   key={element._id}
//                   deleteApplication={deleteApplication}
//                   openModal={openModal}
//                 />
//               );
//             })
//           )}
//         </div>
//       ) : (
//         <div className="container">
//           <h1 className="text-center">Applications From Students</h1>
//           {applications.length <= 0 ? (
//             <>
//               <h4>No Applications Found</h4>
//             </>
//           ) : (
//             applications.map((element) => {
//               return (
//                 <CollegeCard
//                   element={element}
//                   key={element._id}
//                   openModal={openModal}
//                 />
//               );
//             })
//           )}
//         </div>
//       )}
//       {modalOpen && (
//         <Marklist imageUrl={marklistImageUrl} onClose={closeModal} />
//       )}
//     </section>
//   );
// };

// export default MyApplications;

// const StudentCard = ({ element, deleteApplication, openModal }) => {
//   return (
//     <>
//    <div className="row d-flex align-items-center justify-content-center"> 
//       <div className="col-xs-12 col-md-6 student_card  border border-danger ps-5 pe-5 pt-5">
//         <div className="detail">
//         <p>
//             <span>Course:</span> {element.courseName}
//           </p><p>
//             <span>College name:</span> {element.collegeName}
//           </p>
//           <p>
//             <span>Student name:</span> {element.name}
//           </p>
//           <p>
//             <span>Email:</span> {element.email}
//           </p>
//           <p>
//             <span>Phone:</span> {element.phone}
//           </p>
//           <p>
//             <span>Location:</span> {element.location}
//           </p>
//           <p>
//             <span>Qualification:</span> {element.qualification}
//           </p>
//           <p>
//             <span>Percentage:</span> {element.percentage}
//           </p>
    

//         </div>
//         <div className="marklist">
//           <img
//           height={"350px"}
//           width={"250px"}
//             src={element.marklist.url}
//             alt="marklist"
//             onClick={() => openModal(element.marklist.url)}
//           />
//         </div>
//         <div className="btn_area">
//           <button onClick={() => deleteApplication(element._id)}
//           className="mt-3 mb-5 btn btn-rounded btn-outline-danger">
//             Delete Application
//           </button>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// const CollegeCard = ({ element, openModal }) => {
//   return (
//     <>
//        <div className="row d-flex align-items-center justify-content-center"> 
//       <div className="student_card col-xs-12 col-md-6 student_card  border border-danger ps-5 pe-5 pt-5">
//         <div className="detail ">
//         <p>
//             <span>Student Name:</span> {element.name}
//           </p>
//           <p>
//             <span>Course:</span> {element.courseName}
//           </p>
//           <p>
//             <span>Email:</span> {element.email}
//           </p>
//           <p>
//             <span>Phone:</span> {element.phone}
//           </p>
//           <p>
//             <span>Location:</span> {element.location}
//           </p>
//           <p>
//             <span>Qualification:</span> {element.qualification}
//           </p>
//           <p>
//             <span>Percentage:</span> {element.percentage}
//           </p>
         
//         </div>
//         <div className="marklist mb-3">
//           <img
//           height={"350px"}
//           width={"250px"}
//             src={element.marklist.url}
//             alt="marklist"
//             onClick={() => openModal(element.marklist.url)}
//           />
          
//         </div>
//         <div className="btn_area">
//             {/* {element.status === "pending" && (
//               <div>
//                 <button
//                   onClick={() =>
//                     updateApplicationStatus(element._id, "accepted")
//                   }
//                   className="btn btn-success"
//                 >
//                   Accept Application
//                 </button>
//                 <button
//                   onClick={() =>
//                     updateApplicationStatus(element._id, "rejected")
//                   }
//                   className="btn btn-danger ms-2"
//                 >
//                   Reject Application
//                 </button>
//               </div>
//             )} */}
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };





// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../../index";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import Marklist from "./Marklist";

// const MyApplications = () => {
//   const { user } = useContext(Context);
//   const [applications, setApplications] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [marklistImageUrl, setMarklistImageUrl] = useState("");

//   const { isAuthorized } = useContext(Context);
//   const navigateTo = useNavigate();

//   useEffect(() => {
//     try {
//       if (user && user.role === "College") {
//         axios
//           .get("http://localhost:4000/api/v1/application/college/getall", {
//             withCredentials: true,
//           })
//           .then((res) => {
//             setApplications(res.data.applications);
//             console.log(applications);
//             console.log("");
//           });
//       } else {
//         axios
//           .get("http://localhost:4000/api/v1/application/student/getall", {
//             withCredentials: true,
//           })
//           .then((res) => {
//             setApplications(res.data.applications);
//           });
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }

//   }, [isAuthorized]);


//   const updateApplicationStatus = (id, status) => {
//     try {
//       axios
//         .put(
//           `http://localhost:4000/api/v1/application/update/${id}`,
//           { status },
//           {
//             withCredentials: true,
//           }
//         )
//         .then((res) => {
//           toast.success(res.data.message);
//           setApplications((prevApplications) =>
//             prevApplications.map((app) =>
//               app._id === id ? { ...app, status } : app
//             )
//           );
//         });
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   const deleteApplication = (id) => {
//     try {
//       axios
//         .delete(`http://localhost:4000/api/v1/application/delete/${id}`, {
//           withCredentials: true,
//         })
//         .then((res) => {
//           toast.success(res.data.message);
//           setApplications((prevApplication) =>
//             prevApplication.filter((application) => application._id !== id)
//           );
//         });
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   const openModal = (imageUrl) => {
//     setMarklistImageUrl(imageUrl);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <section className="my_applications page ">
//       {user && user.role === "Student" ? (
//         <div className="container">
//           <h1 className="text-center m-3">My Applications</h1>
//           {applications.length <= 0 ? (
//             <>
//               <h4>No Applications Found</h4>{" "}
//             </>
//           ) : (
//             applications.map((element) => {
//               return (
//                 <StudentCard
//                   element={element}
//                   key={element._id}
//                   deleteApplication={deleteApplication}
//                   openModal={openModal}
//                 />
//               );
//             })
//           )}
//         </div>
//       ) : (
//         <div className="container">
//           <h1 className="text-center">Applications From Students</h1>
//           {applications.length <= 0 ? (
//             <>
//               <h4>No Applications Found</h4>
//             </>
//           ) : (
//             applications.map((element) => {
//               return (
//                 <CollegeCard
//                   element={element}
//                   key={element._id}
//                   openModal={openModal}
//                   updateApplicationStatus={updateApplicationStatus}
//                 />
//               );
//             })
//           )}
//         </div>
//       )}
//       {modalOpen && (
//         <Marklist imageUrl={marklistImageUrl} onClose={closeModal} />
//       )}
//     </section>
//   );
// };

// export default MyApplications;

// const StudentCard = ({ element, deleteApplication, openModal }) => {
//   return (
//     <>
//       <div className="row d-flex align-items-center justify-content-center">
//         <div className="col-xs-12 col-md-6 student_card  border border-danger ps-5 pe-5 pt-5">
//           <div className="detail">
//             <p>
//               <span>Course:</span> {element.courseName}
//             </p>
//             <p>
//               <span>College name:</span> {element.collegeName}
//             </p>
//             <p>
//               <span>Student name:</span> {element.name}
//             </p>
//             <p>
//               <span>Email:</span> {element.email}
//             </p>
//             <p>
//               <span>Phone:</span> {element.phone}
//             </p>
//             <p>
//               <span>Location:</span> {element.location}
//             </p>
//             <p>
//               <span>Qualification:</span> {element.qualification}
//             </p>
//             <p>
//               <span>Percentage:</span> {element.percentage}
//             </p>
//           </div>
//           <div className="marklist">
//             <img
//               height={"350px"}
//               width={"250px"}
//               src={element.marklist.url}
//               alt="marklist"
//               onClick={() => openModal(element.marklist.url)}
//             />
//           </div>
//           <div className="btn_area">
//             <button
//               onClick={() => deleteApplication(element._id)}
//               className="mt-3 mb-5 btn btn-rounded btn-outline-danger"
//             >
//               Delete Application
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const CollegeCard = ({ element, openModal, updateApplicationStatus }) => {
//   return (
//     <>
//       <div className="row d-flex align-items-center justify-content-center">
//         <div className="student_card col-xs-12 col-md-6 student_card  border border-danger ps-5 pe-5 pt-5">
//           <div className="detail ">
//             <p>
//               <span>Student Name:</span> {element.name}
//             </p>
//             <p>
//               <span>Course:</span> {element.courseName}
//             </p>
//             <p>
//               <span>Email:</span> {element.email}
//             </p>
//             <p>
//               <span>Phone:</span> {element.phone}
//             </p>
//             <p>
//               <span>Location:</span> {element.location}
//             </p>
//             <p>
//               <span>Qualification:</span> {element.qualification}
//             </p>
//             <p>
//               <span>Percentage:</span> {element.percentage}
//             </p>
//           </div>
//           <div className="marklist mb-3">
//             <img
//               height={"350px"}
//               width={"250px"}
//               src={element.marklist.url}
//               alt="marklist"
//               onClick={() => openModal(element.marklist.url)}
//             />
//           </div>
//           <div className="btn_area">
//             {element.status === "pending" && (
//               <div>
//                 <button
//                   onClick={() =>
//                     updateApplicationStatus(element._id, "accepted")
//                   }
//                   className="btn btn-success"
//                 >
//                   Accept Application
//                 </button>
//                 <button
//                   onClick={() =>
//                     updateApplicationStatus(element._id, "rejected")
//                   }
//                   className="btn btn-danger ms-2"
//                 >
//                   Reject Application
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };



import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Marklist from "./Marklist";

const MyApplications = () => {
  const { user } = useContext(Context);
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [marklistImageUrl, setMarklistImageUrl] = useState("");

  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    try {
      if (user && user.role === "College") {
        axios
          .get("http://localhost:4000/api/v1/application/college/getall", {
            withCredentials: true,
          })
          .then((res) => {
            setApplications(res.data.applications);
          });
      } else {
        axios
          .get("http://localhost:4000/api/v1/application/student/getall", {
            withCredentials: true,
          })
          .then((res) => {

            setApplications(res.data.applications);
          });
    

      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, [isAuthorized]);

  const updateApplicationStatus = (id, status) => {
    try {
      axios
        .put(
          `http://localhost:4000/api/v1/application/updatestatus/${id}`,
          { status },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setApplications((prevApplications) =>
            prevApplications.map((app) =>
              app._id === id ? { ...app, status } : app
            )
          );
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const deleteApplication = (id) => {
    try {
      axios
        .delete(`http://localhost:4000/api/v1/application/delete/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success(res.data.message);
          setApplications((prevApplication) =>
            prevApplication.filter((application) => application._id !== id)
          );
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const openModal = (imageUrl) => {
    setMarklistImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="my_applications page">
      {user && user.role === "Student" ? (
        <div className="container">
          <h1 className="text-center m-3">My Applications</h1>
          {applications.length <= 0 ? (
            <h4>No Applications Found</h4>
          ) : (
            applications.map((element) => (
              <StudentCard
                key={element._id}
                element={element}
                deleteApplication={deleteApplication}
                openModal={openModal}
              />
            ))
          )}
        </div>
      ) : (
        <div className="container">
          <h1 className="text-center">Applications From Students</h1>
          {applications.length <= 0 ? (
            <h4>No Applications Found</h4>
          ) : (
            applications.map((element) => (
              <CollegeCard
                key={element._id}
                element={element}
                openModal={openModal}
                updateApplicationStatus={updateApplicationStatus}
              />
            ))
          )}
        </div>
      )}
      {modalOpen && <Marklist imageUrl={marklistImageUrl} onClose={closeModal} />}
    </section>
  );
};

export default MyApplications;

const StudentCard = ({ element, deleteApplication, openModal }) => {
  return (
    <div className="row d-flex align-items-center justify-content-center">
      <div className="col-xs-12 col-md-6 student_card border border-danger ps-5 pe-5 pt-5">
        <div className="detail">
        <p>
            <span>Status:</span> {element.status}
          </p>
          <p>
            <span>Course:</span> {element.courseName}
          </p>
          <p>
            <span>College name:</span> {element.collegeName}
          </p>
          <p>
            <span>Student name:</span> {element.name}
          </p>
          <p>
            <span>Email:</span> {element.email}
          </p>
          <p>
            <span>Phone:</span> {element.phone}
          </p>
          <p>
            <span>Location:</span> {element.location}
          </p>
          <p>
            <span>Qualification:</span> {element.qualification}
          </p>
          <p>
            <span>Percentage:</span> {element.percentage}
          </p>
        </div>
        <div className="marklist">
          <img
            height={"350px"}
            width={"250px"}
            src={element.marklist.url}
            alt="marklist"
            onClick={() => openModal(element.marklist.url)}
          />
        </div>
        <div className="btn_area">
          <button
            onClick={() => deleteApplication(element._id)}
            className="mt-3 mb-5 btn btn-rounded btn-outline-danger"
          >
            Delete Application
          </button>
        </div>
      </div>
    </div>
  );
};

const CollegeCard = ({ element, openModal, updateApplicationStatus }) => {
  return (
    <div className="row d-flex align-items-center justify-content-center">
      <div className="student_card col-xs-12 col-md-6 student_card border border-danger ps-5 pe-5 pt-5">
        <div className="detail">
          <p>
            <span>Student Name:</span> {element.name}
          </p>
          <p>
            <span>Course:</span> {element.courseName}
          </p>
          <p>
            <span>Email:</span> {element.email}
          </p>
          <p>
            <span>Phone:</span> {element.phone}
          </p>
          <p>
            <span>Location:</span> {element.location}
          </p>
          <p>
            <span>Qualification:</span> {element.qualification}
          </p>
          <p>
            <span>Percentage:</span> {element.percentage}
          </p>
        </div>
        <div className="marklist mb-3">
          <img
            height={"350px"}
            width={"250px"}
            src={element.marklist.url}
            alt="marklist"
            onClick={() => openModal(element.marklist.url)}
          />
        </div>
        <div className="btn_area">
          {element.status === "pending" && (
            <div>
              <button
                onClick={() => updateApplicationStatus(element._id, "accepted")}
                className="btn btn-success"
              >
                Accept Application
              </button>
              <button
                onClick={() => updateApplicationStatus(element._id, "rejected")}
                className="btn btn-danger ms-2"
              >
                Reject Application
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
