import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const nav = useNavigate();
  // State to store the form data
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    phone: "",
    email: "",
    type: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      const response = await axios.post(
        "https://api.dummy.opaqueindustries.news/customers",
        formData
      );
      console.log(response);
      if (response?.status === 201) nav("/login");
    } catch (error) {
      console.log(error);
    }
  };

  //   for account creating

  return (
    <div className="w-full h-full z-50 relative flex flex-col py-20 justify-center items-center bg-white ">
      <h1 className="text-5xl font-bold">SignUp to your account</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 lg:w-[50%] p-5"
      >
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="name">
            Name
          </label>
          <input
            placeholder="Enter your name"
            className="input-form"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Enter your password"
            className="input-form"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="phone">
            phone
          </label>
          <input
            placeholder="Enter your phone"
            className="input-form"
            type="phone"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="email">
            Email
          </label>
          <input
            placeholder="Enter your email"
            className="input-form"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="type">
            Enter your role
          </label>
          <input
            placeholder="Enter your type"
            className="input-form"
            type="type"
            name="type"
            id="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        {/* sigin up href and remind text and SignUp */}
        <div className="flex justify-around items-center">
          <button className="btn" type="submit">
            SignUp
          </button>
          <div className="flex justify-between items-center gap-3">
            <p>If you already have an account!</p>
            <Link
              className=" underline text-red-500 cursor-pointer"
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
