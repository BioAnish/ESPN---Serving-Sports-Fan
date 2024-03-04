"use client";
import React, { useState } from "react";
import style from "./Tabs.module.scss";
import { ITabsProps } from "./Tabs.types";

const Tabs = ({ tabs }: ITabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <nav className={style.tabs__nav}>
        <ul className={style.tabs__list}>
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={`${style.tabs__list__item} ${
                activeTab === tab.name && style.tabs__list__item__active
              }`}
            >
              <button
                className={style.tabs__link}
                onClick={() => handleTabClick(tab.name)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className={style.tabContent}>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            style={{ display: activeTab === tab.name ? "block" : "none" }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
