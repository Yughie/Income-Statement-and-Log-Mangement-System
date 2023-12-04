//import "./App.css";
import logo from "./assets/logo.png";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { dashboard } from 'dashboard.jsx';
import { BrowserRoute, Routes, Route} from "react-router-dom"


function App() {

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");


  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = $(e.target)
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
          setResult(data);
      },
  });
  }



  return (
    <>
      <div className="flex-col items-center justify-center text-center h-screen w-screen text-slate-300">
        {/* IMAGE */}
        <Fade down cascade damping={.90}>
          <img src={logo} alt="Your Image" className="mx-auto px-10 pt-40 md:px-16"></img>
          <form className="max-w-sm mx-auto px-10 md:px-0" >
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-white  dark:text-gray-900"
              >
                Your Username
              </label>
              <input
                type="text"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
                required
                onChange={(event) =>
                  handleUsername(event)
                }
              ></input>
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white  dark:text-gray-900"
              >
                Your Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                required
                onChange={(event) =>
                  handlePassword(event)
                }
                
              ></input>
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                ></input>
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-300 dark:text-gray-900"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </form>
        </Fade>
      </div>
    </>
  );
}

export default App;
