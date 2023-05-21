export const appRoutes = {
    publicRouts: {
      home: "/home",
      about: "/about",
      advertisements: "/advertisements",
      knowMore: "/know-more",
      contact: "/contact",
    },
    authRouts: {
      login: "/login",
      signUp: "/sign-up",
      signUpCustomer: "/sign-up-customer",
      signUpWorker: "/sign-up-worker",
    },
    secureRouts: {
      appType: "/app-type",
      chatbot: "/chatbot",
      customer: "/customer",
      serviceProvider: "/service-provider",
      demandArea: "/demand-area",
    },
    profileRouts: {
      myProfile: "/profile",
      editProfile: "/edit-profile",
      inbox: "/inbox",
      logout: "/home",
    },
    viewProfileRouts: {
      serviceProviderView: "/service-provider-profile",
    },
};
  
  export default appRoutes;