import React, { useState } from 'react';
import {
  MdOutlineDashboard,
 
  MdGroups,
  MdLogout,
} from 'react-icons/md';
import { FaUserDoctor } from "react-icons/fa6";
import { FaCcStripe , FaCalendarCheck  , FaNetworkWired , FaQuestionCircle ,FaComments  } from "react-icons/fa";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import {
  BsChevronDown,
 
} from 'react-icons/bs';
import { IoIosDocument } from "react-icons/io";
import { Link } from 'react-router-dom';

const Menus = [
  { title: 'Dashboard', src: 'home', icon: <MdOutlineDashboard /> },
 
  {
    title: 'Invoices',
    
    icon: <FaCcStripe />
    , subMenus: [
      {
        title: 'All Invoices List',
       src:'allinvoices',

        cName: 'sub-nav',
      },
      {
        title: 'Pending Invoices List',
       src:'pendinginvoices',

        cName: 'sub-nav',
      },
      {
        title: 'Completed Invoices List',
        src:'completedinvoices'
      
      },
      {
        title: 'Generate Invoice',
        src:'generateinvoice'
      
      },
      
    ],
    isOpen: false
  },
  {
    title: 'Appointments',
    src: 'Services',
    icon: <FaCalendarCheck />,
    subMenus: [
      {
        title: 'All Appointments List',
        src: 'allappointments',

        cName: 'sub-nav',
      },
      {
        title: 'Pending Appointments List',
        src: 'pendingappointments',

        cName: 'sub-nav',
      },
      {
        title: 'Approved Appointments',
        src: 'approvedappointments',
      },
      {
        title: 'Completed Appointments',
        src: 'completedappointments',
      },
      {
        title: 'Rejected Appointments',
        src: 'rejectedappointments',
      },
      
    ],
    isOpen: false,
    
    
  },
  {
    title: 'Patients',
    src: 'Services',
    icon: <MdGroups />,
    subMenus: [
      {
        title: 'All Patients List',
        src: 'allpatients',

        cName: 'sub-nav',
      },
      {
        title: 'Pending Patients',
        src: 'pendingpatients',

        cName: 'sub-nav',
      },
      {
        title: 'Approved Patients',
        src: 'approvedpatients',
      },
      {
        title: 'Rejected Patients',
        src: 'rejectedpatients',
      },
      
    ],
    isOpen: false,
    
    
  },
  {
    title: 'Physicians',
    src: 'Services',
    icon: <FaUserDoctor />,
    subMenus: [
      {
        title: 'All Physicians List',
        src: '/services/services1',

        cName: 'sub-nav',
      },
      {
        title: 'Pending Physicians',
        src: '/services/services2',

        cName: 'sub-nav',
      },
      {
        title: 'Approved Physicians',
        src: '/services/services3',
      },
      {
        title: 'Rejected Physicians',
        src: '/services/services3',
      },
      
    ],
    isOpen: false,
    
    
  },
  {
    title: 'Products',
    src: 'Services',
    icon: <MdGroups />,
    subMenus: [
      {
        title: 'Products List',
        src: '/services/services1',

        cName: 'sub-nav',
      },
      {
        title: 'Add Product',
        src: '/services/services2',

        cName: 'sub-nav',
      },
      {
        title: 'Recoder Products',
        src: '/services/services3',
      },
      
    ],
    isOpen: false,
    
    
  },
  {
    title: 'Sliding Banners',
    src: 'Services',
    icon: <BiSolidCreditCardAlt />,
    subMenus: [
      {
        title: 'Sliding Banners List',
        src: '/services/services1',

        cName: 'sub-nav',
      },
      {
        title: 'Add Sliding Banners',
        src: '/services/services2',

        cName: 'sub-nav',
      },
      {
        title: 'Recoder Sliding Banners',
        src: '/services/services3',
      },
      
    ],
    isOpen: false,
    
    
  },
  {
    title: 'Services',
    src: 'Services',
    icon: <FaNetworkWired  />,
    subMenus: [
      {
        title: 'Service List',
        src: '/services/services1',

        cName: 'sub-nav',
      },
      {
        title: 'Add Service',
        src: '/services/services2',

        cName: 'sub-nav',
      },
      {
        title: 'Recoder Services',
        src: '/services/services3',
      },
      
    ],
    isOpen: false,
    
    
  },
  {
    title: 'Team Members',
    src: 'Services',
    icon: <MdGroups />,
    subMenus: [
      {
        title: 'Team List',
        src: '/services/services1',

        cName: 'sub-nav',
      },
      {
        title: 'Add Team',
        src: '/services/services2',

        cName: 'sub-nav',
      },
      {
        title: 'Recoder Team',
        src: '/services/services3',
      },
      
    ],
    isOpen: false,
    
    
  },
  {
    title: 'FAQs',
    src: 'Services',
    icon: <FaQuestionCircle  />,
    subMenus: [
      {
        title: 'FAQs List',
        src: '/services/services1',

        cName: 'sub-nav',
      },
      {
        title: 'Add FAQs',
        src: '/services/services2',

        cName: 'sub-nav',
      },
      
      
    ],
    isOpen: false,
    
    
  },
  {
    title: 'Testimonials',
    src: 'Services',
    icon: <FaComments />,
    subMenus: [
      {
        title: 'Testimonials List',
        src: '/services/services1',

        cName: 'sub-nav',
      },
      {
        title: 'Add Testimonials',
        src: '/services/services2',

        cName: 'sub-nav',
      },
    
      
    ],
    isOpen: false,
    
    
  },
  {
    title: 'Content Pages',
    src: 'Services',
    icon: < IoIosDocument/>,
    subMenus: [
      {
        title: 'Home',
        src: '/services/services1',

        cName: 'sub-nav',
      },
      {
        title: 'About Us',
        src: '/services/services2',

        cName: 'sub-nav',
      },
      {
        title: 'Services',
        src: '/services/services3',
      },
      {
        title: 'Our Team',
        src: '/services/services3',
      },
      {
        title: 'Products',
        src: '/services/services3',
      },
      {
        title: 'Contact Us',
        src: '/services/services3',
      }
      
    ],
    isOpen: false,
    
    
  },

  { title: 'Logout', src: 'Logout', icon: <MdLogout /> },
];

