import React from "react";
import { useContext } from "react";
import { Context } from "../../index";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularColleges from "./PopularColleges";
import PopularCategories from "./PopularCategories";


const Home = () => {
  
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className="homePage page">
        <HeroSection />
        {/* <HowItWorks />
        <PopularColleges /> */}
        {/* <PopularCategories /> */}
      </section>
    </>
  );
};

export default Home;