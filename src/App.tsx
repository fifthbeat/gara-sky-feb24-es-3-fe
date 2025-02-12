import Layout from "@components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "~react-pages";
import Home from "./pages";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <Layout fullWidth />,
    children: routes,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
