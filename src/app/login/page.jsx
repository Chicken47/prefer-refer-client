"use client";
import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submit = () => {
    const url = `http://localhost:6969/auth/login`;
    const payload = {
      email: email,
      password: pass,
    };
    axios
      .post(url, payload)
      .then((response) => {
        /*
          If you would like your client app to be able to access other headers, you need to set the Access-Control-Expose-Headers header on the server:
            Access-Control-Expose-Headers: Access-Token, Uid
        */
        // get the authToken and store it in session storage for now, cookies later
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex w-full h-full bg-green-50">
      <div className="flex flex-col items-center justify-between w-2/5 h-full p-8">
        <span className="w-full text-[22px] font-extrabold">PreferRefer</span>
        <div className="flex flex-col w-3/4 space-y-4 text-[14px]">
          <div className="flex flex-col">
            <span className="text-[18px] w-full font-bold">Welcome Back!</span>
            <span>
              A better way to find a job, or help someone during hard times.
            </span>
          </div>
          <div className="flex flex-col w-full space-y-2">
            <span className="font-bold">Email</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 bg-white border rounded"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <span className="font-bold">Password</span>
            <input
              onChange={(e) => setPass(e.target.value)}
              type="password"
              className="px-3 py-2 bg-white border rounded"
              placeholder="Enter Password"
            />
          </div>
          <button
            onClick={submit}
            className="px-3 py-2 font-bold text-white transition-all duration-300 bg-green-500 border-2 rounded border-green-50 hover:border-2 hover:border-green-500 hover:text-green-500 hover:bg-green-50"
          >
            Log In
          </button>
          <span className="w-full text-center text-[12px]">
            Not registered yet?{" "}
            <span className="font-bold text-green-800 cursor-pointer">
              Create an Account
            </span>
          </span>
        </div>
        <span className="text-[12px] w-full">
          Ⓒ Copyright 2024 Prefer Refer
        </span>
      </div>
      <div className="w-3/5 h-full p-5 overflow-hidden rounded-xl">
        <img
          className="object-cover h-full shadow-xl rounded-xl"
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Login;
