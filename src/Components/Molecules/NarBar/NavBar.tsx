"use client";

import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.scss";
import SubNavBar from "./SubNavBar/SubNavBar";
import { RegionTeam, Tab, Team } from "./NavBar.types";
import SharedData from "@/Utils/SharedData";
import DropdownMenu from "../../Atoms/DropdownMenu/DropdownMenu";
import HeaderTools from "@/Components/Molecules/HeaderTools/HeaderTools";
import { usePathname } from "next/navigation";

interface NavBarProps {
  regionTeams: RegionTeam[];
}

const NavBar: React.FC<NavBarProps> = () => {
  const nflTabs = SharedData.nflTabs;
  const nbaTabs = SharedData.nbaTabs;
  const ncaawTabs = SharedData.ncaawTabs;
  const ncaamTabs = SharedData.ncaamTabs;
  const nhlTabs = SharedData.nhlTabs;
  const soccerTabs = SharedData.soccerTabs;
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const path = usePathname()
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName === activeTab ? null : tabName);
  };
  const { regionTeams } = SharedData;
  const tabs: Tab[] = SharedData.nflTabs;
  
  return (
    <div>
      <div className={styles.nav}>
        <h2 className={styles.logo}>
          <a className={styles.logolink}>
            ESPN
          </a>
        </h2>
        <ul className={styles.ul}>
          <li className={`${styles.li} ${styles.dropdown}`}>
            <a
              href="/Soccer"
              className={`${styles.tab__link} ${path === "/Soccer" ? styles.active : ''}`}
              onClick={() => handleTabClick("soccer")}
            >
              <span>
                <span>Soccer</span>
              </span>
            </a>
            <span className={styles.arrow}></span>
            <div className={styles.dropdownArrowContent}>
              <DropdownMenu items={SharedData.soccer.items} />
              <div className={styles.listWrapper}>
                <ul className={styles.listWrapperUl}>
                  <li className={styles.dropdownBoxItem}>
                    <div className={styles.submenuWrapper}>
                      {regionTeams
                        .filter(
                          (regionTeam) => regionTeam.sportType === "Soccer"
                        )
                        .map((regionTeam: RegionTeam, index: number) => (
                          <ul key={index}>
                            <li className={styles.conference}>
                              <span>{regionTeam.leagueTitle}</span>
                            </li>
                            {regionTeam.teamNames.map(
                              (team: Team, teamIndex: number) => (
                                <li className={styles.team} key={teamIndex}>
                                  <a>
                                    <img
                                      className={styles.nav_logo_wrap}
                                      src={team.logoUrl}
                                      alt={`${team.teamName} Logo`}
                                    />
                                    <div>
                                      <span className={styles.link_text}>
                                        {team.teamName}
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        ))}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={`${styles.li} ${styles.dropdown}`}>
            <a
               href="/Soccer"
              className={styles.tab__link}
              onClick={() => handleTabClick("nfl")}
            >
              <span>
                <span>NFL</span>
              </span>
            </a>
            <span className={styles.arrow}></span>
            <div className={styles.dropdownArrowContent}>
              <DropdownMenu items={SharedData.nfl.items} />
              <div className={styles.listWrapper}>
                <ul className={styles.listWrapperUl}>
                  <li className={styles.dropdownBoxItem}>
                    <div className={styles.submenuWrapper}>
                      {regionTeams
                        .filter((regionTeam) => regionTeam.sportType === "NFL")
                        .map((regionTeam: RegionTeam, index: number) => (
                          <ul key={index}>
                            <li className={styles.conference}>
                              <span>{regionTeam.leagueTitle}</span>
                            </li>
                            {regionTeam.teamNames.map(
                              (team: Team, teamIndex: number) => (
                                <li className={styles.team} key={teamIndex}>
                                  <a>
                                    <img
                                      className={styles.nav_logo_wrap}
                                      src={team.logoUrl}
                                      alt={`${team.teamName} Logo`}
                                    />
                                    <div>
                                      <span className={styles.link_text}>
                                        {team.teamName}
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        ))}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={`${styles.li} ${styles.dropdown}`}>
            <a
              href="/Soccer"
              className={styles.tab__link}
              onClick={() => handleTabClick("ncaam")}
            >
              <span>
                <span>NCAAM</span>
              </span>
            </a>
            <span className={styles.arrow}></span>
            <div className={styles.dropdownArrowContent}>
              <DropdownMenu items={SharedData.ncaam.items} />
            </div>
          </li>
          <li className={`${styles.li} ${styles.dropdown}`}>
            <a
              href="/Soccer"
              className={styles.tab__link}
              onClick={() => handleTabClick("nba")}
            >
              <span>
                <span>NBA</span>
              </span>
            </a>
            <span className={styles.arrow}></span>
            <div className={styles.dropdownArrowContent}>
              <DropdownMenu items={SharedData.nba.items} />
            </div>
          </li>
          <li className={`${styles.li} ${styles.dropdown}`}>
            <a
              href="/Soccer"
              className={styles.tab__link}
              onClick={() => handleTabClick("nhl")}
            >
              <span>
                <span>NHL</span>
              </span>
            </a>
            <span className={styles.arrow}></span>
            <div className={styles.dropdownArrowContent}>
              <DropdownMenu items={SharedData.nfl.items} />
            </div>
          </li>
          <li className={`${styles.li} ${styles.dropdown}`}>
            <a
              href="/Soccer"
              className={styles.tab__link}
              onClick={() => handleTabClick("ncaaw")}
            >
              <span>
                <span>NCAAW</span>
              </span>
            </a>
            <span className={styles.arrow}></span>
            <div className={styles.dropdownArrowContent}>
              <DropdownMenu items={SharedData.ncaaw.items} />
            </div>
          </li>
          <li className={styles.floatright}>
            <HeaderTools />
          </li>
          <li
            className={`${styles.li} ${styles.dropdown} ${styles.floatright}`}
          >
            <a href="#" className={styles.tab__link}>
              <span>
                <span>Fantasy</span>
              </span>
            </a>
            <span className={styles.arrow}></span>
            <div className={styles.dropdownArrowContent}>
              <DropdownMenu items={SharedData.fantasy.items} />
            </div>
          </li>
          <li
            className={`${styles.li} ${styles.dropdown} ${styles.floatright}`}
          >
            <a href="#" className={styles.tab__link}>
              <span>
                <span>Watch</span>
              </span>
            </a>
            <span className={styles.arrow}></span>
            <div className={styles.dropdownArrowContent}>
              <DropdownMenu items={SharedData.Watch.items} />
            </div>
          </li>
          <li
            className={`${styles.li} ${styles.dropdown} ${styles.floatright}`}
          >
            <a href="#" className={styles.tab__link}>
              <span className={styles.espnbet}>
                {/* <span>ESPNBET</span> */}
              </span>
            </a>
            <span className={styles.arrow}></span>
            <div className={styles.dropdownArrowContent}>
              <DropdownMenu items={SharedData.espnbet.items} />
            </div>
          </li>
          <li
            className={`${styles.li} ${styles.dropdown} ${styles.floatright}`}
          >
            <a href="#" className={styles.tab__link}>
              <span className={styles.espnplus}>
                {/* <span>ESPN+</span> */}
              </span>
            </a>
            <span className={styles.arrow}></span>
            <div className={styles.dropdownArrowContent}>
              <DropdownMenu items={SharedData.espnplus.items} />
            </div>
          </li>
        </ul>
      </div>
      {activeTab === "nfl" &&
        nflTabs.map((tab, index) => (
          <SubNavBar
            key={index}
            logoSrc={tab.logoSrc}
            title={tab.title}
            subNavTabs={tab.subNavTabs}
          />
        ))}
      {activeTab === "nba" &&
        nbaTabs.map((tab, index) => (
          <SubNavBar
            key={index}
            logoSrc={tab.logoSrc}
            title={tab.title}
            subNavTabs={tab.subNavTabs}
          />
        ))}
      {activeTab === "ncaam" &&
        ncaamTabs.map((tab, index) => (
          <SubNavBar
            key={index}
            logoSrc={tab.logoSrc}
            title={tab.title}
            subNavTabs={tab.subNavTabs}
          />
        ))}
      {activeTab === "ncaaw" &&
        ncaawTabs.map((tab, index) => (
          <SubNavBar
            key={index}
            logoSrc={tab.logoSrc}
            title={tab.title}
            subNavTabs={tab.subNavTabs}
          />
        ))}
      {activeTab === "nhl" &&
        nhlTabs.map((tab, index) => (
          <SubNavBar
            key={index}
            logoSrc={tab.logoSrc}
            title={tab.title}
            subNavTabs={tab.subNavTabs}
          />
        ))}
      {activeTab === "soccer" || path.includes("/Soccer") &&
        soccerTabs.map((tab, index) => (
          <SubNavBar
            key={index}
            logoSrc={tab.logoSrc}
            title={tab.title}
            subNavTabs={tab.subNavTabs}
          />
        ))}
    </div>
  );
};

export default NavBar;
