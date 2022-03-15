import MobileNav from "./MobileNav";
import Home from "./MobileScreens/Home";
import Institutes from "./MobileScreens/Institutes";
import Dashboard from "./MobileScreens/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Courses from "./MobileScreens/Courses";
import Approval from "./MobileScreens/Approval";

export default function Mobile() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/institutes" element={<Institutes />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/approval" element={<Approval />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        <MobileNav />
      </Router>
    </>
  );
}
