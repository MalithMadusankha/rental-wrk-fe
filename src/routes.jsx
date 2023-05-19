import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "About Us",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Advertisements",
    path: "/advertisements",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Know More",
    path: "/know-more",
    element: <SignUp />,
  },
  {
    icon: DocumentTextIcon,
    name: "Contact Us",
    href: "/contact",
    element: "",
  },
];

export default routes;
