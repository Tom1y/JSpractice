import React from "react";

export default function ShopRow(props) {
  return (
    <tr>
      <td className="items">{props.name}</td>
      <td className="price">{props.price}</td>
      <td>
        <button onClick={props.deselectHandler}>Remove Item</button>
      </td>
    </tr>
  );
}
