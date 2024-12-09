"use client";
import {useState,useEffect} from "react";
 const ProductsList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAlProducts = async () => {
      try {
        const res =await fetch("/api/products");
        const data = await res.json();
            setProducts(data);
      } catch (error) {
        console.log("error to get data", error);
      }
    };
    getAlProducts();
  }, []);
  return (
    <div>
    <h1>Products List</h1>
    {products.length === 0 ? (
      <p>No products available</p>
    ) : (
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    )}
  </div>
  );
};
export default ProductsList;
