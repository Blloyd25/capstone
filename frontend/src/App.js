// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CustomerPage from "./pages/HomePage/CustomerPage";
import EmployeePage from "./pages/HomePage/EmployeePage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/searchBar/searchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/customer"
          element={
            <PrivateRoute>
              <CustomerPage/>
            </PrivateRoute>
          }
        />
         <Route
          path="/employee"
          element={
            <PrivateRoute>
              <EmployeePage/>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
