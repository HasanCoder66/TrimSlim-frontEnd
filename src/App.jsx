import Footer from "./components/Footer";
import GenerateInvoice from "./components/GenerateInvoice";
import Header from "./components/Header";

import PasswardSetting from "./components/PasswardSetting";

import Navbar from "./components/Navbar";
import AllInvoices from "./pages/AllInvoices";
import CompletedInvoices from "./pages/CompletedInvoices";

import Home from "./pages/Home";
import PendingInvoices from "./pages/PendingInvoices";
import Login from "./pages/login";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Sidebar from ".././src/components/Sidebar";
import AllPhysicians from "./pages/AllPhysicians";
import PendingPhysicians from "./pages/PendingPhysicians";


const AuthenticatedRoutes = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 bg-gray-100 ">
            <Outlet />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

// Define routes for unauthenticated users without layout
const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* <Route path='/home' element={<Home />} />
      <Route path='/home/footer' element={<PasswardSetting />} />
      <Route path='/home/generateInvoice' element={<GenerateInvoice />} />
      <Route path='/home/generateInvoice/footer' element={<PasswardSetting />} /> */}
    </Routes>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedRoutes />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/allinvoices",
        element: <AllInvoices />,
      },
      {
        path: "/pendinginvoices",
        element: <PendingInvoices />,
      },
      {
        path: "/completedinvoices",
        element: <CompletedInvoices />,
      },
      {
        path: "/accountsetting",
        element: <PasswardSetting />,
      },
      {
        path: "/generateinvoice",
        element: <GenerateInvoice />,
      },
      {
        path: "/allPhysicians",
        element: <AllPhysicians />,
      },
      {
        path: "/pendingPhysicians",
        element: <PendingPhysicians />,
      },
    ],
  },
  {
    path: "/login",
    element: <UnauthenticatedRoutes />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
