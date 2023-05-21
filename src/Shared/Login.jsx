import  { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
const Login = () => {
  const [success, setSuccess] = useState("")
  const [errorMessage,setErrorMessage] = useState("")
  const { logIn, googleLogIn } = useContext(AuthContext)
  
  const location = useLocation()
    const navigate = useNavigate()
   const from = location.state?.from?.pathname || "/";
  

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    logIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        setSuccess('user logged successfully')
        navigate(from,{replace:true})
        form.reset("")
      })
      .catch(error => {
        console.log(error.message)
        setErrorMessage(error.message)
    })
  }
  const handleGoogle = () => {
    googleLogIn()
      .then(() => { })
      .then(error => {
      console.log(error.message)
    })
  }

  return (
    <div className=" container min-h-screen mx-auto  rounded-sm">
      <div className="shadow mt-20 gap-4">
        <form onSubmit={handleLogin}>
          <div className="card-body  ">
            <h1 className="text-3xl text-primary font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                required
                className="input input-bordered"
              />
              <label className="label">
                <p>{success}</p>
                <p className="text-red-500">{errorMessage}</p>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
            <div className=" ">
              <p className="text-center">OR</p>
            </div>
            <button onClick={handleGoogle} className="btn btn-outline btn-primary">Login With Google</button>
          </div>

          <p className="text-center pb-8">
            Dreamy Dolls New ?
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
