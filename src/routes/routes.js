import { Route,Routes } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import LoginForm from "../features/authentication/components/login";

const routes = (
  <Routes>
    <Route exact path="/" element={<LoginForm />}  />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default routes;