import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://6346c1f3745bd0dbd3859bdb.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      <h1>Look at all this prices</h1>
      <Table data={data} />
    </div>
  );
}

export default App;
