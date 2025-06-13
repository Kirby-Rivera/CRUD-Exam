import axios from "api/axios";
import { cookies } from "helpers/CookieHelper";

export async function handleLogIn(username, password, navigate, location) {
  try {
    const response = await axios.post(
      "/auth/login",
      JSON.stringify({ email: username, password: password }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    cookies.set("SESSION_COOKIE", response.data.data.token);
    navigate(location.state?.from?.pathname || "/home", { replace: true });
  } catch (error) {
    if (!error?.response) {
      console.log("No Server Response");
    } else if (error.response?.status === 400) {
      console.log("Missing Username or Password");
    } else if (error.response?.status === 401) {
      console.log("Unauthorized");
    } else {
      console.log("Login Failed");
    }
  }
}
