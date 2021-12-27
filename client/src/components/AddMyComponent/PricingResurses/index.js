import React from 'react';
import styles from './PricingResurses.module.scss'

const PricingResurses = ({str, items}) => {
    const resources = Object.keys(items[str]);
           
    return (
      <ul className={styles.resources}>
        {resources.map((el, id) => (
          <li key={id}>
            <p>
              <i style={{ fontSize: "smaller" }} className="fas fa-check"></i>{" "}
              {el} {el === 'Audience Testing(Up to 6 Names)' && <a href="#">View Sample Report</a>}
            </p>
            <p id={id} className={styles.resources_info}>
              {items[str][el]}
            </p>
          </li>
        ))}
      </ul>
    );
  };

export default PricingResurses;
