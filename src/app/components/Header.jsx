"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const router = usePathname();
  return (
    <div
      className={`z-0 ${
        router === "/login" || router === "/signup" ? "hidden" : "flex"
      } items-center justify-between w-full px-5 py-5 bg-green-300 shadow-xl shadow-green-200`}
    >
      <div className="font-extrabold text-[22px] cursor-pointer">
        PreferRefer
      </div>
      <div className="flex items-center space-x-6">
        <span className="font-medium transition-all cursor-pointer hover:underline">
          Home
        </span>
        <span className="font-medium transition-all cursor-pointer hover:underline">
          Browse Referrals
        </span>
        <span className="font-medium transition-all cursor-pointer hover:underline">
          Post Referral
        </span>
      </div>
      <div className="flex items-center space-x-6">
        <span className="font-medium transition-all cursor-pointer hover:underline">
          Login
        </span>
        <span className="font-medium transition-all cursor-pointer hover:underline">
          Register
        </span>
        <span className="font-medium transition-all cursor-pointer hover:underline">
          Logout
        </span>
      </div>
    </div>
  );
};

export default Header;
