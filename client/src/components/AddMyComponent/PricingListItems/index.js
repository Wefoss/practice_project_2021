import React from "react";
import PricingListItem from "../PricingListItem";

const PricingListItems = ({
  items: { id, pricing, title, price, save },
  items,
}) => {
  const {...rest} = items["main section"];

  const renderResurses = (str) => {
     const  resources = Object.keys(rest[str])
     
          return <div>{resources} <p>{rest['resources'][resources]}</p></div>
  }
  
  const renderPricingItems= (el, id) => {
   return <PricingListItem key={id} pricing={rest} item={el === "resources" ? renderResurses(el) : el} />
  }

  return (
    <article>
      <div>
        <h1>{pricing}</h1>
        <h3>{title}</h3>
        <span>US${price}</span>
        <span>Save ${save}</span>
      </div>
      <ul>
        {Object.keys(rest).map(renderPricingItems)}
      </ul>
    </article>
  );
};

export default PricingListItems;
