import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.warning("Please fill all the fields!");
      return;
    }

    toast.success("Login successfully!");
    return;
  };

  return (
    <div className="h-screen grid place-items-center w-full">
      <form onSubmit={handleSubmit} className="max-w-96 mx-auto w-full">
        <h2 className="text-4xl text-center mb-5 font-bold">Log In</h2>
        <FormInput
          type="email"
          placeholder="Email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          placeholder="Password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="my-5">
          <button className="btn btn-success btn-block">Log In</button>
        </div>
        <div className="text-center">
          <p>
            If you don't have account,{" "}
            <Link className="link link-success" to="/register">
              Register
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
