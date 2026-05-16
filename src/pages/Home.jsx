export default function Home() {
  return (
    <div className="container py-4">

      {/* HERO SECTION */}
      <div className="p-5 rounded-4 text-white shadow-lg"
        style={{
          background: "linear-gradient(135deg, #4f46e5, #06b6d4)"
        }}
      >
        <h1 className="fw-bold">Welcome to Stockora 🚀</h1>
        <p className="mb-0">
          Smart Inventory Management System built with React + Firebase
        </p>
      </div>

      {/* CARDS */}
      <div className="row mt-4 g-3">

        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-3 rounded-4">
            <h5>📦 Products</h5>
            <p className="text-muted">Manage all inventory items</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-3 rounded-4">
            <h5>➕ Add Product</h5>
            <p className="text-muted">Create new inventory items</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-3 rounded-4">
            <h5>⚡ Fast CRUD</h5>
            <p className="text-muted">Powered by Firebase Firestore</p>
          </div>
        </div>

      </div>

    </div>
  );
}