const App = () => {
  const [Menu, SetMenu] = useState(Menus)
  const [open, setOpen] = useState(true);
  const setSubMenuOpen = (index) => {
    SetMenu((prevMenus) =>
      prevMenus.map((menu, i) => {
        if (i === index) {
          return { ...menu, isOpen: !menu.isOpen };
        }
        return menu;
      })
    );
  };
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className=" h-full flex items-end justify-end ">
      <button
        className="fixed lg:hidden z-90 bottom-10 right-8 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800   duration-300"
        onClick={toggleSidebar}
      >
        <span class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-6 m-auto"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
            />
          </svg>
        </span>
      </button>

      <div
        className={` ${open ? 'w-50 px-2 ' : 'w-0 '
          } lg:w-72 bg-white-600 h-full   relative duration-500`}
      >
        <ul className="pt-2">
          {Menu.map((Menu, index) => (
            <>
              <li
                key={index}
                className={`flex  rounded-md p-2 font-semibold cursor-pointer hover: text-gray-500 text-xl items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'}  `}
              >
                {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
                <span className="flex-1">  <Link to={Menu.src}>{Menu.title}</Link> </span>
                {Menu.subMenus && (
                  <BsChevronDown
                    onClick={() => setSubMenuOpen(index)}
                    className={`${Menu.isOpen && 'rotate-180'}`}
                  />
                )}
              </li>
              {Menu.subMenus && Menu.isOpen && open && (
                <ul>
                  {Menu.subMenus.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex cursor-pointer  text-md text-gray-500 py-2 px-11 "
                    >
                       <Link to={subMenuItem.src}>{subMenuItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;