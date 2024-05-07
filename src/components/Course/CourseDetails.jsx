

import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";
const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const navigateTo = useNavigate();
//   const { collegeName } = useParams();
// console.log(collegeName);
  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/clg/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setCourse(res.data.course);
      })
      .catch((error) => {
        navigateTo("/notfound");
      });
  }, [id]);

  if (!isAuthorized) {
    navigateTo("/login");
  }

  return (
    <section className="jobDetail page">
      <div className="container p-5">
        <h3>Course Details</h3>
        <div className="banner">
             <p>
               Course: <span>{course.name}</span>
             </p>
             <p>
               College: <span>{course.college}</span>
             </p>
             <p>
               Location: <span>{course.location}</span>
             </p>
             <p>
               University: <span>{course.university}</span>
             </p>
             <p>
               Duration: <span>{course.duration}</span>
             </p>
             <p>
               Eligibility: <span>{course.eligibility}</span>
             </p>
           
             <p>
               Fee:{" "}
               {course.fixedFee ? (
                   <span>{course.fixedFee}</span>
                 ) : (
                   <span>
                     {course.feeFrom} - {course.feeTo}
                   </span>
                 )}
             </p>
          {user && user.role === "College" ? (
            <></>
          ) : (
            // <Link to={`/application/${course._id}`}>Apply Now</Link>
            <Link
              to={{
                pathname: `/application/${course._id}/${course.name}/${course.college}`,
                state: { courseName: course.name, collegeName: course.college },
              }}
            >
              Apply Now
              </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;