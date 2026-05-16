import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));

    setProducts(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
    );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  return (
    <div className="container py-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">📦 Products</h2>

        <Link to="/add-product" className="btn btn-primary">
          + Add Product
        </Link>
      </div>

      {/* GRID */}
      <div className="row g-3">

        {products.map((item) => (
          <div className="col-md-4" key={item.id}>

            {/* PRODUCT CARD (FIXED) */}
            <Link
              to={`/product/${item.id}`}
              className="text-decoration-none"
            >
              <div
                className="card shadow-sm p-3 h-100 border-0 rounded-4 product-card"
              >

                <h5 className="fw-bold text-dark">
                  {item.name}
                </h5>

                <p className="text-success fw-semibold">
                  Rs {item.price}
                </p>

                <span className="badge bg-primary mb-3 w-fit">
                  {item.category}
                </span>

                <small className="text-muted">
                  Click to view details →
                </small>

              </div>
            </Link>

            {/* ACTION BUTTONS */}
            <div className="d-flex gap-2 mt-2">

              <Link
                to={`/edit/${item.id}`}
                className="btn btn-warning btn-sm w-50"
              >
                Edit
              </Link>

              <button
                className="btn btn-danger btn-sm w-50"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}