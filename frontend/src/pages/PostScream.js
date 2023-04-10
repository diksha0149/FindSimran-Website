import React, { useState } from "react";
import { Navigate ,Link , useNavigate} from 'react-router-dom';
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";

const PostScream = () => {
  const navigate = useNavigate();
  const initialState = { title: "", link: "", description: "", skills: "" };
  const [userScream, setUserScream] = useState(initialState);
  const { title, link, description, skills } = userScream;
  const [techskills, setTechskills] = useState([{ skills: "" }]);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserScream({ ...userScream, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/scream", {
      method: "POST",
      body: JSON.stringify(userScream),
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer "+localStorage.getItem("token")
      },
    })
    .then((result) => {
      if(result.status===400){
        alert("enter all the required feilds")
      }
      else{
      console.log(result);
      navigate("/dashboard");
      }
    })
    .catch((error) => {
      console.log(error);
    });
    // ;
    // if (response.status === 400) {
    //   alert("enter description");
    // } else {
    //   <Navigate to="/dashboard" />
    // }
  };

  const handlehtmlFormChange = (index, event) => {
    let data = [...techskills];
    data[index][event.target.name] = event.target.value;
    setTechskills(data);
  };
  const addFields = (e) => {
    e.preventDefault();
    let newfield = { skills: "" };
    setTechskills([...techskills, newfield]);
  };
  const removeInputFields = (index) => {
    index.preventDefault();
    const rows = [...techskills];
    rows.splice(index, 1);
    setTechskills(rows);
  };
  return (
    <div className="main">
      {/* <div className="div1">
        <Header />
      </div> */}
      <div className="div2">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <htmlForm className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChangeInput}
                  value={title}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="link"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Link
                </label>
                <input
                  type="text"
                  name="link"
                  onChange={handleChangeInput}
                  value={link}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  onChange={handleChangeInput}
                  value={description}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="skills"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Skills
                </label>
                <textarea
                  type="text"
                  name="skills"
                  onChange={handleChangeInput}
                  value={skills}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              {/* <div className="mb-2">
                <label
                  htmlFor="skills"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Skills
                </label>
                {techskills.map((input, index) => {
                  return (
                    <div key={index} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                      <input
                        name="skills"
                        placeholder="Skills"
                        value={input.techskills}
                        onChange={(event) => handlehtmlFormChange(index, event)}
                      />
                      {techskills.length !== 1 ? (
                        <button onClick={removeInputFields}><AiOutlineMinusCircle/></button>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
                <div className="col-sm-12">
                  <button
                    className="btn"
                    onClick={addFields}
                  >
                    <BsPlusCircle/>
                  </button>
                </div>
              </div> */}
              <div className="mt-6">
                <button
                  type="submit"
                  value="Submit"
                  onClick={handleSubmit}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transhtmlForm bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                >
                  Post Scream
                </button>
              </div>
            </htmlForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostScream;
