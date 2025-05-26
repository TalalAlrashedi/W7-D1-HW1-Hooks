import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import JobApplicationForm from "../JobApplicationForm";
import Submission from "../Submission";

const Layout = () => {
    return <Outlet />;
  };
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <JobApplicationForm /> },
      { path: "/submitted", element: <Submission /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
