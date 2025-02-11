import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/" element={<Navigate to="/about" />} />
    </Routes>
  );
};

export default App;
