"use client";
import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const apiUrl = process.env.API_URL;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const isError = confirmPass && confirmPass !== pass;

  const submit = () => {
    const url = `http://localhost:6969/auth/register`;
    const payload = {
      name: name,
      email: email,
      password: pass,
    };
    axios
      .post(url, payload)
      .then((response) => {
        console.log(response);
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
            <span className="text-[18px] w-full font-bold">Welcome!</span>
            <span>
              Join as a helper or a helpee in tough times after a euphoric
              hiring phase.
            </span>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <span className="font-bold">Email</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 bg-white border rounded"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex flex-col w-full space-y-1">
            <span className="font-bold">Name</span>
            <input
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 bg-white border rounded"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex flex-col w-full space-y-1">
            <span className="font-bold">Password</span>
            <input
              onChange={(e) => setPass(e.target.value)}
              type="password"
              className="px-3 py-2 bg-white border rounded"
              placeholder="Enter Password"
            />
          </div>
          <div className="flex flex-col w-full space-y-1">
            <span className="font-bold">Confirm Password</span>
            <input
              onChange={(e) => setConfirmPass(e.target.value)}
              type="passsword"
              className={`px-3 py-2 bg-white ${
                isError ? "border border-red-500" : "border"
              } rounded`}
              style={{ outline: "none" }}
              placeholder="Enter Confirm Password"
            />
            <span
              className={`text-[10px] text-red-500 ${!isError && "invisible"}`}
            >
              Error
            </span>
          </div>
          <button
            onClick={!isError && submit}
            disabled={isError}
            className={
              isError
                ? "px-3 py-2 font-bold bg-gray-200 rounded text-gray-600 cursor-not-allowed border-2"
                : "px-3 py-2 font-bold text-white transition-all duration-300 bg-green-500 border-2 rounded border-green-50 hover:border-2 hover:border-green-500 hover:text-green-500 hover:bg-green-50"
            }
          >
            Sign Up
          </button>
        </div>
        <span className="text-[12px] w-full">
          Ⓒ Copyright 2024 Prefer Refer
        </span>
      </div>
      <div className="w-3/5 h-full p-5 overflow-hidden rounded-xl">
        <img
          className="object-cover h-full shadow-xl rounded-xl"
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Signup;
