import React from "react";
import "./TableRow.css";

export default function TableRow(props) {
  function priceColorClass() {
    if (props.price > 50000) {
      return "price-red";
    } else {
      return "price-green";
    }
  }

  function discount() {
    return props.discount ? `${props.price / 2}` : "no";
  }

  return (
    <tr className={props.discount ? "discount" : null}>
      <td className="items">{props.name}</td>
      <td className={`price ${priceColorClass()}`}>{props.price}</td>
      <td>{discount()}</td>
    </tr>
  );
}
