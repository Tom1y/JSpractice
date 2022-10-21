import React from "react";
import TableRow from "./TableRow";

export default function Table(props) {
  function sum() {
    let add = 0;
    for (let item of props.data) {
      add += item.price;
    }
    // for (let i = 0; i < data.length; i++) {
    //   add += data[i].price;
    // }
    return add;
  }

  return (
    <table>
      <thead>
        <tr className="header-title">
          <th>Product</th>
          <th>Price</th>
          <th>Discount</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => {
          return (
            <TableRow
              name={item.name}
              price={item.price}
              discount={item.discounted}
              key={item.id}
              selectHandler={() => props.selectHandler(item.id)}
            />
          );
        })}
        <tr>
          <td>Sum:</td>
          <td className="sum">{sum()}</td>
        </tr>
      </tbody>
    </table>
  );
}
