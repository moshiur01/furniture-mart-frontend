/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const ProfileSetting = ({ user }) => {
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
      displayName: user?.displayName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
    });
  }, [user]);

  //   //* image upload
  //   const handleFileChange = async (e) => {
  //     const file = e.target.files[0];

  //     // Preview the selected image
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setSelectFile(file);
  //       setPreviewUrl(reader.result);

  //       // Set the photo in formData
  //       setFormData((prevFormData) => ({
  //         ...prevFormData,
  //         photo: file,
  //       }));
  //     };

  //     if (file) {
  //       reader.readAsDataURL(file);
  //     }
  //   };

  //*update data api handler
  const { updateUserInfo } = useAuth();
  const submitHandler = async (e) => {
    e.preventDefault();
    updateUserInfo(formData);
  };

  // const uploadImageLink = await uploadImage(formData?.photo);

  // console.log(uploadImageLink);
  // console.log(formData);
  // console.log(res);

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
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData?.email}
              onChange={handleInputChange}
              className="text-headingColor placeholder:text-textColor w-full cursor-pointer rounded-md border-b border-solid border-[#0066ff61] px-4 py-3 text-[22px] leading-7 placeholder:text-sm focus:border-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* //!upload image
          <div className="mb-5 flex items-center gap-3">
            <figure className="border-blue-600 flex h-[60px] w-[60px] items-center justify-center rounded-full border-4 border-solid">
              <img src={previewUrl} alt="" className="w-full rounded-full" />
            </figure>

            <div className="relative h-[50px] w-[130px]">
              <input
                type="file"
                name="photo"
                id="customFile"
                accept=".jpg, .png"
                className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                onChange={handleFileChange}
              />

              <label
                htmlFor="customFile"
                className="text-headingColor absolute left-0 top-0 flex h-full w-full cursor-pointer items-center overflow-hidden truncate rounded-lg bg-[#0066ff46] px-[0.75rem] py-[0.375rem] text-[15px] font-semibold leading-6"
              >
                Upload Photo
              </label>
            </div>
          </div> */}

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

export default ProfileSetting;
