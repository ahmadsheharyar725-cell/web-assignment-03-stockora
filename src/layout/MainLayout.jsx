import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Row, Col, Nav, Navbar } from "react-bootstrap";

export default function MainLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div style={{ width: "100vw", overflowX: "hidden" }}>

      <Row className="g-0 m-0">

        {/* SIDEBAR */}
        <Col
          md={2}
          className={`min-vh-100 text-white p-0 sidebar ${open ? "open" : ""}`}
          style={{
            background: "linear-gradient(180deg, #0f172a, #111827, #0b1220)",
            boxShadow: "6px 0 25px rgba(0,0,0,0.3)"
          }}
        >

          {/* LOGO */}
          <div
            className="text-center p-3"
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)"
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/869/869636.png"
              alt="logo"
              width="45"
            />

            <h5 className="mt-2 mb-0 fw-bold">Stockora</h5>
            <small style={{ color: "#94a3b8" }}>
              Smart Inventory System
            </small>
          </div>

          {/* NAVIGATION */}
          <Nav className="flex-column p-3 gap-2">

            <Nav.Link
              as={Link}
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-3 px-3 py-2 nav-item"
              style={{
                color: "#cbd5e1",
                background: isActive("/") ? "rgba(99,102,241,0.25)" : "transparent"
              }}
            >
              🏠 Dashboard
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/products"
              onClick={() => setOpen(false)}
              className="rounded-3 px-3 py-2 nav-item"
              style={{
                color: "#cbd5e1",
                background: isActive("/products") ? "rgba(99,102,241,0.25)" : "transparent"
              }}
            >
              📦 Products
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/add-product"
              onClick={() => setOpen(false)}
              className="rounded-3 px-3 py-2 nav-item"
              style={{
                color: "#cbd5e1",
                background: isActive("/add-product") ? "rgba(99,102,241,0.25)" : "transparent"
              }}
            >
              ➕ Add Product
            </Nav.Link>

          </Nav>

        </Col>

        {/* MAIN AREA */}
        <Col
          md={10}
          className="min-vh-100 p-0"
          style={{
            background: "#0b1220"
          }}
        >

          {/* MOBILE NAVBAR */}
          <Navbar
            className="d-md-none px-3 shadow-sm"
            style={{
              background: "#0f172a"
            }}
            variant="dark"
          >

            <button
              onClick={() => setOpen(!open)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "24px"
              }}
            >
              ☰
            </button>

            <Navbar.Brand className="ms-3 fw-bold">
              Stockora
            </Navbar.Brand>

          </Navbar>

          {/* CONTENT */}
          <div className="p-4">
            <Outlet />
          </div>

        </Col>

      </Row>
    </div>
  );
}