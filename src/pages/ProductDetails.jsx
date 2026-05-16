import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProduct = async () => {
    try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      } else {
        setError("Product not found");
      }
    } catch (err) {
      console.log(err);
      setError("Failed to load product");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h4>Loading product...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <h4 className="text-danger">{error}</h4>
        <Link to="/products" className="btn btn-primary mt-3">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">

      {/* HEADER */}
      <div
        className="p-4 rounded-4 text-white shadow"
        style={{
          background: "linear-gradient(135deg, #6366f1, #06b6d4)"
        }}
      >
        <h2 className="fw-bold">📦 Product Details</h2>
        <p className="mb-0">Full information of selected product</p>
      </div>

      {/* CARD */}
      <div className="card mt-4 p-4 shadow-sm border-0 rounded-4">

        <h3 className="fw-bold">{product.name}</h3>

        <h5 className="text-success mt-2">
          💰 Price: Rs {product.price}
        </h5>

        <span className="badge bg-dark mt-2 w-fit">
          {product.category}
        </span>

        <p className="text-muted mt-3">
          Product ID: {product.id}
        </p>

        <Link to="/products" className="btn btn-primary mt-3">
          ← Back to Products
        </Link>

      </div>
    </div>
  );
}