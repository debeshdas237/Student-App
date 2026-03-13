import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const MainLayout = lazy(() => import("../MainLayout"));
const Home = lazy(() => import("../pages/home/Home"));
const Students = lazy(() => import("../pages/students/Students"));
const AddStudent = lazy(() => import("../pages/addStudent/AddStudent"));
const Error = lazy(() => import("../pages/error/ErrorPage"));

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "add-student",
        element: <AddStudent />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
