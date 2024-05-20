import Footer from "./components/Footer";
import GenerateInvoice from "./components/GenerateInvoice";
import Header from "./components/Header";

import PasswardSetting from "./components/PasswardSetting";

import Navbar from "./components/Navbar";
import AllInvoices from "./pages/AllInvoices";
import CompletedInvoices from "./pages/CompletedInvoices";


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
import ApprovedPhysicians from "./pages/ApprovedPhysicians";
import RejectedPhysicians from "./pages/RejectedPhysicians";
import AllProducts from "./pages/AllProducts";
import ReorderProducts from "./pages/ReorderProducts";
import SlidingBanners from "./pages/SlidingBanners";
import ReorderSlidingBanner from "./pages/ReorderSlidingBanner";


import Home from "./pages/Home"
import PendingInvoices from "./pages/PendingInvoices"
import Login from "./pages/login"

import AllPatients from "./pages/AllPatients"
import PendingPatients from "./pages/PendingPatients"
import ApprovedPatients from "./pages/ApprovedPatients"
import RejectedPatients from "./pages/RejectedPatients"
import AllAppointments from "./pages/AllAppointments"
import PendingAppointments from "./pages/PendingAppointments"
import CompAppList from "./pages/CompAppList"
import ApprovedAppointments from "./pages/ApprovedAppointments"
import RejectedAppointments from "./pages/RejectedAppointments"

import ServicesList from "./pages/ServicesList";
import ReorderServices from "./pages/ReorderServices";
import TeamMembersList from "./pages/TeamMembersList";
import ReorderTeamMembers from "./pages/ReorderTeamMembers";
import FAQs from "./pages/FAQs";
import AddFAQs from "./pages/AddFAQs";
import Testimonial from "./pages/Testimonial";
import AddTestimonial from "./pages/AddTestimonial";

import Tiny from "./components/SlidingBanTiny";
import SlidingBanTiny from "./components/SlidingBanTiny";
import AddSlidingBan from "./pages/AddSlidingBan";

import AddService from "./pages/AddPro";
import AddPro from "./pages/AddPro";
import ServiceTiny from "./components/AddSerTiny";
import AddSer from "./pages/AddSer";
import AddTeamMember from "./pages/AddTeamMember";


const AuthenticatedRoutes = () => {
  return (
<>
<div className="overflow-hidden">
      <Navbar/>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-100 ">
          <Outlet/>
         
        </main>
        
      </div>
      <Footer />
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
      {
        path: "/approvedPhysicians",
        element: <ApprovedPhysicians/>,
      },
      {
        path: "/rejectedPhysicians",
        element: <RejectedPhysicians/>,
      },
      {
        path: "/allproducts",
        element: <AllProducts/>,
      },
      {

        path: "/reorderproducts",
        element: <ReorderProducts/>,
      },
      {
        path: "/slidingbanners",
        element: <SlidingBanners/>,
      },
      {
        path: "/reorderslidingbanners",
        element: <ReorderSlidingBanner/>,
      },
    {  
        path: "/allpatients",
        element: <AllPatients />
      },
      {
        path: "/pendingpatients",
        element: <PendingPatients />
      },
      {
        path: "/approvedpatients",
        element: <ApprovedPatients />
      },
      {
        path: "/rejectedpatients",
        element: <RejectedPatients />
      },
      {
        path: "/allappointments",
        element: <AllAppointments />
      },
      {
        path: "/pendingappointments",
        element: <PendingAppointments />
      },
      {
        path: "/completedappointments",
        element: <CompAppList />
      },
      {
        path: "/approvedappointments",
        element: <ApprovedAppointments />
      },
      {
        path: "/rejectedappointments",
        element: <RejectedAppointments />
      },
      {
        path: "/serviceslist",
        element: <ServicesList/>
      },
      {
        path: "/reorderservices",
        element: <ReorderServices/>
      },
      {
        path: "/teammemberslist",
        element: <TeamMembersList/>
      },
      {
        path: "/reorderteammembers",
        element: <ReorderTeamMembers/>
      },
      {
        path: "/faqs",
        element: <FAQs/>
      },
      {
        path: "/addfaqs",
        element: <AddFAQs/>
      },
      {
        path: "/testimonial",
        element: <Testimonial/>
      },
      {
        path: "/addtestimonial",
        element: <AddTestimonial/>
      },
        {
        path: "/addslidingbanner",
        element: <AddSlidingBan/>
      },
      {
        path: "/addpro",
        element: <AddPro/>

      },
      {
        path: "/addser",
        element: <AddSer/>

      },
      {
        path: "/addteam",
        element: <AddTeamMember/>

      },
    ]

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
