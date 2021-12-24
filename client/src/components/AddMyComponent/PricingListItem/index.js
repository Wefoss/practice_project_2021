import React from "react";

const PricingListItem = ({ item, pricing}) => {
  return (
    <li>
      {item}
      <p style={{ display: "none" }}>{pricing[item]}</p>
    </li>
  );
};

export default PricingListItem;
