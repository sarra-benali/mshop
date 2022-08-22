import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Itemcard from "../Itemcard";
import IP from '../../constants/ip'
const Product = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `${IP}/api/products/getAllProducts`,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div >
      {loading && (
        <div>
          <h1>loading...</h1>
        </div>
      )}
      <section className="py-4 container">
      <div className="row col-10 justify-content-center">
      {data.map((product, i) => (
        <Itemcard  img={product.imageProduct} title={product.titleProduct} item={product} price={product.priceProduct} key={i}/>
        ))}
      
      
      </div>
      </section>
    </div>
  );
};

export default Product;
