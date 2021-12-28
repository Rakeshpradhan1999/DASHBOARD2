import "./style.css";
import CustomInput from "../../components/customInput";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-black h-full w-full min-h-screen flex justify-center items-center text-white">
      <div className="max-w-md w-full bg-dark-400 py-10 px-10">
        <form action="">
          <h1 className="mt-10 font-bold  text-xl">Hello! let's get started</h1>
          <p className="mt-1 mb-10 ">Sign in to continue</p>
          <CustomInput placeholder={"Username"} />
          <CustomInput placeholder={"Password"} />
          <div className="flex items-center  justify-end mb-4 mt-7">
            {/* <div className="flex items-center">
              <input type="checkbox" />
              <label for="fruit2"></label>
            </div> */}
            <a href="/" className=" underline text-sm text-gray-400">
              Forgot Password?
            </a>
          </div>
          <button className=" bg-blue-600 w-full py-3 rounded">SIGN IN</button>
          <p className="text-sm text-center mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className=" text-blue-600 underline">
              Create One
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
