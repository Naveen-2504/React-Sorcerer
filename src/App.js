import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Draft } from "./views/Draft";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Draft />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
