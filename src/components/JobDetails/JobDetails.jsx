import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineDollar } from "react-icons/ai";
import { PiSubtitlesFill } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { saveJobApplication } from "../utility/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  //   console.log(jobs, id);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    job_title,
    salary,
    contact_information,
  } = job;
  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have applied successfully");
  };
  return (
    <div className="py-4">
      <h2>Job Details of : {id}</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2>
            <b>Job Description</b>: {job_description}
          </h2>
          <h2>
            <b>Job Responsibility: </b>
            {job_responsibility}
          </h2>
          <h2>
            <b>Educational Requirement:</b> <br />
            {educational_requirements}
          </h2>
          <h2>
            <b>Experience: </b> <br />
            {experiences}
          </h2>
        </div>
        <div className="border md:col-span-1">
          <div>
            <h1 className="text-2xl py-2">
              <b>Job Details</b>
              <hr />
            </h1>
            <div className="flex">
              <h2 className="flex">
                <AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>
                <b>Salary:</b>
                {salary}
              </h2>
            </div>
            <div className="flex">
              <h2 className="flex">
                <PiSubtitlesFill className="text-2xl mr-2" />
                <b>Job Title:</b>
                {job_title}
              </h2>
            </div>
          </div>
          <div>
            {" "}
            <h1 className="text-2xl py-2">
              <b>Contact Information</b>
              <hr />
            </h1>
            <h2 className="flex">
              <CiPhone className="text-2xl mr-2" />
              <b>Phone:</b>
              {contact_information.phone}
            </h2>
            <h2 className="flex">
              <HiOutlineMail className="text-2xl mr-2" />
              <b>Email:</b>
              {contact_information.email}
            </h2>
            <h2 className="flex">
              <CiLocationOn className="text-3xl mr-2" />
              <b>Address:</b>
              {contact_information.address}
            </h2>
          </div>
          <div className="text-center">
            <button onClick={handleApplyJob} className="btn btn-primary w-full">
              Apply Now
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
