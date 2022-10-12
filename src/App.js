import React, { useState, useEffect } from "react";
import style from "./App.css";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://6346c1f3745bd0dbd3859bdb.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  function sum() {
    let add = 0;
    for (let item of data) {
      add += item.price;
    }
    // for (let i = 0; i < data.length; i++) {
    //   add += data[i].price;
    // }
    return add;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
          <tr>
            <td>Sum:</td>
            <td>{sum()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
