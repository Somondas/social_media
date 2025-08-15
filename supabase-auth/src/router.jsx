import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import App from "./App";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/sign-in", element: <Signin /> },
  { path: "/sign-up", element: <Signup /> },
]);
