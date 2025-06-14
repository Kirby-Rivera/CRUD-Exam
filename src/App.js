import Login from "views/login/Index";
import Home from "views/home/Index";
import Register from "views/register/Index"
import ProtectedRoute from "helpers/ProtectedRoute";
import Missing from "components/404";
import "App.scss";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />˝
      </Route>

      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
