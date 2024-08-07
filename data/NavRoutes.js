import { TiHome, TiInfoLarge } from "react-icons/ti";
import { FaLaptopCode } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export const NavRoutes = [
  {
    title: "HOME",
    route: "/",
    icon: <TiHome />,
  },
  {
    title: "ABOUT",
    route: "/about",
    icon: <TiInfoLarge />,
  },
  {
    title: "WORK",
    route: "/work",
    icon: <FaLaptopCode />,
  },
  {
    title: "CONTACT",
    route: "/contact",
    icon: <MdAlternateEmail />,
  },
];
