import { Home, Profile, Login, SignUp, SignUpType } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { userType } from "./data";

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
    element: "",
  },
  {
    icon: UserPlusIcon,
    name: "Know More",
    path: "/know-more",
    element: "",
  },
  {
    icon: DocumentTextIcon,
    name: "Contact Us",
    path: "/contact",
    element: "",
  },
];

export const authRouts = [
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUpType />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "/sign-up-customer",
    element: <SignUp type={userType.customer} />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "/sign-up-worker",
    element: <SignUp type={userType.worker} />,
  },
];

export default routes;
