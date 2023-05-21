import {
  Home,
  Profile,
  Login,
  SignUp,
  SignUpType,
  AppType,
  ChatBot,
  CustomerPage,
  ServiceProviderPage,
  ProfileView,
  DemandArea,
  Wheather,
} from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { userType, appRoutes } from "./data";

export const routes = [
  {
    icon: HomeIcon,
    name: "Home",
    path: appRoutes.publicRouts.home,
    element: <Home />,
    isInfoRoute: false,
  },
  {
    icon: UserCircleIcon,
    name: "About Us",
    path: appRoutes.publicRouts.about,
    element: "",
    isInfoRoute: true,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Advertisements",
    path: appRoutes.publicRouts.advertisements,
    element: "",
    isInfoRoute: false,
  },
  {
    icon: UserPlusIcon,
    name: "Know More",
    path: appRoutes.publicRouts.knowMore,
    element: "",
    isInfoRoute: true,
  },
  {
    icon: DocumentTextIcon,
    name: "Contact Us",
    path: appRoutes.publicRouts.contact,
    element: "",
    isInfoRoute: true,
  },
];

export const authRouts = [
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Login",
    path: appRoutes.authRouts.login,
    element: <Login />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: appRoutes.authRouts.signUp,
    element: <SignUpType />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up Customer",
    path: appRoutes.authRouts.signUpCustomer,
    element: <SignUp type={userType.customer} />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up Worker",
    path: appRoutes.authRouts.signUpWorker,
    element: <SignUp type={userType.worker} />,
  },
];

export const secureRouts = [
  {
    icon: ArrowRightOnRectangleIcon,
    name: "App Type",
    path: appRoutes.secureRouts.appType,
    element: <AppType />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Chat Bot",
    path: appRoutes.secureRouts.chatbot,
    element: <ChatBot />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Customer",
    path: appRoutes.secureRouts.customer,
    element: <CustomerPage />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Service Provider",
    path: appRoutes.secureRouts.serviceProvider,
    element: <ServiceProviderPage />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Demand Areas",
    path: appRoutes.secureRouts.demandArea,
    element: <DemandArea />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Wheather",
    path: appRoutes.secureRouts.wheather,
    element: <Wheather />,
  },
];

export const profileRouts = [
  {
    icon: ArrowRightOnRectangleIcon,
    name: "My Profile",
    path: appRoutes.profileRouts.myProfile,
    element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Service Provider View",
    path: appRoutes.viewProfileRouts.serviceProviderView,
    element: <ProfileView />,
  },
];

export default routes;
