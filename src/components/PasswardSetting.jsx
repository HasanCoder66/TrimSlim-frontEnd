import React from "react";
import { Settings } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import Link from '@mui/material/Link';


const PasswardSetting = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath)
  return (
    <div className="h-screen bg-[#edf1f5]">
      <div className="flex items-center justify-between font-bold text-3xl text-[#CECECE] p-5 bg-white">
        <div>
          <Settings style={{ fontSize: "35px" }} />
          Change Password
        </div>
        <div>
          
          <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href={{currentPath}}
        >
        </div>
      </div>
      <div className="flex flex-col bg-white p-12 m-5 w-full rounded-sm ">
        <div className="flex justify-around items-center mb-4  ">
          <div className="w-2/5 text-center">
            <label
              htmlFor="oldPassword"
              className="text-sm font-bold text-slate-500"
            >
              Old Password
            </label>
          </div>
          <div className="flex flex-col  w-4/5">
            <input
              type="password"
              id="oldPassword"
              placeholder="Enter your old password"
              className="p-2 border border-gray-300 rounded mb-1 w-full"
            />
            <span className="text-sm text-gray-500">
              Minimum 4 characters required
            </span>
          </div>
        </div>
        <div className="flex justify-around items-center my-4">
          <div className="w-2/5 text-center">
            <label
              htmlFor="oldPassword"
              className="text-sm font-bold text-slate-500"
            >
              New Password
            </label>
          </div>
          <div className="flex flex-col item-center w-4/5">
            <input
              type="password"
              id="oldPassword"
              placeholder="Enter your old password"
              className="p-2 border border-gray-300 rounded mb-1 w-full"
            />
            <span className="text-sm text-gray-500">
              Minimum 4 characters required
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-5 rounded">
            Submit
          </button>
          <button className="bg-slate-300 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswardSetting;
