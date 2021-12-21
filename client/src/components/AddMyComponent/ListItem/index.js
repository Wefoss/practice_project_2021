import React from "react";
import styles from "./ListItem.module.scss";

const fontIcons = {
  "fab fa-whmcs": "#f6e7e6",
  "fa fa-users": "#dff5f2",
  "fa fa-trademark": "#e4edfb",
};
const colorIcons = {
  "#f6e7e6": "red",
  "#dff5f2": "green",
  "#e4edfb": "blue",
};

const ListItem = ({ items: { title, id, descriptions, link, icon } }) => {
  return (
    <article className={styles.listitem}>
      <div
        className={styles.icon_wrap}
        style={{
          backgroundColor: `${fontIcons[icon]}`,
          color: `${colorIcons[fontIcons[icon]]}`,
        }}
      >
        <i class={icon}></i>
      </div>
      <h2>{title}</h2>
      <p>
        {descriptions} <a href={link}>Learn More</a>
      </p>
    </article>
  );
};

export default ListItem;
