"use client";
import React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Common_Button from "@/common/components/Common_Button";
import DotHeading from "@/common/components/DotHeading";

const PostQuestion = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="px-24 flex flex-col gap-4 my-10">
        <h1 className="text-3xl font-black">
          Post Your Coding <span className="text-green-600">Queries</span>{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fuga
          quasi temporibus distinctio corporis quae.
        </p>
        <DotHeading title={"TITLE"} />
        <input
          type="search"
          id="default-search"
          className="rounded bg-gray-900 h-12 text-gray-600 border-4 border-slate-800 p-4"
          placeholder="Enter your coding doubt here ...."
        />

        <DotHeading title={"DESCRIPTION"} />
        <div className="  rounded-lg border-4 border-slate-900 ">
         <div className="bg-slate-900  h-[2.5rem] p-3">
            <TabContext value={value}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap:5,
                  alignItems: "center",
                }}
              >
                <div
                  onClick={() => handleChange(null, "1")}
                  className={`cursor-pointer ${
                    value === "1" ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  <svg
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class={`w-3 h-6 ${
                      value === "1" ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    <path
                      d="M3.52 10.5V2.228H0.464V0.0839996H9.136V2.228H6.08V10.5H3.52Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => handleChange(null, "2")}
                  className={`cursor-pointer ${
                    value === "2" ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  <svg
                    width="26"
                    height="15"
                    viewBox="0 0 26 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class={`w-6 h-6 ${
                      value === "2" ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    <path
                      d="M7.064 11.068L0.84 7.052V5.324L7.064 1.308V3.612L2.92 6.156V6.22L7.064 8.764V11.068ZM9.69775 14.06L14.9778 0.139999H17.0898L11.8098 14.06H9.69775ZM19.7235 11.068V8.764L23.8675 6.22V6.156L19.7235 3.612V1.308L25.9475 5.324V7.052L19.7235 11.068Z"
                      fill="#FFFCF9"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => handleChange(null, "3")}
                  className={`cursor-pointer ${
                    value === "3" ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class={`w-4 h-6 ${
                      value === "3" ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    <path
                      d="M5.9425 8.05749C6.25 8.34999 6.25 8.82999 5.9425 9.12249C5.65 9.41499 5.17 9.41499 4.8775 9.12249C3.415 7.65999 3.415 5.28249 4.8775 3.81999L7.5325 1.16499C8.995 -0.29751 11.3725 -0.29751 12.835 1.16499C14.2975 2.62749 14.2975 5.00499 12.835 6.46749L11.7175 7.58499C11.725 6.96999 11.6275 6.35499 11.4175 5.76999L11.77 5.40999C12.655 4.53249 12.655 3.10749 11.77 2.22999C10.8925 1.34499 9.4675 1.34499 8.59 2.22999L5.9425 4.87749C5.0575 5.75499 5.0575 7.17999 5.9425 8.05749ZM8.0575 4.87749C8.35 4.58499 8.83 4.58499 9.1225 4.87749C10.585 6.33999 10.585 8.71749 9.1225 10.18L6.4675 12.835C5.005 14.2975 2.6275 14.2975 1.165 12.835C-0.297502 11.3725 -0.297502 8.99499 1.165 7.53249L2.2825 6.41499C2.275 7.02999 2.3725 7.64499 2.5825 8.23749L2.23 8.58999C1.345 9.46749 1.345 10.8925 2.23 11.77C3.1075 12.655 4.5325 12.655 5.41 11.77L8.0575 9.12249C8.9425 8.24499 8.9425 6.81999 8.0575 5.94249C7.75 5.64999 7.75 5.16999 8.0575 4.87749Z"
                      fill="#FFFCF9"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => handleChange(null, "4")}
                  className={`cursor-pointer ${
                    value === "4" ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class={`w-4 h-6 ${
                      value === "4" ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    <path
                      d="M15.5 11V2C15.5 1.60218 15.342 1.22064 15.0607 0.93934C14.7794 0.658035 14.3978 0.5 14 0.5H5C4.60218 0.5 4.22064 0.658035 3.93934 0.93934C3.65804 1.22064 3.5 1.60218 3.5 2V11C3.5 11.3978 3.65804 11.7794 3.93934 12.0607C4.22064 12.342 4.60218 12.5 5 12.5H14C14.3978 12.5 14.7794 12.342 15.0607 12.0607C15.342 11.7794 15.5 11.3978 15.5 11ZM7.25 8L8.7725 10.0325L11 7.25L14 11H5M0.5 3.5V14C0.5 14.3978 0.658035 14.7794 0.93934 15.0607C1.22064 15.342 1.60218 15.5 2 15.5H12.5V14H2V3.5"
                      fill="#FFFCF9"
                    />
                  </svg>
                </div>
               
              </Box>
            </TabContext>
            </div>
         
          <div className=" h-[8.4rem]  bg-slate-950 ">
            <TabContext value={value}>
              <TabPanel value="1" className="text-gray-600 ">Provide additional context or details about your doubt </TabPanel>
              <TabPanel value="2">Content for Item Two</TabPanel>
              <TabPanel value="3">Content for Item Three</TabPanel>
              <TabPanel value="4">Content for Item four</TabPanel>
            </TabContext>
          </div>
        </div>
        <DotHeading title={"LANGUAGE / TECH STACK"} />
        <select className="h-12 text-white p-2.5 w-1/3 bg-slate-900  rounded">
          <option>HTML</option>
          <option>Tailwindcss</option>
          <option>Javascript</option>
          <option>flask</option>
          <option>React</option>
          <option>next</option>
        </select>
        <DotHeading title={"DUE TIME"} />
        <input
          type="date"
          id="date"
          className="text-white p-2.5 w-1/3 bg-slate-900  rounded calendar-icon-white"
        />
        <DotHeading title={"REWARD YOUR SOLVER"} />

        <input
          id="large-range"
          type="range"
          step="1"
          className="w-5/8 h-3 rounded-lg text-green-600"
        />

        <div className="flex justify-center">
          <div className="flex flex-col w-1/3">
            <Common_Button
              textcolour="text-[#0C0C0C]"
              colour={"bg-[#FFFCF9]"}
              children={"SOLVE QUERY"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostQuestion;
