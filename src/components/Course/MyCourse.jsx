// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { FaCheck } from "react-icons/fa";
// import { RiCloseLine } from "react-icons/ri";
// import { Context } from "../../index";
// import { useNavigate } from "react-router-dom";

// const MyCourse = () => {
//   const [mycourses, setMyCourses] = useState([]);
//   const [editingMode, setEditingMode] = useState(null);
//   const { isAuthorized, user } = useContext(Context);
//   const navigateTo = useNavigate();

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const { data } = await axios.get(
//           "http://localhost:4000/api/v1/clg/getmycourses",
//           { withCredentials: true }
//         );
//         setMyCourses(data.mycourses);

//       } catch (error) {
//         toast.error(error.response.data.message);
//         setMyCourses([]);
//       }
//     };
//     fetchCourses();
//   }, []);


//   useEffect(() => {
//     if (!isAuthorized || (user && user.role !== "College")) {
//       navigateTo("/");
//     }
//   }, [isAuthorized, user, navigateTo]);

//   const handleEnableEdit = (courseId) => {
//     setEditingMode(courseId);
//   };

//   const handleDisableEdit = () => {
//     setEditingMode(null);
//   };

//   const handleUpdateCourse = async (courseId) => {
//     try {
//       const updatedCourse = mycourses.find((course) => course._id === courseId);
//       await axios.put(
//         `http://localhost:4000/api/v1/clg/update/${courseId}`,
//         updatedCourse,
//         { withCredentials: true }
//       );
//       toast.success("Course updated successfully");
//       setEditingMode(null);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   const handleDeleteCourse = async (courseId) => {
//     try {
//       await axios.delete(
//         `http://localhost:4000/api/v1/clg/delete/${courseId}`,
//         { withCredentials: true }
//       );
//       toast.success("Course deleted successfully");
//       setMyCourses((prevCourses) =>
//         prevCourses.filter((course) => course._id !== courseId)
//       );
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   const handleInputChange = (courseId, field, value) => {
//     setMyCourses((prevCourses) =>
//       prevCourses.map((course) =>
//         course._id === courseId ? { ...course, [field]: value } : course
//       )
//     );
//   };

//   return (
//     <>
//       <div className="myJobs page">
//         <div className="container">
//           <h1>Your Posted Courses</h1>
//           {mycourses?.length > 0 ? (
//             <div className="banner">
//               {mycourses.map((element) => (
//                 <div className="card" key={element._id}>
//                   <div className="content p-5">
//                     <div className="short_fields">
//                       <div>

//                         <span>Course:</span>
//                         <input
//                           type="text"
//                           disabled={editingMode !== element._id}
//                           value={element?.name || ''}
//                           onChange={(e) =>
//                             handleInputChange(
//                               element._id,
//                               "name",
//                               e.target.value
//                             )
//                           }
//                         />
//                         <span>College:</span>
//                         <input
//                           type="text"
//                           disabled={editingMode !== element._id}
//                           value={element?.college || ''}
//                           onChange={(e) =>
//                             handleInputChange(
//                               element._id,
//                               "college",
//                               e.target.value
//                             )
//                           }
//                         />
//                         <span>Location:</span>
//                         <input
//                           type="text"
//                           disabled={editingMode !== element._id}
//                           value={element?.location || ''}
//                           onChange={(e) =>
//                             handleInputChange(
//                               element._id,
//                               "location",
//                               e.target.value
//                             )
//                           }
//                         />
//                         <span>University:</span>
//                         <input
//                           type="text"
//                           disabled={editingMode !== element._id}
//                           value={element?.university || ''}
//                           onChange={(e) =>
//                             handleInputChange(
//                               element._id,
//                               "university",
//                               e.target.value
//                             )
//                           }
//                         />
//                         <span>Eligibility:</span>
//                         <input
//                           type="text"
//                           disabled={editingMode !== element._id}
//                           value={element?.eligibility || ''}
//                           onChange={(e) =>
//                             handleInputChange(
//                               element._id,
//                               "eligibility",
//                               e.target.value
//                             )
//                           }
//                         />
//                         <span>Duration:</span>
//                         <input
//                           type="text"
//                           disabled={editingMode !== element._id}
//                           value={element?.duration || ''}
//                           onChange={(e) =>
//                             handleInputChange(
//                               element._id,
//                               "duration",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </div>
//                       {/* Add other fields similarly */}
//                     </div>
//                   </div>
//                   <div className="button_wrapper ">
//                     <div className="edit_btn_wrapper ">
//                       {editingMode === element._id ? (
//                         <>
//                           <button
//                             onClick={() => handleUpdateCourse(element._id)}
//                             className="check_btn"
//                           >
//                             <FaCheck />
//                           </button>
//                           <button
//                             onClick={handleDisableEdit}
//                             className="cross_btn"
//                           >
//                             <RiCloseLine />
//                           </button>
//                         </>
//                       ) : (
//                         <button
//                           onClick={() => handleEnableEdit(element._id)}
//                           className="edit_btn">
//                           Edit
//                         </button>
//                       )}
//                     </div>
//                     <button
//                       onClick={() => handleDeleteCourse(element._id)}
//                       className="delete_btn"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>You've not posted any courses or may have deleted all of them!</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyCourse;

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { Context } from "../../index";
import { Link, useNavigate } from "react-router-dom";

const MyCourse = () => {
  const [mycourses, setMyCourses] = useState([]);
  const [editingMode, setEditingMode] = useState(null);
  const { isAuthorized, user } = useContext(Context);
  const [feeFrom, setFeeFrom] = useState("");
  // const [feeTo, setFeeTo] = useState("");
  // const [fixedFee, setFixedFee] = useState("");
  // const [feeType, setFeeType] = useState("default");
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/clg/getmycourses",
          { withCredentials: true }
        );
        setMyCourses(data.mycourses.map(course => ({ ...course, status: 'pending' })));
      } catch (error) {
        toast.error(error.response.data.message);
        setMyCourses([]);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    if (!isAuthorized || (user && user.role !== "College")) {
      navigateTo("/");
    }
  }, [isAuthorized, user, navigateTo]);

  const handleEnableEdit = (courseId) => {
    setEditingMode(courseId);
  };

  const handleDisableEdit = () => {
    setEditingMode(null);
  };

  const handleUpdateCourse = async (courseId) => {
    try {
      const updatedCourse = mycourses.find((course) => course._id === courseId);
      await axios.put(
        `http://localhost:4000/api/v1/clg/update/${courseId}`,
        updatedCourse,
        { withCredentials: true }
      );
      toast.success("Course updated successfully");
      setEditingMode(null);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/v1/clg/delete/${courseId}`,
        { withCredentials: true }
      );
      toast.success("Course deleted successfully");
      setMyCourses((prevCourses) =>
        prevCourses.filter((course) => course._id !== courseId)
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleStatusChange = (courseId, status) => {
    setMyCourses((prevCourses) =>
      prevCourses.map((course) =>
        course._id === courseId ? { ...course, status } : course
      )
    );
  };

  const handleAcceptCourse = async (courseId) => {
    try {
      await axios.put(
        `http://localhost:4000/api/v1/clg/update/${courseId}`,
        { status: 'accepted' },
        { withCredentials: true }
      );
      toast.success("Course accepted successfully");
      // Navigate to the next page if needed
      navigateTo("/nextpage");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleRejectCourse = async (courseId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/v1/clg/delete/${courseId}`,
        { withCredentials: true }
      );
      toast.success("Course rejected successfully");
      setMyCourses((prevCourses) =>
        prevCourses.filter((course) => course._id !== courseId)
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleInputChange = (courseId, field, value) => {
    setMyCourses((prevCourses) =>
      prevCourses.map((course) =>
        course._id === courseId ? { ...course, [field]: value } : course
      )
    );
  };

  return (
    <>
      <div className="myJobs page">
        <div className="container">
          <h1>Your Posted Courses</h1>
         

          {mycourses?.length > 0 ? (
            <div className="banner">
              {mycourses.map((element) => (
                <div className="card" key={element._id}>
                  <div className="content p-5">
                    <div className="short_fields">
                      <div>

                        <span>Course:</span>
                        <input
                          type="text"
                          disabled={editingMode !== element._id}
                          value={element?.name || ''}
                          onChange={(e) =>
                            handleInputChange(
                              element._id,
                              "name",
                              e.target.value
                            )
                          }
                        />
                        <span>College:</span>
                        <input
                          type="text"
                          disabled={editingMode !== element._id}
                          value={element?.college || ''}
                          onChange={(e) =>
                            handleInputChange(
                              element._id,
                              "college",
                              e.target.value
                            )
                          }
                        />
                        <span>Location:</span>
                        <input
                          type="text"
                          disabled={editingMode !== element._id}
                          value={element?.location || ''}
                          onChange={(e) =>
                            handleInputChange(
                              element._id,
                              "location",
                              e.target.value
                            )
                          }
                        />
                        <span>University:</span>
                        <input
                          type="text"
                          disabled={editingMode !== element._id}
                          value={element?.university || ''}
                          onChange={(e) =>
                            handleInputChange(
                              element._id,
                              "university",
                              e.target.value
                            )
                          }
                        />
                        <span>Eligibility:</span>
                        <input
                          type="text"
                          disabled={editingMode !== element._id}
                          value={element?.eligibility || ''}
                          onChange={(e) =>
                            handleInputChange(
                              element._id,
                              "eligibility",
                              e.target.value
                            )
                          }
                        />
                        <span>Duration:</span>
                        <input
                          type="text"
                          disabled={editingMode !== element._id}
                          value={element?.duration || ''}
                          onChange={(e) =>
                            handleInputChange(
                              element._id,
                              "duration",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div>
                {/* <span> Fee:{" "}</span> */}
        
               {/* {element.fixedFee ? (
                  //  <span>{element.fixedFee}</span>
                   <input
                          type="text"
                          disabled={editingMode !== element._id}
                          value={element?.fixedFee || ''}
                          onChange={(e) =>
                            handleInputChange(
                              element._id,
                              "fixedFee",
                              e.target.value
                            )
                          }
                        />
                 ) : (
                  <input
                  type="text"
                  disabled={editingMode !== element._id}
                  value={element?.fixedFee || ''}
                  onChange={(e) =>
                    handleInputChange(
                      element._id,
                      "fixedFee",
                      e.target.value
                    )
                  }
                />
                 )} */}
                             {/* <select
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
            ) : null} */}
             
             </div>                   </div>
                  </div>
                  <div className="button_wrapper ">
                    <div className="edit_btn_wrapper ">
                      {editingMode === element._id ? (
                        <>
                          <button
                            onClick={() => handleUpdateCourse(element._id)}
                            className="check_btn"
                          >
                            <FaCheck />
                          </button>
                          <button
                            onClick={handleDisableEdit}
                            className="cross_btn"
                          >
                            <RiCloseLine />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleEnableEdit(element._id)}
                          className="edit_btn">
                          Edit
                        </button>
                      )}
                    </div>
                    <button
                      onClick={() => handleDeleteCourse(element._id)}
                      className="delete_btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>You've not posted any courses or may have deleted all of them!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MyCourse;
