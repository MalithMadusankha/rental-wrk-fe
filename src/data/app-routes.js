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
    },
    profileRouts: {
      myProfile: "/app-type",
      editProfile: "/chatbot",
      inbox: "/inbox",
      logout: "/home",
    },
};
  
  export default appRoutes;