import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage";
import { Helmet } from "react-helmet-async";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  useEffect(() => {
    const storedJobsIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJobsIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      console.log(jobs, storedJobsIds, jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <Helmet>
        <title>Career | Applied Jobs</title>
      </Helmet>
      <h2 className="text-2xl">Jobs I applied: {appliedJobs.length}</h2>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJobs.map((job) => (
          <div key={job.id} className="py-2">
            <div className="flex">
              <div className="grid gap-1 md:grid-cols-4">
                <img className="w-1/2" src={job.logo} alt="" />
                <div>
                  <b>{job.job_title}</b> <br />
                  {job.company_name}
                  <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                      {job.remote_or_onsite}
                    </button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                      {job.job_type}
                    </button>
                  </div>
                  <div className="mt-4 flex ">
                    <h2 className="flex mr-4">
                      <CiLocationOn className="text-2xl mr-2"></CiLocationOn>
                      {job.location}
                    </h2>
                    <h2 className="flex">
                      <AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>
                      {job.salary}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button className="btn btn-primary">View Jobs</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
