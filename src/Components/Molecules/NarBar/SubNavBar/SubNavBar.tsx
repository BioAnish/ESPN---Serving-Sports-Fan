"use client";

import React, { useState } from "react";
import style from "./SubNavBar.module.scss";
import { SubNavTab } from "./SubNavBar.types";

interface SubNavBarProps {
  logoSrc: string;
  title: string;
  subNavTabs: SubNavTab[]; // Using the SubNavTab interface for defining subNavTabs
}

const SubNavBar: React.FC<SubNavBarProps> = ({
  logoSrc,
  title,
  subNavTabs,
}) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveItem(index === activeItem ? null : index);
  };
  return (
    <div>
      <nav className={style.navBar}>
        <div className={style.navSecondary}>
          <div className={style.sportsLogo}>
            <a>
              <img src={logoSrc} alt={title} />
              <span>{title}</span>
            </a>
          </div>
          <div className={style.divider}></div>
          <div className={style.navigationTab}>
            <ul>
              {subNavTabs.map((tab, index) => (
                <li key={index} onClick={() => handleItemClick(index)}>
                  <a className={index === activeItem ? style.active : ""}>
                    {tab.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SubNavBar;
