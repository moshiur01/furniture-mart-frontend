import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import useAuth from "../../hooks/useAuth";

const ChangePassword = () => {
  const { changePassword } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    NewPassword: "",
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
    changePassword(formData?.NewPassword);
    // console.log(formData);
  };

  return (
    <section className="py-10">
      <div className="">
        <form onSubmit={submitHandler}>
          {/* email  */}
          <div className="relative mb-5">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData?.email}
              onChange={handleInputChange}
              className="text-headingColor placeholder:text-textColor w-full cursor-pointer rounded-md border border-solid border-[#0066ff61] px-4 py-3 text-[22px] leading-7 placeholder:text-lg focus:border-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* password  */}
          <div className="relative mb-5">
            <input
              id="Password"
              type={!passwordShow ? "text" : "password"}
              name="password"
              placeholder="Enter Your Old Password"
              value={formData?.password}
              onChange={handleInputChange}
              className="text-headingColor placeholder:text-textColor w-full cursor-pointer rounded-md border border-solid border-[#0066ff61] px-4 py-3 text-[22px] leading-7 placeholder:text-lg focus:border-blue-600 focus:outline-none"
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

          {/* new  password  */}
          <div className="relative mb-5">
            <input
              id="NewPassword"
              type={!passwordShow ? "text" : "password"}
              name="NewPassword"
              placeholder="Enter Your New Password"
              value={formData?.NewPassword}
              onChange={handleInputChange}
              className="text-headingColor placeholder:text-textColor w-full cursor-pointer rounded-md border border-solid border-[#0066ff61] px-4 py-3 text-[22px] leading-7 placeholder:text-lg focus:border-blue-600 focus:outline-none"
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

          <div className="mt-7">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-900 px-4 py-3 text-[18px] font-semibold leading-[30px] text-white"
            >
              Change Password{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;
