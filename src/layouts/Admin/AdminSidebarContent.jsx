import { Link } from "react-router-dom";
const AdminSidebarContent = () => {
  return (
    <>
      {/* Sidebar content here */}
      <li>
        <Link to="/" className="text-lg">
          Home
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="text-lg">
          Dashboard Home
        </Link>
      </li>

      <li>
        <Link to="/dashboard/profile" className="text-lg">
          Profile
        </Link>
      </li>
      <li>
        <Link to="/dashboard/manageProducts" className="text-lg">
          Manage Products
        </Link>
      </li>
      <li>
        <Link to="/dashboard/addProducts" className="text-lg">
          Add Products
        </Link>
      </li>
    </>
  );
};

export default AdminSidebarContent;
