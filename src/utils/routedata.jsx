import Dashboard from "../components/Dashboard";
import Approval from "../components/Approval";
import Manage from "../components/Manage";
import AllCars from "../pages/allCars/AllCars";
import BookCar from "../pages/bookCar/Bookcar";
import SelectedCar from "../pages/selectedCar/selectedCar";

export const routesinfo = [
    {
        path:"/dashboard",elementname:<Dashboard/>
    },
    {
        path:"/approval",elementname:<Approval/>
    },
    {
        path:"/manage",elementname:<Manage/>
    },
    {
        path:"/allcars",elementname:<AllCars/>
    },
    {
        path:"/selectedcars",elementname:<SelectedCar/>
    },
    {
        path:"/bookcar",elementname:<BookCar/>
    },
    
]

export const menudata = [
    {   icon:"MdDashboard",
        label:"DASHBOARD",
        path:"/dashboard"
    },
    {
        icon:"MdFactCheck",
        label:"APPROVAL",
        path:"/approval"
    },
    {
        icon:"MdFactCheck",
        label:"MANAGE",
        path:"/manage"
    },
    {
        icon:"MdFactCheck",
        label:"CARS",
        path:"/allcars"
    },

]