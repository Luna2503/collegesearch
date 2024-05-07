import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../index";

const Courses = () => {
  const [course, setCourses] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();
  useEffect(() => {
    try {
      axios
        .get("http://localhost:4000/api/v1/clg/getall", {
          withCredentials: true,
        })
        .then((res) => {
          setCourses(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log("Courses++++++++++++++++++",course);
  if (!isAuthorized) {
    navigateTo("/");
  }

  return (
    <section className="jobs page">
      <div className="container">
        <h1>All Available Courses</h1>
        <div className="banner">
          {course.course &&
            course.course.map((element) => {
              return (
                <div className="card" key={element._id}>
                  <p>{element.name}</p>
                  <p>{element.college}</p>
                  <p>{element.location}</p>
                  <Link to={`/course/${element._id}`}>Course Details</Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Courses