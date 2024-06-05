/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { serverLink } from "../../Config/RouteConfig";
const AdminProfileSetting = ({ admin }) => {
  //   const [selectFile, setSelectFile] = useState(null);
  //   const [previewUrl, setPreviewUrl] = useState("");

  const [formData, setFormData] = useState({
    displayName: "",
    phoneNumber: "",
    email: "",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2a4xxU0NG6NU0MrfhXkenFNvNMFScB1eDRokLNrMP8seq585qB4EKsddo-1_T6WDTu1g&usqp=CAU",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setFormData({
      displayName: admin?.displayName,
      email: admin?.email,
      phoneNumber: admin?.phoneNumber,
      photoURL: admin?.photoURL,
    });
  }, [admin]);

  //*update data api handler

  const submitHandler = async (e) => {
    e.preventDefault();

    axios.patch(`${serverLink}/admin/${admin?._id}`, formData).then((res) => {
      if (res?.data?.modifiedCount === 1) {
        window.location.reload();
        toast.success("Profile updated successfully");
      }
    });
  };

  return (
    <section className="py-10">
      <div>
        <form onSubmit={submitHandler}>
          {/* name  */}
          <div className="mb-5">
            <input
              type="text"
              name="displayName"
              placeholder="Enter Your Name"
              value={formData?.displayName}
              onChange={handleInputChange}
              className="text-headingColor placeholder:text-textColor w-full cursor-pointer rounded-md border-b border-solid border-[#0066ff61] px-4 py-3 text-[22px] leading-7 placeholder:text-sm focus:border-blue-600 focus:outline-none"
              required
            />
          </div>
          {/* phone  */}
          <div className="mb-5">
            <input
              type="number"
              name="phoneNumber"
              placeholder="Enter Your Phone number"
              value={formData?.phoneNumber}
              onChange={handleInputChange}
              className="text-headingColor placeholder:text-textColor w-full cursor-pointer rounded-md border-b border-solid border-[#0066ff61] px-4 py-3 text-[22px] leading-7 placeholder:text-sm focus:border-blue-600 focus:outline-none"
              required
            />
          </div>
          {/* email  */}
          <div className="mb-5">
            <input
              disabled
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData?.email}
              onChange={handleInputChange}
              className="text-headingColor placeholder:text-textColor w-full cursor-pointer rounded-md border-b border-solid border-[#0066ff61] px-4 py-3 text-[22px] leading-7 placeholder:text-sm focus:border-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* image url link  */}
          <div className="mb-5">
            <input
              type="text"
              name="photoURL"
              placeholder="Enter Your Photo URL"
              value={formData?.photoURL}
              onChange={handleInputChange}
              className="text-headingColor placeholder:text-textColor w-full cursor-pointer rounded-md border-b border-solid border-[#0066ff61] px-4 py-3 text-[22px] leading-7 placeholder:text-sm focus:border-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* user update profile btn  */}
          <div className="mt-7">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-900 px-4 py-3 text-[18px] font-semibold leading-[30px] text-white"
            >
              Update Profile{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminProfileSetting;
