import { useState } from "react";
import ChangePassword from "../components/User/ChangePassword";
import ProfileSetting from "../components/User/ProfileSetting";
import useAuth from "../hooks/useAuth";

const UserProfile = () => {
  const { user, logout } = useAuth();

  const provider = user?.providerData[0]?.providerId;

  //logout handler
  const handleLogout = () => {
    logout();
  };

  //active tab state
  const [tab, setTab] = useState("profileSetting");

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1170px] px-5">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="rounded-md px-[30px] pb-[50px]">
            <div className="flex items-center justify-center">
              {/* show user info  */}
              <figure className="border-primaryColor h-[100px] w-[100px] rounded-full border-2 border-solid">
                <img
                  src={user?.photoURL ? user?.photoURL : user?.photoUrl}
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </figure>
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-headingColor text-[18px] font-bold leading-[30px]">
                {user?.displayName}
              </h3>
              <p className="text-textColor text-[15px] font-medium leading-6">
                {user?.email}
              </p>
              <p className="text-textColor text-[15px] font-medium leading-6">
                Phone Number:
                <span className="text-headingColor ml-2 text-[18px] leading-8">
                  {user?.phoneNumber}
                </span>
              </p>
            </div>

            <div className="mt-[50px] md:mt-[100xp]">
              <button
                className="w-full rounded-md bg-[#181A1E] p-3 text-[16px] leading-7 text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
              {/* <button className="w-full bg-red-600 p-3 text-[16px] leading-7 rounded-md">Delete Account</button>  */}
            </div>
          </div>

          {provider !== "google.com" && (
            <>
              <div className="md:col-span-2 md:px-[30px]">
                <div className="flex sm:flex-none">
                  <button
                    onClick={() => setTab("profileSetting")}
                    className={`${
                      tab === "profileSetting"
                        ? "bg-blue-700 font-bold text-white"
                        : ""
                    } text-headingColor border-primaryColor mr-5 rounded-md border border-solid p-2 px-5 text-[16px] font-semibold leading-7`}
                  >
                    Profile Settings
                  </button>
                  <button
                    onClick={() => setTab("changePassword")}
                    className={`${
                      tab === "changePassword"
                        ? "bg-blue-700 font-bold text-white"
                        : ""
                    } text-headingColor border-primaryColor mr-5 rounded-md border border-solid p-2 px-5 text-[16px] font-semibold leading-7`}
                  >
                    Change Password
                  </button>
                </div>

                {/* conditional render tab content  */}

                {tab === "profileSetting" && <ProfileSetting user={user} />}
                {tab === "changePassword" && <ChangePassword user={user} />}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
