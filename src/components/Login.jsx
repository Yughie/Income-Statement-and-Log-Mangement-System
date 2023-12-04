import { Fade } from "react-awesome-reveal";
import { useState } from "react";
//import { BrowserRoute, Routes, Route} from "react-router-dom"

function Login () {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    
    const handleInputChange = (e, type) => {
        switch(type) {
            
            case 'username':
                setError("");
                setUsername(e.target.value);
                if(e.target.value == ""){
                    setError("Username has left blank")
                }
                break;
            case 'password':
                setError("");
                setPassword(e.target.value);
                if(e.target.value == ""){
                    setError("Password has left blank")
                }
                break
        }



    }
  
    function loginSubmit(e){ 
        if(username !== "" && password != ""){
            alert("Success");
        }
        else{
            setError("All field are required!");
        }
    }


    return (
        <>
            <Fade>
            <form className="max-w-sm mx-auto px-10 md:px-0" >
            <div className="mb-5">
                <p>
                    {
                        error != "" ?
                        <div style={{color: '#842029'}}><b>{error}</b></div> :
                        <div style={{color: '#badbcc'}}><b>{msg}</b></div>
                    }

                </p>
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
                value={username}
                required
                onChange={(e) =>
                  handleInputChange(e, "username")
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
                value={password}
                required
                onChange={(e) =>
                  handleInputChange(e, "password")
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
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={loginSubmit}
            >
              Login
            </button>
          </form>
          </Fade>
        </>
    )
}


export default Login;