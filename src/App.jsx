import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./comnponents/Navbar";
import Login from "./comnponents/Login";
import Register from "./comnponents/Register";
import About from "./comnponents/About";
import LandinPage from "./comnponents/LandinPage";
import { Toaster } from "react-hot-toast";
import Footer from "./comnponents/Footer";
import PrivateRoutes from "./comnponents/PrivateRoute";
import ErrorPage from "./comnponents/ErrorPage";
const DashBoardLayout = React.lazy(() =>
  import("./comnponents/Dashboard/DashBoardLayout")
);
const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Navbar />
        <Toaster position="bottom-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<LandinPage />} />

          <Route path="/" element={<PrivateRoutes publicPage={false} />}>
            <Route path="/dashboard" element={<DashBoardLayout />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<PrivateRoutes publicPage={true} />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/error" element={<ErrorPage />} />
          <Route
            path="*"
            element={
              <ErrorPage message=" We can't seem to find the page you're looking for" />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
};

export default App;
