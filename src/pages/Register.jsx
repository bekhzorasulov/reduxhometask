import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, repeatpassword } = formData;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedRepeatPassword = repeatpassword.trim();

    if (
      !trimmedName ||
      !trimmedEmail ||
      !trimmedPassword ||
      !trimmedRepeatPassword
    ) {
      toast.warning("Please fill all the fildes!");
      return;
    }

    // Success case
    toast.success("Registration successful!");
  };

  return (
    <div className="h-screen grid place-items-center w-full">
      <form onSubmit={handleSubmit} className="max-w-96 mx-auto w-full">
        <h2 className="text-4xl text-center mb-5 font-bold">Register</h2>
        <FormInput
          type="text"
          placeholder="Name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <FormInput
          type="email"
          placeholder="Email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          placeholder="Password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          placeholder="Repeat password"
          label="Repeat Password"
          value={formData.repeatpassword}
          onChange={handleChange}
        />
        <div className="my-5">
          <button type="submit" className="btn btn-success btn-block">
            Register
          </button>
        </div>
        <div className="text-center">
          <p>
            If you have account,{" "}
            <Link className="link link-success" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
