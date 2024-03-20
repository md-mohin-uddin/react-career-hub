import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Jobs = () => {
  const jobs = useLoaderData();
  console.log(jobs);

  return (
    <>
      <Helmet>
        <title>All Jobs</title>
      </Helmet>
      <div className="grid gap-6 grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="card card-compact w-96 bg-base-100 shadow-xl border p-4 "
          >
            <figure>
              <img className="w-1/3" src={job.logo} alt="logo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{job.job_title}</h2>
              <p>{job.company_name}</p>
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
              <div className="card-actions ">
                <Link to={`/job/${job.id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Jobs;
