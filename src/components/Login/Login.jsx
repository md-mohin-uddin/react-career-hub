import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInError, setSignInError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // reset error and success
    setSignInError("");
    setSuccess("");

    // sign in
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const token = result.user.accessToken;
        localStorage.setItem("token", JSON.stringify(token));
        setSuccess("Login Successfully");
        if (result.user) {
          navigate("/applied");
        }

        if (result.user.emailVerified) {
          setSuccess("User Logged in Successfully.");
        } else {
          alert("Please verify your email address.");
        }
      })
      .catch((error) => {
        console.error(error);
        setSignInError(error.message);
      });
  };

  const handleForgetPassword = (e) => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("please provide an email", emailRef.current.value);
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      console.log("please write a valid email");
      return;
    }

    // send validation emai
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("check your email");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">
          <form onSubmit={handleLogin} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  onClick={handleForgetPassword}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {signInError && <p className="text-red-600">{signInError}</p>}
          {success && <p className="text-green-600">{success}</p>}
          <p>
            New to this website? Please{" "}
            <Link to="/register" className="text-blue-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
