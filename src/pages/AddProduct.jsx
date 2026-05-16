import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await addDoc(collection(db, "products"), {
        name,
        price,
        category,
        createdAt: new Date()
      });

      setName("");
      setPrice("");
      setCategory("");

      setSuccess("Product added successfully 🚀");
    } catch (error) {
      console.log(error);
      setSuccess("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <div className="container py-4">

      {/* HEADER */}
      <div
        className="p-4 mb-4 rounded-4 text-white shadow"
        style={{
          background: "linear-gradient(135deg, #6366f1, #06b6d4)"
        }}
      >
        <h2 className="fw-bold mb-1">➕ Add New Product</h2>
        <p className="mb-0">
          Create and store inventory items in Firebase
        </p>
      </div>

      {/* FORM CARD */}
      <div className="card border-0 shadow-sm rounded-4 p-4">

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="e.g. iPhone 15"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control rounded-3"
              placeholder="e.g. 150000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Category</label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="e.g. Electronics"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2 rounded-3"
            disabled={loading}
          >
            {loading ? "Saving..." : "Add Product"}
          </button>

        </form>

        {/* STATUS MESSAGE */}
        {success && (
          <div className="mt-3 alert alert-info mb-0 rounded-3">
            {success}
          </div>
        )}

      </div>
    </div>
  );
}