import Login from "views/login/Index";
import Post from "views/post/Index";
import Register from "views/register/Index";
import ProtectedRoute from "helpers/ProtectedRoute";
import Missing from "components/404";
import AuthLayout from "components/AuthLayout";
import MainLayout from "components/MainLayout";
import "App.scss";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/post" element={<Post />} />
        </Route>
      </Route>

      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
