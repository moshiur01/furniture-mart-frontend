import { Outlet } from "react-router-dom";
import AdminSidebarContent from "./AdminSidebarContent";

// eslint-disable-next-line react/prop-types
const AdminLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-12">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 space-y-2 bg-base-200 p-4 text-base-content">
          <AdminSidebarContent />
        </ul>
      </div>
    </div>
  );
};

export default AdminLayout;
