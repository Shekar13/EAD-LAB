import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Counter from "./Counter";
import Greeting from "./Greeting";
import PortalDemo from "./PortalDemo";
import SimplePagination from "./SimplePagination";
import "./App.css";

// Navbar — only for Home, About, Contact
function Navbar() {
  const location = useLocation();
  const showNavbar = ["/", "/about", "/contact"].includes(location.pathname);

  if (!showNavbar) return null;

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">🏠 Home</Link>
      <Link to="/about" className="nav-link">📖 About</Link>
      <Link to="/contact" className="nav-link">📞 Contact</Link>
      <Link to="/counter" className="nav-link">🔢 Counter</Link>
      <Link to="/greeting" className="nav-link">👋 Greeting</Link>
      <Link to="/portal" className="nav-link">🚪 Portal</Link>
      <Link to="/pagination" className="nav-link">📄 Pagination</Link>
    </nav>
  );
}

function Layout({ children }) {
  const location = useLocation();
  const showHeader = ["/", "/about", "/contact"].includes(location.pathname);

  return (
    <div className={showHeader ? "app-container" : "fullpage"}>
      {showHeader && (
        <>
          <h1 className="title">React Applications</h1>
          <Navbar />
        </>
      )}
      <main style={showHeader ? { width: '100%', display: 'flex', justifyContent: 'center' } : {}}>
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* With Navbar */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Fullscreen pages */}
          <Route path="/counter" element={<Counter />} />
          <Route path="/greeting" element={<Greeting name="Shekar" />} />
          <Route path="/portal" element={<PortalDemo />} />
          <Route path="/pagination" element={<SimplePagination />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;