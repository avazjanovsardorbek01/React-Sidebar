import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Cars from "./components/cars/Cars";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="cars" element={<Cars />} />
      </Routes>
    </>
  );
};

export default App;
