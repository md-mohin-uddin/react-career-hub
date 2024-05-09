import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import auth from "../firebase/firebase.config";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [resgisterError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password);
    // reset error
    setRegisterError("");
    // reset success
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be 6 Charcter or Longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Your password should have one upper case character");
      return;
    } else if (!accepted) {
      setRegisterError("Please accept our terms and condition");
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully");
        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => console.log("profile updated"))
          .catch();

        // send verification email
        sendEmailVerification(result.user).then(() => {
          alert("please check your email");
        });
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="mb-4 w-full  py-2 px-4"
          type="text"
          name="name"
          placeholder="Your Name"
          id=""
          required
        />
        <br />
        <input
          className="mb-4 w-full  py-2 px-4"
          type="email"
          name="email"
          placeholder="Email Address"
          id=""
          required
        />
        <br />
        <div className="mb-4 relative border">
          <input
            className="w-full py-2 px-4"
            name="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            id=""
            required
          />{" "}
          <span
            className="absolute top-3 right-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </span>
        </div>
        <br />
        <div className="mb-2">
          <input type="checkbox" name="terms" id="terms" />
          <label className="ml-2" htmlFor="terms">
            Accept our <a href="">Terms and Conditions</a>
          </label>
        </div>
        <br />
        <input
          className="btn btn-secondary mb-4 w-full"
          type="submit"
          value="Register"
        />
      </form>
      {resgisterError && <p className="text-red-600">{resgisterError}</p>}
      {success && <p className="text-green-600">{success}</p>}
      <p>
        Already have account? Please{" "}
        <Link to="/login" className="text-blue-600">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
