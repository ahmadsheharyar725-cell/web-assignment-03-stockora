import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  // 1. FETCH SINGLE PRODUCT
  const fetchProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      setName(data.name);
      setPrice(data.price);
      setCategory(data.category);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // 2. UPDATE PRODUCT
  const handleUpdate = async (e) => {
    e.preventDefault();

    const docRef = doc(db, "products", id);

    await updateDoc(docRef, {
      name,
      price,
      category
    });

    alert("Product Updated Successfully 🚀");
    navigate("/products");
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-4">✏️ Edit Product</h2>

      <form onSubmit={handleUpdate} className="card p-4 shadow-sm">

        <input
          type="text"
          className="form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          className="form-control mb-3"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          className="form-control mb-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button className="btn btn-warning w-100">
          Update Product
        </button>

      </form>

    </div>
  );
}