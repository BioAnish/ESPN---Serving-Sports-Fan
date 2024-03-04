'use client';
import React from "react";
import style from "./NavigationBar.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import DropdownMenu from "@/Components/Atoms/DropdownMenu/DropdownMenu";
import SharedData from "@/Utils/SharedData";

const NavigationBar = () => {
  return (
    <div className={style.Nav__Container}>
      <nav className={style.Nav__Primary}>
        <div className={style.Nav__Primary__Branding__Logo}>
          <div className={style.Nav__Primary__Branding__Wrapper}>
            <a
              className={`${style.Nav__Primary__Branding__espn} ${style.Nav__Primary__Branding}`}
              tabIndex={0}
              aria-label="ESPN Home Page"
              href="/"
            >
              ESPN
            </a>
          </div>
        </div>
        <ul
          className={`${style.Nav__Primary__Menu} ${style.Nav__Primary__Menu__left}`}
        >
          <li className={`${style.Nav__Primary__Menu__Item} ${style.Nav__Primary__Menu__Item__expanded}`}>
            <a className={style.Anchor__Link} href="#">
              <span className={style.Nav__Text}>NFL</span>
            </a>
            <button className={style.Nav__Primary__Menu__Toggle}>
              <MdKeyboardArrowDown className={style.arrow} />
            </button>
            <div className={style.dropdownArrowContent}>
              <DropdownMenu darkTheme items={SharedData.nfl.items} />
            </div>
          </li>
          <li className={`${style.Nav__Primary__Menu__Item} ${style.Nav__Primary__Menu__Item__expanded}`}>
            <a className={style.Anchor__Link}>
              <span className={style.Nav__Text}>NBA</span>
            </a>
            <button className={style.Nav__Primary__Menu__Toggle}>
              <MdKeyboardArrowDown className={style.arrow} />
            </button>
          </li>
          <li className={`${style.Nav__Primary__Menu__Item} ${style.Nav__Primary__Menu__Item__expanded}`}>
            <a className={style.Anchor__Link}>
              <span className={style.Nav__Text}>NCAAM</span>
            </a>
            <button className={style.Nav__Primary__Menu__Toggle}>
              <MdKeyboardArrowDown className={style.arrow} />
            </button>
          </li>
          <li className={`${style.Nav__Primary__Menu__Item} ${style.Nav__Primary__Menu__Item__expanded}`}>
            <a className={style.Anchor__Link}>
              <span className={style.Nav__Text}>NCAAW</span>
            </a>
            <button className={style.Nav__Primary__Menu__Toggle}>
              <MdKeyboardArrowDown className={style.arrow} />
            </button>
          </li>
          <li className={`${style.Nav__Primary__Menu__Item} ${style.Nav__Primary__Menu__Item__expanded}`}>
            <a className={style.Anchor__Link}>
              <span className={style.Nav__Text}>NHL</span>
            </a>
            <button className={style.Nav__Primary__Menu__Toggle}>
              <MdKeyboardArrowDown className={style.arrow} />
            </button>
          </li>
          <li className={`${style.Nav__Primary__Menu__Item} ${style.Nav__Primary__Menu__Item__expanded}`}>
            <a className={style.Anchor__Link}>
              <span className={style.Nav__Text}>Soccer</span>
            </a>
            <button className={style.Nav__Primary__Menu__Toggle}>
              <MdKeyboardArrowDown className={style.arrow} />
            </button>
          </li>
        </ul>
        <ul
          className={`${style.Nav__Primary__Menu} ${style.Nav__Primary__Menu__right}`}
        >
          <li className={`${style.Nav__Primary__Menu__Item} ${style.Nav__Primary__Menu__Item__expanded}`}>
            <a href="/EspnPlus" className={style.Anchor__Link}>
              <span className={style.Nav__Text}>ESPN</span>
            </a>
            <button className={style.Nav__Primary__Menu__Toggle}>
              <MdKeyboardArrowDown className={style.arrow} />
            </button>
          </li>
          <li className={`${style.Nav__Primary__Menu__Item} ${style.Nav__Primary__Menu__Item__expanded}`}>
            <a className={style.Anchor__Link}>
              <span className={style.Nav__Text}>BET</span>
            </a>
            <button className={style.Nav__Primary__Menu__Toggle}>
              <MdKeyboardArrowDown className={style.arrow} />
            </button>
          </li>
          <li className={`${style.Nav__Primary__Menu__Item} ${style.Nav__Primary__Menu__Item__expanded}`}>
            <a className={style.Anchor__Link}>
              <span className={style.Nav__Text}>Watch</span>
            </a>
            <button className={style.Nav__Primary__Menu__Toggle}>
              <MdKeyboardArrowDown className={style.arrow} />
            </button>
          </li>
          <li className={`${style.Nav__Primary__Menu__Item} ${style.Nav__Primary__Menu__Item__expanded}`}>
            <a className={style.Anchor__Link}>
              <span className={style.Nav__Text}>Fantasy</span>
            </a>
            <button className={style.Nav__Primary__Menu__Toggle}>
              <MdKeyboardArrowDown className={style.arrow} />
            </button>
          </li>
          <li className={`${style.Nav__Primary__Menu__Item} ${style.Nav__Primary__Menu__Item__expanded}`}>
            <a className={style.Anchor__Link}>
              <span className={style.Nav__Text}><CgMenuGridO className={style.menu}/></span>
            </a>
            <button className={style.Nav__Primary__Menu__Toggle}>
              <MdKeyboardArrowDown className={style.arrow} />
            </button>
          </li>
        </ul>
        <ul
          className={`${style.Nav__Primary__Menu} ${style.Nav__Primary__Menu__right}`}
        >
          <li className={`${style.Nav__Primary__Menu__Item} ${style.Nav__Primary__Menu__Item__expanded}`}>
            <div className={style.Nav__Search__Toggle}>
            <FiSearch className={style.search}/>
            </div>
          </li>
          <li className={`${style.Nav__Primary__Menu__Item} ${style.Nav__Primary__Menu__Item__expanded}`}>
          <div className={style.Nav__Search__Toggle}>
            <FaRegCircleUser className={style.user}/>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
