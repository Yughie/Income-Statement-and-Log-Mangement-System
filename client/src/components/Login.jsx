import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/", { username, password })
      .then((res) => {
        console.log(res);

        if (res.data.success) {
          // Redirect to the dashboard
          window.location.href = res.data.redirect;
        } else {
          setError("Incorrect username or password");
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Incorrect username or password");
      });
  }

  const handleInputChange = (e, type) => {
    switch (type) {
      case "username":
        setError("");
        setUsername(e.target.value);
        if (e.target.value == "") {
          setError("Username has left blank");
        }
        break;
      case "password":
        setError("");
        setPassword(e.target.value);
        if (e.target.value == "") {
          setError("Password has left blank");
        }
        break;
    }
  };

  return (
    <>
      <Fade>
        <form
          onSubmit={handleLogin}
          className="max-w-sm mx-auto px-10 py-5 md:px-0"
        >
          <div className="mb-5">
            <div>
              {error != "" ? (
                <div style={{ color: "#842029" }}>
                  <b>{error}</b>
                </div>
              ) : (
                <div style={{ color: "#badbcc" }}>
                  <b>{msg}</b>
                </div>
              )}
            </div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-200  dark:text-gray-900"
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
              onChange={(e) => handleInputChange(e, "username")}
            ></input>
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-900 "
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
              onChange={(e) => handleInputChange(e, "password")}
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
              className="ms-2 text-sm font-medium text-gray-300  dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </Fade>
    </>
  );
}

export default Login;
