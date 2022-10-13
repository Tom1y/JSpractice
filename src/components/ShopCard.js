import React from "react";
import App from "../App";
import TableRow from "./TableRow";
import ShopRow from "./ShopRow";

export default function ShopCard(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => {
          return (
            <ShopRow
              name={item.name}
              price={item.price}
              discount={item.discounted}
              key={item.id}
              deselectHandler={() => props.deselectHandler(item.id)}
            />
          );
        })}
      </tbody>
    </table>
  );
}
