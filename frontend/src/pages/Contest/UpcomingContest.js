import React from "react";
import ContestCard from "./ContestCard";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
        <div className="flex flex-wrap page">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {/* codechef */}
            <li className="m-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === 1 && "text-blue-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Codechef
              </a>
            </li>
            {/* codeforces */}
            <li className="m-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === 2 && "text-blue-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                CodeForces
              </a>
            </li>
            {/* leetcode */}
            <li className="m-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === 3 && "text-blue-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                LeetCode
              </a>
            </li>
            {/* hackerrank */}
            <li className="m-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === 4 && "text-blue-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                HakerRank
              </a>
            </li>
            {/* hackerearth */}
            <li className="m-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === 5 && "text-blue-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                HackerEarth
              </a>
            </li>
            {/* topcoder */}
            <li className="m-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === 6 && "text-blue-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                TopCoder
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <ContestCard url="code_chef" />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <ContestCard url="codeforces" />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <ContestCard url="leet_code" />
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <ContestCard url="hacker_rank" />
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <ContestCard url="hacker_earth" />
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                  <ContestCard url="top_coder" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function UpcomingContest() {
  return <Tabs />;
}

export default UpcomingContest;
