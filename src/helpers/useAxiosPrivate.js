import { axiosPrivate } from "api/axios";
import { useEffect } from "react";
import { cookies } from "./CookieHelper";
import { useNavigate, useLocation } from "react-router";
import { useLogout } from "./useLogout";

function useAxiosPrivate() {
  const auth = cookies.get("SESSION_COOKIE");
  const { logout } = useLogout();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      function (config) {
        config.headers["Authorization"] = `Bearer ${auth}`;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      function (response) {
        return response;
      },

      function (error) {
        const prevRequest = error?.config;

        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;

          navigate(location.state?.from?.pathname || "/", {
            replace: true,
          });
          logout();
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth]);

  return axiosPrivate;
}

export default useAxiosPrivate;
