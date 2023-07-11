import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// components
import Layout from "./components/Layout";
import Protected from "./components/Protected";
import Unautorized from "./components/Unautorized";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
        // loader: teamLoader,
      },
      {
        path: "signin",
        element: (
          <Unautorized>
            <Login />
          </Unautorized>
        ),
      },
      {
        path: "signup",
        element: (
          <Unautorized>
            <Signup />
          </Unautorized>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
