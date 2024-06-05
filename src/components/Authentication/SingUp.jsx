import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "./GoogleLogin";

const SignUp = () => {
  const { loading, createUser, authError } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    displayName: "",
    phoneNumber: "",
    email: "",
    password: "",
    photoURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2a4xxU0NG6NU0MrfhXkenFNvNMFScB1eDRokLNrMP8seq585qB4EKsddo-1_T6WDTu1g&usqp=CAU",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //* password icon visibility
  const [passwordShow, setPasswordShow] = useState(true);
  const togglePasswordVisibility = () => {
    setPasswordShow(!passwordShow);
  };

  //*signUp api handler
  const submitHandler = async (e) => {
    e.preventDefault();

    // Check if the email contains "@gmail.com"
    if (!formData.email.includes("@gmail.com")) {
      toast.error("Invalid Email");
      return;
    }

    if (authError) {
      return toast.error(authError?.message);
    }
    try {
      createUser(formData, navigate);
    } catch (error) {
      console.log(error);
    }
  };

  //   //after successful login user sent to his previous route
  //   useEffect(() => {
  //     if (user) {
  //       navigate(from, { replace: true });
  //     }
  //   }, [user, loading, navigate, from]);

  return (
    <section className="px-5 xl:px-0">
      <div className="mx-auto max-w-[1170px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img  */}

          <div className="bg-primaryColor hidden rounded-lg lg:block">
            <figure className="rounded-lg">
              <img
                src="/src/assets/Sign up.gif"
                alt=""
                className="w-full rounded-lg"
              />
            </figure>
          </div>

          {/* singUP form  */}

          <div className="rounded-l-lg py-10 lg:pl-16">
            <h3 className="text-headingColor mb-10 text-center text-[22px] font-bold leading-9 sm:text-left">
              Create An{" "}
              <span className="font-bold text-[#054C73]">Account</span>
            </h3>

            <form onSubmit={submitHandler}>
              {/* name  */}
              <div className="mb-5">
                <input
                  type="text"
                  name="displayName"
                  placeholder="Enter Your Name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  className="focus:border-primaryColor text-headingColor placeholder:text-textColor w-full cursor-pointer rounded-md border border-solid border-[#0066ff61] px-4 py-3 text-[22px] leading-7 placeholder:text-lg focus:outline-none"
                  required
                />
              </div>

              {/* phone  */}
              <div className="mb-5">
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Enter Your Phone number"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  className="focus:border-primaryColor text-headingColor placeholder:text-textColor w-full cursor-pointer rounded-md border border-solid border-[#0066ff61] px-4 py-3 text-[22px] leading-7 placeholder:text-lg focus:outline-none"
                  required
                />
              </div>

              {/* email  */}
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  className="focus:border-primaryColor text-headingColor placeholder:text-textColor w-full cursor-pointer rounded-md border border-solid border-[#0066ff61] px-4 py-3 text-[22px] leading-7 placeholder:text-lg focus:outline-none"
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
                  className="focus:border-primaryColor text-headingColor placeholder:text-textColor w-full cursor-pointer rounded-md border border-solid border-[#0066ff61] px-4 py-3 text-[22px] leading-7 placeholder:text-lg focus:outline-none"
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

              {/* signUp btn  */}
              <div className="mt-7 space-y-2">
                <button
                  type="submit"
                  className="mb-4 w-full rounded-lg bg-[#054C73] px-4 py-3 text-[18px] leading-[30px] text-white"
                  // onClick={handleLogin}
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-lg"></span>
                  ) : (
                    <>Register </>
                  )}
                </button>
              </div>
            </form>
            <div>
              {/* google sign in   */}
              <GoogleLogin />
              <p className="mt-5 text-center text-lg">
                Already have an account?{" "}
                <Link to="/login" className="ml-1 font-bold text-blue-800">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
