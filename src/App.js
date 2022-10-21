import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
import ShopCard from "./components/ShopCard";

function App() {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetch("https://6346c1f3745bd0dbd3859bdb.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  function selectItem(id) {
    let selectedItem = {};
    for (let item of data) {
      if (id === item.id) {
        selectedItem = item;
        break;
      }
    }

    var newData = [...data];
    newData.splice(newData.indexOf(selectedItem), 1);
    setData(newData);

    setBasket((prevBasket) => {
      return [...prevBasket, selectedItem];
    });
  }

  function deselectItem(id) {
    let selectedItem = {};
    for (let item of basket) {
      if (id === item.id) {
        selectedItem = item;
        break;
      }
    }

    var newBasket = [...basket];
    newBasket.splice(newBasket.indexOf(selectedItem), 1);
    setBasket(newBasket);

    setData((prevData) => {
      return [...prevData, selectedItem];
    });
  }

  return (
    <div>
      <h1>Look at all this prices</h1>
      <div className="tables">
        <Table data={data} selectHandler={selectItem} />
        {basket.length === 0 ? (
          <h2>add items to your shoping cart</h2>
        ) : (
          <div>
            <h2>your shopping cart</h2>
            <ShopCard data={basket} deselectHandler={deselectItem} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
