import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes, { authRouts, secureRouts, profileRouts } from "@/routes";
import { appRoutes } from "./data";

function App() {
  sessionStorage.setItem('isLogged', false);
  sessionStorage.setItem('isCustomer', true);
  sessionStorage.setItem("userData", JSON.stringify({}));

  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <Routes>
        {authRouts.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        {secureRouts.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        {profileRouts.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to={appRoutes.publicRouts.home} replace />} />
      </Routes>
    </>
  );
}

export default App;
