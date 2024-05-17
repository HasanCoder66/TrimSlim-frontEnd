import React from "react";
import PageviewIcon from "@mui/icons-material/Pageview";
import { IoSearchSharp } from "react-icons/io5";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useState } from "react";

const Box1 = () => {
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950 },
    { make: "Ford", model: "F-Series", price: 33850 },
    { make: "Toyota", model: "Corolla", price: 29600 },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    {},
  ]);
  return (
    <div className="bg-white my-3 p-4 mx-5  rounded-sm">
      <h6 className="text-xs font-bold">RECENT PATIENTS</h6>
      <div className="w-full right-auto flex flex-row-reverse items-center p-3">
        <IoSearchSharp className="bg-[#5380a6] h-7 w-7" />

        <label
          htmlFor="Username"
          className="relative block  border border-gray-500 shadow-sm focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            id="Username"
            className="peer text-sm p-1 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Username"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Search
          </span>
        </label>
      </div>
      <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 500 }} // the grid will fill the size of the parent container
      >
        <AgGridReact className="border borde" rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  );
};

export default Box1;
