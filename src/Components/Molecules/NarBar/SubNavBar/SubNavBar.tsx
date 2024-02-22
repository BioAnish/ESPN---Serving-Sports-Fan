"use client";

import React, { useState } from "react";
import style from "./SubNavBar.module.scss";
import { SubNavTab } from "./SubNavBar.types";
import SharedData from "@/Utils/SharedData";
import DropdownMenu from "@/Components/Atoms/DropdownMenu/DropdownMenu";
import { usePathname } from "next/navigation";

interface SubNavBarProps {
  logoSrc: string;
  title: string;
  subNavTabs: SubNavTab[];
}

const SubNavBar: React.FC<SubNavBarProps> = ({
  logoSrc,
  title,
  subNavTabs,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };
  const path = usePathname()
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
            <ul className={style.navigationTab__ul}>
              {subNavTabs.map((tab, index) => (
                <li
                  className={style.navigationTab__li}
                  key={index}
                  onClick={() => handleItemClick(index)}
                >
                  <a href={tab.url} className={`${style.navigationTab__label} ${path === tab.url ? style.active : ''}`}>
                    {tab.label}
                  </a>
                  {(tab.label === "Tables" ||
                    tab.label === "Teams" ||
                    tab.label === "Transfers" ||
                    tab.label === "Leagues & Cups" ||
                    tab.label === "More") && (
                    <span className={style.dropdownArrow}></span>
                  )}
                  {tab.label === "Tables" && (
                    <div className={style.dropdownArrowContent}>
                      <DropdownMenu
                        items={
                          SharedData.soccerTabs[0].subNavTabs.find(
                            (subTab) => subTab.type === "tables"
                          )!.subtypes
                        }
                      />
                    </div>
                  )}
                  {tab.label === "Teams" && (
                    <div className={style.dropdownArrowContent}>
                      <DropdownMenu
                        items={
                          SharedData.soccerTabs[0].subNavTabs.find(
                            (subTab) => subTab.type === "teams"
                          )!.subtypes
                        }
                      />
                    </div>
                  )}
                  {tab.label === "Transfers" && (
                    <div className={style.dropdownArrowContent}>
                      <DropdownMenu
                        items={
                          SharedData.soccerTabs[0].subNavTabs.find(
                            (subTab) => subTab.type === "transfers"
                          )!.subtypes
                        }
                      />
                    </div>
                  )}
                  {tab.label === "Leagues & Cups" && (
                    <div className={style.dropdownArrowContent}>
                      <DropdownMenu
                        items={
                          SharedData.soccerTabs[0].subNavTabs.find(
                            (subTab) => subTab.type === "leagues_cups"
                          )!.subtypes
                        }
                      />
                    </div>
                  )}
                  {tab.label === "More" && (
                    <div className={style.dropdownArrowContent}>
                      <DropdownMenu
                        items={
                          SharedData.soccerTabs[0].subNavTabs.find(
                            (subTab) => subTab.type === "more"
                          )!.subtypes
                        }
                      />
                    </div>
                  )}
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
