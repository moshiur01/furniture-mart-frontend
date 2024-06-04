import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //* password icon visibility
  const [passwordShow, setPasswordShow] = useState(true);
  const togglePasswordVisibility = () => {
    setPasswordShow(!passwordShow);
  };

  //*login api handler

  const submitHandler = async (e) => {
    e.preventDefault();

    // // Check if the email contains "@gmail.com"
    // if (!formData.email.includes("@gmail.com")) {
    //   toast.error("Invalid Email");
    //   return;
    // }
    try {
      console.log(formData);
    } catch (error) {
      console.log(error);
    }

    // console.log(formData);
  };
  //!after successful login user sent to his previous route
  //   useEffect(() => {
  //     if (user) {
  //       navigate(from, { replace: true });
  //     }
  //   }, [user, loading, navigate, from]);

  return (
    <section className="px-5 md:mt-24 md:h-screen xl:px-0">
      <div className="mx-auto max-w-[1170px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img  */}

          <div className="hidden rounded-lg lg:block">
            <figure className="rounded-lg">
              <img
                src="/src/assets/login-img.svg"
                alt=""
                className="w-full rounded-lg"
              />
            </figure>
          </div>

          {/* singUP form  */}

          <div className="my-auto rounded-l-lg py-10 lg:pl-16">
            <h3 className="mb-10 text-center text-3xl font-bold leading-9 text-[#054C73]">
              Welcome <span className="text-primaryColor font-bold"> Back</span>
            </h3>

            <form onSubmit={submitHandler}>
              {/* email  */}
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  className="focus:border-primaryColor text-headingColor w-full cursor-pointer rounded-md border border-solid border-[#0066ff61] px-4 py-3 text-lg leading-7 placeholder:text-lg placeholder:text-gray-400 focus:outline-blue-500"
                  required
                />
              </div>

              {/* password  */}
              <div className="relative mb-5">
                <input
                  type={!passwordShow ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  value={formData?.password}
                  onChange={handleInputChange}
                  className="focus:border-primaryColor text-headingColor w-full cursor-pointer rounded-md border border-solid border-[#0066ff61] px-4 py-3 text-lg leading-7 placeholder:text-lg placeholder:text-gray-400 focus:outline-blue-500"
                  required
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-0 top-5"
                >
                  {passwordShow ? (
                    <FaEyeSlash className="w-10" />
                  ) : (
                    <FaEye className="w-10" />
                  )}
                </span>
              </div>

              {/* login btn  */}
              <div className="mt-7">
                <button
                  type="submit"
                  className="mb-3 w-full rounded-lg bg-[#054C73] px-4 py-3 text-[18px] leading-[30px] text-white"
                >
                  Login{" "}
                </button>
              </div>
            </form>
            <div>
              <GoogleLogin />
              <p className="text-textColor mt-5 text-center">
                Don&apos;t have an account?{" "}
                <Link to="/signUp" className="ml-1 font-bold text-blue-800">
                  Sing Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
