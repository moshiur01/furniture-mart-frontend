import { useEffect, useState } from "react";
import { client } from "../../Config/axiosConfig";
import AdminProfileSetting from "../../components/admin/AdminProfileSetting";
import useAuth from "../../hooks/useAuth";

const AdminProfile = () => {
  const { user, logout } = useAuth();
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    client.get(`/user/${user?.email}`).then((response) => {
      setAdmin(response.data);
    });
  }, [user?.email]);

  //logout handler
  const handleLogout = () => {
    logout();
  };

  return (
    <section className="rounded-lg py-20 shadow-lg">
      <div className="mx-auto max-w-[1570px] px-5">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="rounded-md px-[30px] pb-[50px]">
            <div className="flex items-center justify-center">
              {/* show user info  */}
              <figure className="border-primaryColor h-[100px] w-[100px] rounded-full border-2 border-solid">
                <img
                  src={admin?.photoURL}
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </figure>
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-headingColor text-[18px] font-bold leading-[30px]">
                {admin?.displayName}
              </h3>
              <p className="text-textColor text-[15px] font-medium leading-6">
                {admin?.email}
              </p>
              <p className="text-textColor text-[15px] font-medium leading-6">
                Phone Number:
                <span className="text-headingColor ml-2 text-[18px] leading-8">
                  {admin?.phoneNumber}
                </span>
              </p>
              <p className="text-textColor text-[15px] font-medium leading-6">
                Role:
                <span className="text-headingColor ml-2 text-[18px] uppercase leading-8">
                  {admin?.role}
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
            </div>
          </div>

          <>
            <div className="md:col-span-2 md:px-[30px]">
              <div className="flex sm:flex-none">
                <button
                  className={`border-primaryColor mr-5 rounded-md border border-solid bg-blue-700 p-2 px-5 text-[16px] font-bold leading-7 text-white`}
                >
                  Profile Settings
                </button>
              </div>

              <AdminProfileSetting admin={admin} />
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default AdminProfile;
