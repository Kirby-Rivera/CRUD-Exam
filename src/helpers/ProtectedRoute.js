import { useLocation, Navigate, Outlet } from "react-router";
import { cookies } from "./CookieHelper";

function ProtectedRoute() {
  const auth = cookies.get("SESSION_COOKIE");
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default ProtectedRoute;
