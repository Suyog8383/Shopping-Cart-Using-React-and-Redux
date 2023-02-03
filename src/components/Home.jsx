import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddCart } from "../reducer/cartSystem";
import NavBar from "./NavBar";

function Home() {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setData(data.data));
  }, []);

  // const handleClick = (item) => {
  //   console.log("@SN ");
  //   setCartData([...cartData, [item.title, item.price, item.image]]);
  //   localStorage.setItem("cart", JSON.stringify(cartData));
  // };

  const dispatch = useDispatch();
  return (
    <>
      <NavBar />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={item.image}
                  alt="Card image cap"
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h3>{item.price}</h3>
                  <button onClick={() => dispatch(AddCart(item))}>BUY</button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;
