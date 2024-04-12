import { FaCalendarAlt } from "react-icons/fa"
import img1 from "../assets/p1.png"
import img2 from "../assets/p2.png"
import img3 from "../assets/p3.png"
export const CarData = [
    {   
        id:'1',
        name:"Skoda Superb",
        type:"Hybrid",
        image:img1,
        rate:"499",
        isAvailable:true

    },
    {
        id:"2",
        name:"Skoda Superb",
        type:"Hybrid",
        image:img1,
        rate:"499",
        isAvailable:false

    },
    {
        id:"3",
        name:"Skoda Superb",
        type:"Hybrid",
        image:img2,
        rate:"499",
        isAvailable:true

    },
    {
        id:"4",
        name:"Skoda Superb",
        type:"Hybrid",
        image:img3,
        rate:"499",
        isAvailable:true

    },
    {
        id:"5",
        name:"Skoda Superb",
        type:"Hybrid",
        image:img1,
        rate:"499",
        isAvailable:true

    },
    {
        id:"6",
        name:"Skoda Superb",
        type:"Hybrid",
        image:img2,
        rate:"499",
        isAvailable:true

    },
    {
        id:"7",
        name:"Skoda Superb",
        type:"Hybrid",
        image:img3,
        rate:"499/hour",
        isAvailable:true

    },

]


export const BreadCrumbData = [
    {
        title:"Home",
        path:"/allcars"
    },
    {
        title:"Selectedcar",
        path:"/selectedcars"
    },
    {
        title:"Detail",
        path:"/allcars"
    },
]


export const CalendarData=[
    {
        icon:<FaCalendarAlt fontSize="20"/>,
        label:"Pick-Up :",
        id:"startDate"

    },
    {
        icon:<FaCalendarAlt fontSize="20"/>,
        label:"Drop-of :",
        id:"endDate"

    },
]