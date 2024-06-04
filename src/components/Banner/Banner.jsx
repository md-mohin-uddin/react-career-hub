import myImage from "../../assets/images/user.png";
const Banner = () => {
  return (
    <div className="flex my-10 sm:flex-row">
      <div className="md:col-span-6 mt-4 ">
        <h2 className="text-7xl text-[#1A1919]">
          One Step <br /> Closer To Your <br />{" "}
          <span className="text-[#7E90FE]">Dream Job</span>
        </h2>
        <p className="text-lg py-2">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
      <div className="md:col-span-6 ">
        <img src={myImage} alt="myImage" />
      </div>
    </div>
  );
};

export default Banner;
