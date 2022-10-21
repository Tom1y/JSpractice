import React from "react";

export default function ShopRow(props) {
  let discountedPrice = props.price;
  if (props.discount) {
    discountedPrice = props.price / 2;
  }

  return (
    <tr>
      <td className="items">{props.name}</td>
      <td className="price">{discountedPrice}</td>
      <td>
        <button onClick={props.deselectHandler}>Remove Item</button>
      </td>
    </tr>
  );
}
