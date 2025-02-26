import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate to="/about" state={{ isFirstVisit: true }} replace />
        }
      />
      <Route path="/:sectionId" element={<HomePage />} />
    </Routes>
  );
};

export default App;
