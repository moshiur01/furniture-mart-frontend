import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center py-32 text-center">
      <h1 className="mb-8 text-7xl font-extrabold">Error {status || 404}</h1>
      <p className="lg:text-3xl">{error?.message}</p>

      <img src="/src/assets/404 Error.gif" alt="" />
      <button className="btn mt-8 bg-red-500 text-white">
        <Link to="/"> Go to Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
