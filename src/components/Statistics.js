import React from "react";

export default function Statistics(props) {
  function discountedItemCount() {
    let discountedItemCount = 0;
    for (let item of props.data) {
      if (item.discounted) {
        discountedItemCount += 1;
      }
    }
    return discountedItemCount;
  }

  function allItemsNames() {
    let allItems = [];
    for (let item of props.data) {
      allItems.push(item.name);
    }
    return allItems;
  }

  function allPrices() {
    let allPrices = [];
    for (let item of props.data) {
      allPrices.push(item.price);
    }
    return allPrices;
  }

  function printArray(items) {
    let names = "";
    // for (let item of items) {
    //   // je index mojega elementa zadnji (items.length -1)
    //   if (items.indexOf(item) === items.length - 1) {
    //     names += ` ${item}`;
    //   } else {
    //     names += ` ${item}, `;
    //   }
    // }
    for (let i = 0; i < items.length; i++) {
      if (i === items.length - 1) {
        names += ` ${items[i]}`;
      } else {
        names += ` ${items[i]}, `;
      }
    }
    return `[${names}]`;
  }

  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <p>
        <span className="statistics-bold">number of items:</span>
        {props.data.length}
      </p>
      <p>
        <span className="statistics-bold">number of discounted items:</span>
        {discountedItemCount()}
      </p>
      <p>
        <span className="statistics-bold">Names of all the items:</span>
        {printArray(allItemsNames())}
      </p>
      <p>
        <span className="statistics-bold">All the prices:</span>
        {printArray(allPrices())}
      </p>
    </div>
  );
}
