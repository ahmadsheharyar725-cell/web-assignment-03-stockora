import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default function MainLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="app-wrapper">

      {/* OVERLAY (mobile only) */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "open" : ""}`}>

        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/869/869636.png"
            alt="logo"
          />
          <h3>Stockora</h3>
        </div>

        <nav>

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={isActive("/") ? "active" : ""}
          >
            🏠 Dashboard
          </Link>

          <Link
            to="/products"
            onClick={() => setOpen(false)}
            className={isActive("/products") ? "active" : ""}
          >
            📦 Products
          </Link>

          <Link
            to="/add-product"
            onClick={() => setOpen(false)}
            className={isActive("/add-product") ? "active" : ""}
          >
            ➕ Add Product
          </Link>

        </nav>

      </div>

      {/* MAIN AREA */}
      <div className="main">

        {/* MOBILE TOP BAR */}
        <Navbar className="mobile-nav d-md-none">
          <button onClick={() => setOpen(true)}>☰</button>
          <span>Stockora</span>
        </Navbar>

        <div className="content">
          <Outlet />
        </div>

      </div>

    </div>
  );
}