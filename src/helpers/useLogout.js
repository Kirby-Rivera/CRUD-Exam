import { cookies } from "./CookieHelper";
import { useNavigate, useLocation } from "react-router";

export function useLogout() {
  const navigate = useNavigate();
  const location = useLocation();

  function logout() {
    cookies.remove("SESSION_COOKIE");
    cookies.remove("USER_ID");

    navigate(location.state?.from?.pathname || "/", { replace: true });
  }

  return { logout };
}
