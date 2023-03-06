import React, { Component } from "react";
import styles from "../../index.css"
import "./studyResources.css"
import Data from "./ResourcesData";
import '../CodingProblems/CodingProblems.css';
import Header from "../Navbar/Header";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

export class StudyResources extends Component {
  constructor() {
    super();
    this.state = {
      topic: "",
    };
  }

  render() {
    return (
      <div className="main">
        <div className="div1">
        <Header />
        </div>
        <div className="div2">
        <div>
        <h1 className="text-xl text-blue-500 font-medium" >
          When learning CS, there are some useful sites you must know to get
          always informed to do your technologies even better and learn new
          things. Here is a non-exhaustive list of some sites you should visit.
        </h1>
        <div className="outer">
        {Data.map((block) => (
          <div className=" flex flex-col bg-white rounded-t-2xl mt-2 shadow-sm">
            <div
              className={`  relative px-3 py-3 flex rounded-t-2xl font-medium cursor-pointer border-b-2 ${
                this.state.topic === block.title && "bg-blue-300"
              }`}
              onClick={() =>
                this.setState({
                  topic:
                    this.state.topic === block.title ? "" : block.title,
                })
              }
            >
              {this.state.topic === block.title ? (
                <MinusIcon
                  width={21}
                  height={21}
                  className="mx-3 text-red-600"
                />
              ) : (
                <PlusIcon
                  width={21}
                  height={21}
                  className="mx-3 text-blue-600"
                />
              )}
              <p className="mr-5">{block.title}</p>
              <p className="text-gray-500 absolute right-2">
                {block.list.length}
              </p>
            </div>
            {this.state.topic === block.title &&
              block.list.map((item) => (
                <div className="flex flex-col bg-white mt-2 rounded-t-2xl shadow-sm">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-3 cursor-pointer border-b-2"
                  >
                    <li className="text-blue-500 font-medium">{item.title} :</li>
                    <span className="text-black">{item.discription}</span>
                  </a>
                </div>
              ))}
          </div>
        ))}
        </div>
      </div>
        </div>
      </div>
      
    );
  }
}

export default StudyResources;
