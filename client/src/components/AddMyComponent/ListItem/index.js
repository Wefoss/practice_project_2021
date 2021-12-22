import React from "react";
import styles from "./ListItem.module.scss";
import cx from "classnames";
import constants from "../../../constants";

const { BG_ICONS, COLOR_ICONS } = constants;

const fontIcons = {
  "fab fa-whmcs": BG_ICONS.lightRed,
  "fa fa-users": BG_ICONS.lightGreen,
  "fa fa-trademark": BG_ICONS.lightBlue,
};
const colorIcons = {
  [BG_ICONS.lightRed]: COLOR_ICONS.lightRed,
  [BG_ICONS.lightGreen]: COLOR_ICONS.lightGreen,
  [BG_ICONS.lightBlue]: COLOR_ICONS.lightBlue,
};

const ListItem = ({ items: { title, id, descriptions, link, icon } }) => {
  const audienceHover = cx(styles.icon_wrap, {
    [styles.audience_hover]: colorIcons[fontIcons[icon]] === COLOR_ICONS.lightGreen,
    [styles.redbg_redcolor]:
      colorIcons[fontIcons[icon]] === COLOR_ICONS.lightRed && fontIcons[icon] === BG_ICONS.lightRed,
    [styles.greenbg_greencolor]:
      colorIcons[fontIcons[icon]] === COLOR_ICONS.lightGreen && fontIcons[icon] === BG_ICONS.lightGreen,
    [styles.bluebg_bluecolor]:
      colorIcons[fontIcons[icon]] === COLOR_ICONS.lightBlue && fontIcons[icon] === BG_ICONS.lightBlue,
  });

  return (
    <article className={styles.listitem}>
      <div className={audienceHover}>
        <i className={icon}></i>
      </div>
      <h2>{title}</h2>
      <p>
        {descriptions} <a href={link}>Learn More</a>
      </p>
    </article>
  );
};

export default ListItem;
