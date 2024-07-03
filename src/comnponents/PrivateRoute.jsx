import { Navigate, Outlet } from "react-router-dom";
import { useStoreContext } from "../contextApi/ContextApi";

export default function PrivateRoutes({ publicPage }) {
  const { token } = useStoreContext();

  if (publicPage) {
    return token ? <Navigate to="/dashboard" /> : <Outlet />;
  }

  return !token ? <Navigate to="/login" /> : <Outlet />;
}
